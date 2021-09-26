import { Divider as DefaultDivider } from "native-base";
import React from "react";

export type DividerProps = React.ComponentProps<typeof DefaultDivider>;

export function Divider({
  bg = "gray.400",
  marginY = 3,
  ...others
}: DividerProps) {
  return <DefaultDivider bg={bg} marginY={marginY} {...others} />;
}
