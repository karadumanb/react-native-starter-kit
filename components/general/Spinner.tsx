import { Spinner as DefaultSpinner } from "native-base";
import React, { ComponentProps } from "react";
import { Box } from "./Box";

export interface SpinnerProps extends ComponentProps<typeof DefaultSpinner> {
  children?: React.ReactNode;
  loading?: boolean;
}

export function Spinner({ children, loading, ...others }: SpinnerProps) {
  if (!loading) {
    return <>{children}</>;
  }

  if (children) {
    return (
      <Box>
        {children}
        <Box position="absolute" width="100%" height="100%" alignItems="center">
          <Box
            width="100%"
            height="100%"
            backgroundColor="coolGray.50"
            position="absolute"
            opacity={0.5}
          />
          <Box justifyContent="center" height="80%">
            <DefaultSpinner {...others} />
          </Box>
        </Box>
      </Box>
    );
  } else {
    return <DefaultSpinner {...others} />;
  }
}
