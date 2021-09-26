import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import {
  Image as NativeImage,
  ImageProps,
  ImageSourcePropType,
  LayoutChangeEvent,
} from "react-native";

interface Props extends ImageProps {
  source: ImageSourcePropType;
  useLayoutWidth?: boolean;
  fallbackDimensions?: { width: number | string; height: number | string };
  forceHeight?: boolean;
}

const isWeb = Platform.OS === "web";

export const DynamicImage = ({
  source,
  fallbackDimensions = { width: 300, height: 300 },
  useLayoutWidth = true,
  forceHeight,
  style,
  ...others
}: Props) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 300,
    height: 300,
  });
  const [width, setWidth] = useState(300);

  useEffect(() => {
    if (isWeb) {
      return;
    }
    NativeImage.getSize(
      NativeImage.resolveAssetSource(source).uri,
      (width, height) => {
        setImageDimensions({ width, height });
      },
      (error) => {
        console.error({ error });
      }
    );
  }, [source]);

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  const getStyle = () => {
    if (isWeb) {
      return {};
    }

    if (forceHeight) {
      return {
        width:
          ((fallbackDimensions.height as number) * imageDimensions.width) /
          imageDimensions.height,
        height: fallbackDimensions.height,
      };
    } else if (useLayoutWidth) {
      return {
        width: "100%",
        height: (width * imageDimensions.height) / imageDimensions.width,
      };
    } else {
      return imageDimensions;
    }
  };

  const extraStyle = React.useMemo(getStyle, [
    fallbackDimensions,
    useLayoutWidth,
    forceHeight,
    imageDimensions
  ]);

  return (
    <NativeImage
      source={source}
      style={[extraStyle, style]}
      onLayout={onLayout}
      {...others}
    />
  );
};
