import { Hero } from "./components/hero";
import { AddLocation } from "./components/screens/AddLocation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { IceCreamDetails } from "./components/screens/Details";

export type RootStackParamList = {
  Hero: undefined;
  AddLocation: undefined;
  Details: { name: string; location: string; flavors: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Hero" component={Hero} />
            <Stack.Screen name="AddLocation" component={AddLocation} />
            <Stack.Screen name="Details" component={IceCreamDetails} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}
