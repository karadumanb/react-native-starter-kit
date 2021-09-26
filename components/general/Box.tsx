import { ComponentProps } from "react";
import { Box as DefaultBox } from "native-base";
import React from "react";

type BoxProps = ComponentProps<typeof DefaultBox>;

export function Box(props: BoxProps) {
  return <DefaultBox {...props} />;
}
