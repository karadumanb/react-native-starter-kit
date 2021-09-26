import { FormControl as DefaultFormControl } from "native-base";
import React, { ComponentProps } from "react";

export function FormControl(props: ComponentProps<typeof DefaultFormControl>) {
  return <DefaultFormControl {...props} />;
}
