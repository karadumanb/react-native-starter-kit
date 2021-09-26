import { Input as DefaultInput } from "native-base";
import React, { ComponentProps, Ref } from "react";

type Props = ComponentProps<typeof DefaultInput>;

export const Input = React.forwardRef(({ ...others }: Props, ref: Ref<any>) => {
  return (
    <DefaultInput
      ref={ref}
      variant="underlined"
      _light={{
        color: "darkText",
        borderColor: "warmGray.50",
        placeholderTextColor: "warmGray.50",
      }}
      _dark={{
        color: "darkText",
        borderColor: "warmGray.50",
        placeholderTextColor: "warmGray.50",
      }}
      {...others}
    />
  );
});
