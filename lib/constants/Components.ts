import { ITheme } from "native-base";

export const ThemedComponents: Partial<ITheme["components"]> = {
  //@ts-ignore
  Input: {
    baseStyle: (props: any) => ({
      ...props,
      _focus: {
        borderColor: "darkText",
      },
      _android: {
        _focus: {
          borderColor: "darkText",
        },
      },
      _ios: {
        _focus: {
          borderColor: "darkText",
        },
      },
    }),
  },
  //@ts-ignore
  Checkbox: {
    baseStyle: (props: any) => ({
      ...props,
      _checkbox: {
        bg: "coolGray.50",
        borderColor: "warmGray.50",
        _checked: {
          bg: "success.50",
          borderColor: "green.50",
        }
      },
    }),
  }
};
