import { StyleSheet } from "react-native";
import Layout from "./Layout";

const commonSpacing = 10;
const spacing = (factor: number = 1) => factor * commonSpacing;

const fullHeight = { height: "100%" };
const fullWidth = { width: "100%" };
const fullWidthDimension = { width: Layout.window.width };
const fullHeightDimension = { height: Layout.window.height };
const minWidthFullSecreen = { minWidth: Layout.window.height };
const minHeightFullSecreen = { minHeight: Layout.window.height };

const Styles = StyleSheet.create({
  fullWidth,
  fullHeight,
  fullWidthDimension,
  fullHeightDimension,
  minWidthFullSecreen,
  minHeightFullSecreen,
})

export { spacing, commonSpacing, Styles };
