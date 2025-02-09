import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  TextInput,
  Text,
} from "react-native";
import { useState } from "react";

import { Colors } from "../../constants/Colors";

import IconButton from "@/components/ui/IconButton";

const CommentsScreen = ({ navigation }) => {
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (value) => {
    setComment((prevState) => ({
      ...prevState,
      value,
    }));
  };

  const handleAddComment = () => {
    setComment("");
    console.log("Add comment");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="auto" />
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.header}>
          <Text style={styles.title}>Коментарі</Text>
          <IconButton
            onPress={handleBack}
            name="arrow-left"
            size="24"
            style={styles.logoutButton}
            color="black"
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/images/sunset.jpeg")}
          />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.containerMessages}>
              <Image
                style={styles.imageAvatar}
                source={require("../../assets/images/avatar2.jpeg")}
              />
              <View style={styles.containerMessagesInfo}>
                <Text style={styles.baseText}>
                  Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text
                  style={[
                    styles.baseText,
                    styles.dataText,
                    styles.dataTextRight,
                  ]}
                >
                  09 червня, 2020 | 08:40
                </Text>
              </View>
            </View>
            <View style={styles.containerMessages}>
              <View style={styles.containerMessagesInfo}>
                <Text style={styles.baseText}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={[styles.baseText, styles.dataText]}>
                  09 червня, 2020 | 09:14
                </Text>
              </View>
              <Image
                style={styles.imageAvatar}
                source={require("../../assets/images/avatar.png")}
              />
            </View>
            <View style={styles.containerMessages}>
              <Image
                style={styles.imageAvatar}
                source={require("../../assets/images/avatar2.jpeg")}
              />
              <View style={styles.containerMessagesInfo}>
                <Text style={styles.baseText}>
                  Thank you! That was very helpful!
                </Text>
                <Text
                  style={[
                    styles.baseText,
                    styles.dataText,
                    styles.dataTextRight,
                  ]}
                >
                  09 червня, 2020 | 09:20
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 80}
        >
          <View style={styles.inputContainer}>
            <View style={[styles.input, isFocused && styles.focused]}>
              <TextInput
                value={comment}
                autoFocus={true}
                onChangeText={handleInputChange}
                placeholder="Коментувати..."
                placeholderTextColor={[Colors.text_gray, styles.InputText]}
                style={styles.baseText}
                autoCapitalize="none"
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <Pressable
                accessible={true}
                accessibilityLabel="Send"
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.pressed,
                ]}
              >
                <View>
                  <IconButton
                    onPress={handleAddComment}
                    name="arrow-up"
                    size="14"
                    color="white"
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.black_primary,
  },
  InputText: { fontSize: 16, lineHeight: 19 },
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: "space-between",
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
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  inputContainer: {
    margin: 16,
  },
  containerMessages: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  containerMessagesInfo: {
    flexShrink: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: Colors.light_gray,
    gap: 8,
  },
  dataText: {
    fontSize: 10,
    lineHeight: 12,
    color: Colors.text_gray,
  },
  imageAvatar: {
    borderRadius: 50,
    width: 28,
    height: 28,
    backgroundColor: Colors.light_gray,
  },
  input: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: Colors.border_gray,
    backgroundColor: Colors.light_gray,
    justifyContent: "center",
  },
  focused: {
    backgroundColor: Colors.white,
    borderColor: Colors.orange,
  },
  button: {
    position: "absolute",
    width: 34,
    height: 34,
    right: 8,
    borderRadius: 50,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  pressed: {
    opacity: 0.6,
  },
  dataTextRight: { alignSelf: "flex-end" },
});
