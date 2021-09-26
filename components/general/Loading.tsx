import * as React from "react";
import { StyleSheet } from "react-native";
import { Spinner as DefaultSpinner } from "native-base";
import { View } from "./View";
import Layout from "constants/Layout";

export type TextProps = React.ComponentProps<typeof DefaultSpinner> & {
  type?: "page" | "default";
};

export function Loading({ type, color, ...others }: TextProps) {
  if (type === "page") {
    return (
      <View style={styles.pageLoaderWrapper}>
        <DefaultSpinner color={color} {...others} />
      </View>
    );
  }

  return <DefaultSpinner color={color} {...others} />;
}

const styles = StyleSheet.create({
  pageLoaderWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: Layout.window.height,
    width: Layout.window.width,
  },
});
