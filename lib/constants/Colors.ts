import { ITheme } from "native-base";

export const tintColor = "#2f95dc";
const primaryColor = "#ffd428";
const textColor = "#242a37";
const bgGray = "#f7f8fa";
const gray = "#c8c7cc";
const white = "#fff";
const black = "#000";
const green = "#417505";
const lightGreen = "#9ac646";
const blue = "#4a90e2";
const red = "#ff0019";
const textGray = "#8a8a8f"

type colorPattern = ITheme["colors"]["gray"];

//@ts-ignore
export const Colors: ITheme["colors"] & {
  success: colorPattern;
  primary: colorPattern;
  danger: colorPattern;
} = {
  primary: {
    50: "#FFFF8E",
    100: "#FFFF8E",
    200: "#FFFF75",
    300: "#FFFF5B",
    400: primaryColor,
    500: "#E6BB0F",
    600: "#CCA100",
    700: "#B38800",
    800: "#996E00",
    900: "#805500"
  },
  coolGray: {
    50: bgGray,
    100: bgGray,
    200: bgGray,
    300: bgGray,
    400: bgGray,
    500: "#EDEEF0",
    600: "#E3E4E6",
    700: "#D8D9DB",
    800: "#CECFD1",
    900: "#C4C5C7",
  },
  gray: {
    50: gray,
    100: gray,
    200: gray,
    300: gray,
    400: gray,
    500: gray,
    600: gray,
    700: gray,
    800: gray,
    900: gray,
  },
  warmGray: {
    50: textGray,
    100: textGray,
    200: textGray,
    300: textGray,
    400: textGray,
    500: textGray,
    600: textGray,
    700: textGray,
    800: textGray,
    900: textGray,
  },
  white,
  black,
  lightText: textColor,
  darkText: textColor,
  green: {
    50: green,
    100: green,
    200: green,
    300: green,
    400: green,
    500: green,
    600: green,
    700: green,
    800: green,
    900: green,
  },
  success: {
    50: lightGreen,
    100: lightGreen,
    200: lightGreen,
    300: lightGreen,
    400: lightGreen,
    500: lightGreen,
    600: lightGreen,
    700: lightGreen,
    800: lightGreen,
    900: lightGreen,
  },
  blue: {
    50: blue,
    100: blue,
    200: blue,
    300: blue,
    400: blue,
    500: blue,
    600: blue,
    700: blue,
    800: blue,
    900: blue,
  },
  danger: {
    50: red,
    100: red,
    200: red,
    300: red,
    400: red,
    500: red,
    600: red,
    700: red,
    800: red,
    900: red,
  },
  red: {
    50: red,
    100: red,
    200: red,
    300: red,
    400: red,
    500: red,
    600: red,
    700: red,
    800: red,
    900: red,
  },
  error: {
    50: red,
    100: red,
    200: red,
    300: red,
    400: red,
    500: red,
    600: red,
    700: red,
    800: red,
    900: red,
  },
};
