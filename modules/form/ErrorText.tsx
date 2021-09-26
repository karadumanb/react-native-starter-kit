import { Text } from "components";
import { Input as DefaultInput } from "native-base";
import React, { ComponentProps } from "react";
import { StyleProp, TextStyle } from "react-native";

type Props = ComponentProps<typeof DefaultInput> & {
  styles?: StyleProp<TextStyle>;
  error?: string;
};

export function ErrorText({ error, style }: Props) {
  if (!error) {
    return null;
  }

  return (
    <Text color="danger.50" style={style} typography="small">
      {error}
    </Text>
  );
}
