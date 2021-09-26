import { Dimensions, Platform } from "react-native";

const width =
  Platform.OS === "web"
    ? Dimensions.get("window").width
    : Dimensions.get("screen").width;
const height =
  Platform.OS === "web"
    ? Dimensions.get("window").height
    : Dimensions.get("screen").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
