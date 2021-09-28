import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Box } from "components";
import { useAppContext } from "lib/hooks/useAppContext";
import * as React from "react";
import Login from "screens/auth/Login";
import OTP from "screens/auth/OTP";
import Register from "screens/auth/Register";
import { Routes } from "./Routes";

const AuthStack = createStackNavigator<AuthParamList>();

export default function AuthNavigator() {
  const { isLoggedIn } = useAppContext();
  const { navigate } = useNavigation<any>();

  React.useEffect(() => {
    if (isLoggedIn === true) {
      navigate(Routes.Root.Base, { replace: true });
    }
  }, [isLoggedIn]);

  return (
    <Box
      safeAreaTop
      style={{ height: "100%" }}
    >
      <AuthStack.Navigator
        initialRouteName={Routes.Auth.Register as "Register"}
      >
        <AuthStack.Screen
          name={Routes.Auth.Register as "Register"}
          component={Register}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={Routes.Auth.Login as "Login"}
          component={Login}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={Routes.Auth.OTP as "OTP"}
          component={OTP}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </Box>
  );
}
