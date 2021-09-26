import * as React from "react";
import { Icon as DefaultIcon } from "native-base";

export type IconProps = React.ComponentProps<typeof DefaultIcon> & {
  size?: number;
};

export function Icon({ style, size = 16, ...otherProps }: IconProps) {
  return <DefaultIcon size={size} style={style} {...otherProps} />;
}
