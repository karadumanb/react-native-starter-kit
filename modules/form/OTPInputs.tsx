import { Box, Flex, Input } from "components";
import React, { useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInputKeyPressEventData,
} from "react-native";
import { FormItem } from "./FormItem";

const otpTextInputs: any[] = [];

const OTPInputs = ({
  onChange,
  onBlur,
  value,
}: {
  onChange?: any;
  onBlur?: any;
  value?: string;
}) => {
  const [otp, setOtp] = useState([]);

  useEffect(() => {
    otpTextInputs[0] && focus(otpTextInputs[0]);
  }, []);

  const focus = (el: any, isFocused: boolean = true) => {
    try {
      console.log('hereee')
      if(isFocused) {
        el.focus();
      } else {
        el.blur();
      }
    } catch (err) {
      console.log(el)
      console.log(err)
    }
  };

  const onKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      e.preventDefault();
      setNewValue("", index);
      index !== 0 && focus(otpTextInputs[index - 1]);
    } else {
      focusNext(index, e.nativeEvent.key);
    }
  };

  const focusNext = (index: number, value: string) => {
    const val = value ? value.slice(value.length - 1) : "";

    if (index < otpTextInputs.length - 1 && val) {
      focus(otpTextInputs[index + 1]);
    }
    if (index === otpTextInputs.length - 1) {
      focus(otpTextInputs[index], false);
    }
    setNewValue(val, index);
  };

  const setNewValue = (val: string, index: number) => {
    const otpState: any = [...otp];
    otpState[index] = val;
    setOtp(otpState);
    onChange(otpState.map((v: string) => v || "").join(""));
  };

  return (
    <Flex style={styles.gridPad} direction={"row"} justify="space-between">
      {Array(4)
        .fill(0)
        .map((_i, j) => (
          <Box key={j} style={{ margin: 3, width: 50 }}>
            <Input
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(e) => Platform.OS === 'android' && focusNext(j, e)}
              onKeyPress={(e) => onKeyPress(e, j)}
              ref={(ref) => {
                return (otpTextInputs[j] = ref);
              }}
              value={otp[j] || ""}
              onBlur={onBlur}
              autoFocus={j === 0}
              maxLength={1}
            />
          </Box>
        ))}
    </Flex>
  );
};

const OTPInputsFormItem = ({ name }: { name: string }) => (
  <FormItem
    name={name}
    noFormItem
    render={({ field: field }) => OTPInputs(field)}
  />
);

const styles = StyleSheet.create({
  gridPad: { padding: 10 },
  input: {
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
});

export default OTPInputsFormItem;
