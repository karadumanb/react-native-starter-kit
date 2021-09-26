import { Box } from "components";
import { useError } from "lib/contexts/FormContext";
import { Checkbox as DefaultCheckbox } from "native-base";
import * as React from "react";
import { ErrorText } from "./ErrorText";
import { ControllerRendererProps, FormItem } from "./FormItem";

export type CheckBoxProps = Partial<
  React.ComponentProps<typeof DefaultCheckbox>
> & {
  name: string;
  styles?: InputStyle;
  defaultValue?: boolean;
};

export function Checkbox(props: CheckBoxProps) {
  const { name, styles = {}, defaultValue = false, children, ...others } = props;
  const error = useError(name);

  const checkBoxRenderer: ControllerRendererProps = ({
    field: { onChange, value, ...otherProps },
  }) => {
    return (
      //@ts-ignore
      <DefaultCheckbox
        style={styles.input}
        onChange={() => onChange(!value)}
        isChecked={value}
        value={value}
        {...otherProps}
        {...others}
      >
        <Box paddingX={2}>
          {children}
        </Box>
      </DefaultCheckbox>
    );
  };

  return (
    <Box>
      <Box>
        <FormItem
          name={name}
          defaultValue={defaultValue}
          noFormItem
          render={checkBoxRenderer}
        />
      </Box>
      <ErrorText error={error} style={styles.errorText} />
    </Box>
  );
}
