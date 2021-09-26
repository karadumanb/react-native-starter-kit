import * as React from "react";
import { Button as DefaultButton } from "native-base";
import { Text } from "./Text";

export type ButtonProps = React.ComponentProps<typeof DefaultButton> & {
  title?: string;
  loading?: boolean;
};

export function Button(props: ButtonProps) {
  const { title, children = null, loading, ...others } = props;
  return (
    <DefaultButton colorScheme="primary" isLoading={loading} {...others}>
      {children}
      {title && <Text>{title}</Text>}
    </DefaultButton>
  );
}
