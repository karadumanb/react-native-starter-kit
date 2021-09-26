import { ComponentProps } from "react";
import { Image as DefaultImage } from "native-base";
import React from "react";

type ImageProps = ComponentProps<typeof DefaultImage>;

export function Image(props: ImageProps) {
  return <DefaultImage {...props} />;
}
