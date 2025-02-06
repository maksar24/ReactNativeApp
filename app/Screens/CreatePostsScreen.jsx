import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Colors } from "@/constants/Colors";

import IconButton from "@/components/ui/IconButton";
import Button from "@/components/ui/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const navigateToCameraScreen = () => {
    console.log("Camera");
  };

  const pickImage = () => {
    console.log("Download photo");
  };

  const handlePublish = () => {
    console.log({ title, location });
    handleDelete();
  };

  const handleDelete = () => {
    setTitle("");
    setLocation("");
    setIsDeletePressed(true);
    console.log("Data cleared");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.header}>
          <Text style={styles.title}>Створити публікацію</Text>
          <IconButton
            onPress={handleBack}
            name="arrow-left"
            size="24"
            style={styles.logoutButton}
            color="black"
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 80}
          style={styles.container}
        >
          <ScrollView style={styles.section}>
            <View style={styles.imageContainer}>
              <View style={styles.emptyImgContainer}>
                <TouchableOpacity
                  style={styles.cameraIconWrapper}
                  onPress={navigateToCameraScreen}
                  hitSlop={20}
                >
                  <Icon name="camera" size={34} color={Colors.border_gray} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={pickImage}>
                <Text style={[styles.buttonText, styles.grayText]}>
                  Завантажте фото
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TextInput
                style={[styles.input, title && styles.inputText]}
                placeholder="Назва..."
                placeholderTextColor={Colors.text_gray}
                value={title}
                onChangeText={setTitle}
              />
              <View style={styles.locationInputContainer}>
                <Icon
                  name="map-marker-outline"
                  size={24}
                  color={Colors.text_gray}
                  style={styles.locationIcon}
                />
                <TextInput
                  style={[styles.input, styles.locationInput]}
                  placeholder="Місцевість..."
                  placeholderTextColor={Colors.text_gray}
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                buttonStyle={
                  !(title && location)
                    ? { backgroundColor: Colors.light_gray }
                    : {}
                }
              >
                <Text
                  style={[
                    styles.buttonText,
                    !(title && location) && { color: Colors.text_gray },
                  ]}
                  onPress={handlePublish}
                >
                  Опубліковати
                </Text>
              </Button>

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.trashIconWrapper}
                  onPress={() => {
                    setIsPressed(!isPressed);
                    handleDelete();
                  }}
                  hitSlop={20}
                >
                  <Icon
                    name="trash-can-outline"
                    size={34}
                    color={Colors.border_gray}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
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
  buttonText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "400",
    color: Colors.white,
    textAlign: "center",
  },
  grayText: {
    textAlign: "left",
    color: Colors.text_gray,
  },
  imageContainer: {
    gap: 8,
  },
  emptyImgContainer: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border_gray,
    backgroundColor: Colors.light_gray,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIconWrapper: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border_gray,
    fontWeight: "400",
    fontSize: 16,
    marginTop: 32,
    color: Colors.black_primary,
    paddingVertical: 0,
  },
  inputText: {
    fontWeight: "500",
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border_gray,
  },
  locationInput: {
    flex: 1,
    marginTop: 0,
    borderBottomWidth: 0,
  },
  locationIcon: {
    marginRight: 4,
  },
  buttonsContainer: {
    flex: 1,
    marginTop: 32,
    gap: 120,
  },
  trashIconWrapper: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light_gray,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePostsScreen;
