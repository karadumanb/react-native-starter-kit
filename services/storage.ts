import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToStorage = (token: string, as: string) => {
  return AsyncStorage.setItem(as, token);
};

export const getFromStorage = (as: string) => {
  return AsyncStorage.getItem(as);
};

export const resetStorage = () => {
  return AsyncStorage.clear();
};
