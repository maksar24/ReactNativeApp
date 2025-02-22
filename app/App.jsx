import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={style.section}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  console.log("Rendering NavigationContainer");

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
