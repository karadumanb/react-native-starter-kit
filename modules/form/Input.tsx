import { Box, Input as DefaultInput } from "components";
import { Colors } from "constants/Colors";
import { useError } from "contexts/FormContext";
import useTranslation from "hooks/useTranslation";
import React, { ComponentProps } from "react";
import { ErrorText } from "./ErrorText";
import { ControllerRendererProps, FormItem } from "./FormItem";

type Props = ComponentProps<typeof DefaultInput> & {
  styles?: InputStyle;
  error?: string;
  name: string;
  required?: boolean;
  addon?: React.ReactNode;
};

export function Input({
  styles = {},
  name,
  required,
  addon = null,
  placeholder,
  ...others
}: Props) {
  const error = useError(name);
  const { tModule } = useTranslation({ name: "Form" });

  const getPlaceholder = () => {
    if (placeholder) {
      if (required) {
        return `* ${placeholder} ${tModule({
          id: "placeholder_required_addon",
        })}`;
      }

      return placeholder;
    }
  };

  const inputRenderer: ControllerRendererProps = ({
    field: { onChange, value, ...props },
  }) => (
    <DefaultInput
      style={[
        styles.input,
        error && {
          borderColor: Colors.danger[50],
        },
      ]}
      onChange={(e) => onChange(e.nativeEvent.text)}
      value={value}
      placeholder={getPlaceholder()}
      InputRightElement={addon ? <Box marginRight={2}>{addon}</Box> : undefined}
      {...props}
      {...others}
    />
  );

  return (
    <Box paddingBottom={2}>
      <FormItem name={name} required={required} render={inputRenderer} />
      <ErrorText error={error} style={styles.errorText} />
    </Box>
  );
}
