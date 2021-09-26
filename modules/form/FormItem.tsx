import { FormControl } from "components/data_entry/FormControl";
import { useFormContext } from "lib/contexts";
import { FormControl as DefaultFormControl } from "native-base";
import React, { ComponentProps } from "react";
import { Controller } from "react-hook-form";

type ItemProps = ComponentProps<typeof FormControl>;

export type ControllerRendererProps = ComponentProps<
  typeof Controller
>["render"];

type Props = {
  name: string;
  required?: boolean | undefined;
  formItemProps?: ItemProps;
  noFormItem?: boolean;
  label?: React.ReactNode;
  render: ControllerRendererProps;
};

export function FormItem({
  name,
  defaultValue = "",
  required,
  rules = {},
  formItemProps = {},
  noFormItem = false,
  label,
  render,
}: Partial<ComponentProps<typeof Controller>> & Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...(required
          ? {
              required: "* Zorunlu alan",
            }
          : {}),
        ...rules,
      }}
      defaultValue={defaultValue}
      render={(props) =>
        noFormItem ? (
          render(props)
        ) : (
          <FormControl isRequired isInvalid>
            {label && (
              <DefaultFormControl.Label>{label}</DefaultFormControl.Label>
            )}
            <FormControl {...formItemProps}>{render(props)}</FormControl>
          </FormControl>
        )
      }
    />
  );
}
