import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../constants/Colors";

import IconButton from "@/components/ui/IconButton";

const MapScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Карта</Text>
        <IconButton
          onPress={handleBack}
          name="arrow-left"
          size="24"
          style={styles.logoutButton}
          color="black"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.border_gray,
    height: 44,
    backgroundColor: Colors.white,
  },
  title: {
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    color: Colors.black_primary,
  },
  logoutButton: {
    position: "absolute",
    top: 10,
    left: 16,
  },
});

export default MapScreen;
