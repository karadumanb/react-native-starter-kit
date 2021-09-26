import * as React from "react";
import { ComponentProps } from "react";
import { Pressable } from "native-base";

interface PressableItemProps extends ComponentProps<typeof Pressable> {}

export const PressableItem: React.FC<PressableItemProps> = ({
  children,
  ...others
}) => {
  return (
    <Pressable
      alignItems="center"
      bg="white"
      justifyContent="center"
      px={4}
      width="100%"
      _pressed={{
        bg: "coolGray.600",
      }}
      {...others}
    >
      {children}
    </Pressable>
  );
};
