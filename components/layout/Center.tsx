import { Center as DefaultCenter } from "native-base";
import * as React from "react";

export type CenterProps = React.ComponentProps<typeof DefaultCenter>;

export function Center(props: CenterProps) {
  return <DefaultCenter {...props} />;
}
