import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Box, Loading } from "components";
import { Colors, tintColor } from "constants/Colors";
import * as SplashScreen from "expo-splash-screen";
import { useAppContext } from "lib/hooks/useAppContext";
import * as React from "react";
import { Platform } from "react-native";
import { Routes } from "./Routes";

const BottomTab = createBottomTabNavigator<RootParamList>();

export default function BottomTabNavigator() {
  const { navigate } = useNavigation<any>();
  const { isLoggedIn } = useAppContext();

  React.useEffect(() => {
    SplashScreen.hideAsync();
    if (isLoggedIn === false) {
      navigate(Routes.Auth.Base, { replace: true });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Loading type="page" color={Colors.primary[50]} />;
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Page1Name"
      screenOptions={{
        tabBarActiveTintColor: tintColor,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:
          Platform.OS === "ios"
            ? {
                height: 90,
              }
            : {
                height: 70,
              },
      }}
    >
      <BottomTab.Screen
        name="Page1Name"
        component={Page1Navigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Page1Name"
        component={Page1Navigator}
        options={{
          tabBarIcon: () => (
            <Box bg={"primary.400"} p={2} rounded={50}>
              <TabBarIcon name="add" color={Colors.white} />
            </Box>
          ),
        }}
      />
      <BottomTab.Screen
        name="Page1Name"
        component={Page1Navigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="card" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} {...props} />;
}

/************* ALL Stacks ************/

// Page 1
const Page1Stack = createStackNavigator<RootParamList>();
function Page1Navigator() {
  return (
    <Page1Stack.Navigator>
      <Page1Stack.Screen
        name="Page1Name"
        component={() => <></>}
        options={{ headerShown: false }}
      />
    </Page1Stack.Navigator>
  );
}
