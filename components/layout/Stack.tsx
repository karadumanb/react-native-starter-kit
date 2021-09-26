import { HStack as DefaultHStack, VStack as DefaultVStack } from "native-base";
import * as React from "react";

export type HStackProps = React.ComponentProps<typeof DefaultHStack>;

export function HStack(props: HStackProps) {
  return <DefaultHStack {...props} />;
}

export type VStackProps = React.ComponentProps<typeof DefaultVStack>;

export function VStack(props: VStackProps) {
  return <DefaultVStack {...props} />;
}
