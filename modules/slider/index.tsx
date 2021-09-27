import { useNavigation } from "@react-navigation/native";
import { BackIcon, Button, Header, Ionicon } from "components";
import useTranslation from "lib/hooks/useTranslation";
import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Item from "./item";

type SlideItem = {
  key: string;
  title: string;
  text: string;
  image: ImageSourcePropType;
};

interface Props {
  data: SlideItem[];
}

export default function Slider({ data }: Props) {
  const { goBack } = useNavigation<any>();
  const { tModule } = useTranslation({ name: "Slider" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const slider = React.useRef<any>({
    state: {
      activeIndex: 0,
    },
    goToSlide: (_pageNum: number) => {},
  });

  const getCurrentSlide = () => slider.current.state.activeIndex;

  const goToNext = () => slider.current.goToSlide(getCurrentSlide() + 1);

  const goToPrev = () => slider.current.goToSlide(getCurrentSlide() - 1);

  const onDone = () => goBack();

  const renderButton = (lastItem: boolean) => {
    return (
      <Button
        variant="solid"
        title={lastItem ? tModule("start_app") : tModule("continue")}
        onPress={lastItem ? onDone : goToNext}
      />
    );
  };

  return (
    <>
      <Header
        left={currentSlide !== 0 && <BackIcon onBack={goToPrev} />}
        body={null}
        right={
          <Button variant="unstyled" onPress={onDone}>
            <Ionicon name="close" />
          </Button>
        }
      />
      <AppIntroSlider<SlideItem>
        renderItem={({ item }) => <Item item={item} />}
        data={data}
        onDone={onDone}
        renderDoneButton={() => renderButton(true)}
        renderNextButton={() => renderButton(false)}
        onSlideChange={setCurrentSlide}
        ref={slider}
        bottomButton
      />
    </>
  );
}
