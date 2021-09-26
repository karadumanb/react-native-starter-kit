import { Box, Text, Image } from "components";
import Layout from "constants/Layout";
import React from "react";

type Props = {
  item: SlideItem;
};

export default function Item({ item }: Props) {
  return (
    <Box paddingX={5} alignItems="center" justifyContent="center">
      <Image
        size={Layout.window.height / 3}
        source={item.image}
        alt={item.title}
        resizeMode="contain"
      />
      <Text bold typography="h3">
        {item.title}
      </Text>
      <Text typography="p">{item.text}</Text>
    </Box>
  );
}
