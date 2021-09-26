import { Checkbox as DefaultCheckbox } from "native-base";
import React, { ComponentProps } from "react";

type Props = ComponentProps<typeof DefaultCheckbox>

export function Checkbox({ ...others }: Props) {
  return <DefaultCheckbox {...others} />;
}
