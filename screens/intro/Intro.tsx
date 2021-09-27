import useTranslation from "lib/hooks/useTranslation";
import { Slider } from "modules";
import { Box } from "components";
import React from "react";

const data = [
  {
    image: require("assets/images/intro/intro1.png"),
  },
  {
    image: require("assets/images/intro/intro2.png"),
  },
  {
    image: require("assets/images/intro/intro3.png"),
  },
  {
    image: require("assets/images/intro/intro4.png"),
  },
  {
    image: require("assets/images/intro/intro5.png"),
  },
];

export default function Intro({ route }: { route: RouteProps }) {
  const { tScreen } = useTranslation(route);

  const slides = React.useMemo(
    () =>
      data.map((slide, index) => ({
        ...slide,
        key: `slide_item_${index}`,
        title: tScreen(`title.slide_item_${index}`),
        text: tScreen(`description.slide_item_${index}`),
      })),
    [data]
  );

  return (
    <Box height="100%">
      <Slider data={slides} />
    </Box>
  );
}
