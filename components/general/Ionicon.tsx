import * as React from "react";
import { Ionicons as DefaultIcon } from "@expo/vector-icons";

export type IoniconProps = React.ComponentProps<typeof DefaultIcon> & {
  size?: number;
};

export function Ionicon({
  style,
  color,
  size = 16,
  ...others
}: IoniconProps) {
  return (
    <DefaultIcon
      style={[{ color, fontSize: size }, style]}
      color={color}
      {...others}
    />
  );
}
