import { Text } from "components/general/Text";
import { Box } from "components/general/Box";
import { VStack } from "components/layout/Stack";
import React, { ComponentProps } from "react";
import { Platform } from "react-native";

interface CardProps extends ComponentProps<typeof Box> {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export function Card({ children, title, bg, ...others }: CardProps) {
  return (
    <Box rounded="lg" bg={bg} {...others}>
      {Platform.OS !== "android" && (
        <Box
          bg={bg}
          borderRadius="lg"
          position="absolute"
          width="100%"
          height="100%"
          shadow={1}
          zIndex={1}
        />
      )}
      <VStack space={4} p={6} zIndex={2}>
        {title && <Text typography="h3">{title}</Text>}
        {children}
      </VStack>
    </Box>
  );
}
