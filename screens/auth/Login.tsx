import { useNavigation } from "@react-navigation/native";
import { Box, Card, Text } from "components";
import LoginForm from "concepts/Auth/Form/Login";
import useTranslation from "lib/hooks/useTranslation";
import { Routes } from "navigation/Routes";
import React from "react";

export default function Login({ route }: { route: RouteProps }) {
  const { navigate } = useNavigation<any>();
  const { tScreen } = useTranslation(route);

  const onSuccess = (data: IUser) => {
    navigate(Routes.Auth.OTP, { data });
  };

  return (
    <Card bg="white">
      <Box>
        <Text typography="h4">{tScreen("title")}</Text>
      </Box>
      <LoginForm onSuccess={onSuccess} />
    </Card>
  );
}
