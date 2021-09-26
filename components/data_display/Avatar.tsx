import { Avatar as DefaultAvatar } from "native-base";
import React, { ComponentProps } from "react";

export interface AvatarProps extends ComponentProps<typeof DefaultAvatar> {}

export function Avatar(props: AvatarProps) {
  return <DefaultAvatar {...props} />;
}
