import { useNavigation } from "@react-navigation/native";
import { Card, Flex, Text } from "components";
import useTranslation from "lib/hooks/useTranslation";
import { Routes } from "navigation/Routes";
import React from "react";
import OTPForm from "concepts/Auth/Form/OTP";
import CountDown from "concepts/Auth/CountDown";
import useToast from "lib/hooks/useToast";

export default function OTP({ route }: { route: RouteProps }) {
  const { navigate, goBack } = useNavigation<any>();
  const { tScreen } = useTranslation(route);
  const toast = useToast();

  const onSuccess = () => {
    navigate(Routes.Root.Base);
  };

  const onCountDownFinish = () => {
    goBack();
    toast.show({
      title: tScreen({ id: "count_down_end_title" }),
      description: tScreen({ id: "count_down_end_title" }),
      placement: "bottom",
      status: "info",
    });
  };

  return (
    <Card bg="white">
      <Flex mb="1" direction={"row"} justifyContent="space-between">
        <Text typography="h4">{tScreen({ id: "title" })}</Text>
        <CountDown typography="h4" onFinish={onCountDownFinish} />
      </Flex>
      <Text typography="p">{tScreen({ id: "description" })}</Text>
      <OTPForm onSuccess={onSuccess} member={route.params?.data} />
    </Card>
  );
}
