import { Linking, Platform, Alert } from "react-native";

export const dialCall = (phoneNumber: string | number) => {
  const getNumber = () => {
    if (Platform.OS === "android") {
      return `tel:${phoneNumber}`;
    } else {
      return `telprompt:${phoneNumber}`;
    }
  };

  Linking.canOpenURL(getNumber())
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not supported");
      } else {
        return Linking.openURL(getNumber());
      }
    })
    .catch((err) => console.log(err));
};
