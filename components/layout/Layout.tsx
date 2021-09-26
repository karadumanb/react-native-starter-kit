import { Box, Container as DefaultContainer, HStack } from "native-base";
import * as React from "react";

export type ContainerProps = React.ComponentProps<typeof DefaultContainer>;

export function Container(props: ContainerProps) {
  return <DefaultContainer {...props} />;
}

export type HeaderProps = {
  left?: React.ReactNode;
  body?: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode;
  bg?: string;
  justifyContent?: React.ComponentProps<typeof HStack>["justifyContent"];
  alignItems?: React.ComponentProps<typeof HStack>["alignItems"];
};

export function Header({
  left = null,
  body = null,
  right = null,
  bg,
  children,
  ...others
}: HeaderProps) {
  return (
    <Box width="100%">
      <Box safeAreaTop bg={bg} />
      <HStack
        bg={bg}
        px={3}
        py={3}
        justifyContent={children ? "center" : "space-between"}
        alignItems="center"
        width="100%"
        {...others}
      >
        {children ? (
          children
        ) : (
          <>
            <Box width="60px" alignItems="flex-start">
              {left}
            </Box>
            <Box>{body}</Box>
            <Box width="60px" alignItems="flex-end">
              {right}
            </Box>
          </>
        )}
      </HStack>
    </Box>
  );
}
