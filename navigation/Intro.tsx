import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Intro from "screens/intro/Intro";
import { Routes } from "./Routes";

const IntroStack = createStackNavigator<IntroParamList>();

export default function IntroNavigator() {
  return (
    <IntroStack.Navigator initialRouteName={Routes.Intro.Base as "Intro"}>
      <IntroStack.Screen
        name={Routes.Intro.Base as "Intro"}
        component={Intro}
        options={{ headerShown: false }}
      />
    </IntroStack.Navigator>
  );
}
