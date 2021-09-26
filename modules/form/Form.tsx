import { Box, Button, VStack } from "components";
import { Styles } from "constants/Styles";
import React, { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "lib/contexts";

type Props = {
  buttonProps?: ComponentProps<typeof Button>;
  recordType: string;
  visualRecordType?: string;
  onSubmit: (data: any) => void;
  children?: React.ReactNode;
  style?: any;
};

export function Form({
  children,
  style,
  buttonProps,
  recordType,
  visualRecordType,
  onSubmit,
}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormContext
      control={control}
      recordType={recordType}
      visualRecordType={visualRecordType}
      errors={errors}
    >
      <VStack space={2} style={[Styles.fullWidth, style]}>
        <Box>{children}</Box>
        <Box pt={5}>
          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            {...buttonProps}
          />
        </Box>
      </VStack>
    </FormContext>
  );
}
