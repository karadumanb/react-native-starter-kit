import { Flex as DefaultFlex } from "native-base";
import React from "react";

export type FlexProps = React.ComponentProps<typeof DefaultFlex>;

export function Flex(props: FlexProps) {
  return <DefaultFlex {...props} />;
}
