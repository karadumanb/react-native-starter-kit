import { Tag as DefaultTag } from "native-base";
import React, { ComponentProps } from "react";

export interface TagProps extends ComponentProps<typeof DefaultTag> {}

export function Tag(props: TagProps) {
  return <DefaultTag {...props} />;
}
