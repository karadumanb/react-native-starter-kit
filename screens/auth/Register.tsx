import { useNavigation } from "@react-navigation/native";
import { Box, Card, ReachUs, Text } from "components";
import RegisterForm from "concepts/Auth/Form/Register";
import useTranslation from "lib/hooks/useTranslation";
import { Routes } from "navigation/Routes";
import React from "react";
import { Alert } from "react-native";

export default function Register({ route }: { route: RouteProps }) {
  const { navigate } = useNavigation<any>();
  const { tScreen, Trans } = useTranslation(route);

  const onSuccess = (data: IUser) => {
    Alert.alert("Registration accomplished", "Flow is missing for now.");
    console.log({ data });
  };

  return (
    <>
      <Card bg="white">
        <Box>
          <Text typography="h4">{tScreen("title")}</Text>
        </Box>
        <RegisterForm onSuccess={onSuccess} />
      </Card>
      <Box paddingX={2}>
        <Box paddingTop={4}>
          <Text typography="p" align="center">
            <Trans
              keyGenerator="screens"
              i18nKey="already-have-account"
              components={{
                login: (
                  <Text
                    bold
                    typography="p"
                    accessibilityRole="link"
                    onPress={() => navigate(Routes.Auth.Login)}
                  />
                ),
              }}
            />
          </Text>
        </Box>
        <Box alignItems="center" paddingBottom={1}>
          <ReachUs />
        </Box>
        <Box>
          <Text align="center" onPress={() => navigate(Routes.Intro.Base)}>
            {tScreen("checkout-app")}
          </Text>
        </Box>
      </Box>
    </>
  );
}
