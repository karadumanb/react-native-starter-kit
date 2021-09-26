import * as React from "react";
import { Text as DefaultText } from "native-base";

export type TextProps = React.ComponentProps<typeof DefaultText> & {
  bold?: boolean;
  typography?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "xsmall";
  align?: "center" | "left" | "right";
};

const fontSizes = {
  h1: 60,
  h2: 40,
  h3: 30,
  h4: 24,
  h5: 20,
  p: 16,
  small: 12,
  xsmall: 10,
};

const lineHeights = {
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  p: 24,
  small: undefined,
  xsmall: undefined,
}

export function Text({
  style,
  bold,
  typography = "p",
  align,
  color = "darkText",
  ...otherProps
}: TextProps) {
  return (
    <DefaultText
      bold={bold}
      color={color}
      style={[
        {
          fontFamily: "avenir-light",
          fontSize: fontSizes[typography as keyof typeof fontSizes],
          paddingVertical: 5,
          lineHeight: lineHeights[typography as keyof typeof fontSizes]
        },
        style,
        bold && { fontFamily: "avenir-bold" },
        align && { textAlign: align },
      ]}
      {...otherProps}
    />
  );
}
