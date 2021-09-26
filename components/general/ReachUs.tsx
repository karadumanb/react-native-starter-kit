import { Colors } from "constants/Colors";
import useTranslation from "hooks/useTranslation";
import React from "react";
import { dialCall } from "services";
import { Box } from "./Box";
import { Ionicon } from "./Ionicon";
import { Text } from "./Text";

const phoneNumber = "1234567890";

const ReachUs = () => {
  const { tComponent } = useTranslation({ name: "General" });

  return (
    <Text>
      {tComponent(
        {
          id: "reach-us",
        },
        {
          button: (val: string) => (
            <Text
              bold
              typography="p"
              accessibilityRole="link"
              onPress={() => dialCall(phoneNumber)}
              color="success.50"
            >
              <Box paddingX={1} marginTop={-1}>
                <Ionicon size={18} name="call" color={Colors.success[50]} />
              </Box>
              {val}
            </Text>
          ),
        }
      )}
    </Text>
  );
};

export default ReachUs;
