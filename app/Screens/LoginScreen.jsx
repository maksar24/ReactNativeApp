import { useState } from "react";
import {
  View,
  Text,
  Platform,
  Keyboard,
  Pressable,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

import { Colors } from "../../constants/Colors";

import Input from "../../components/ui/CustomInput";
import Button from "../../components/ui/CustomButton";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onSignIn = () => {
    console.log("Sign in!", formData);
    navigation.replace("Home");
  };

  const onSignUp = () => {
    navigation.navigate("Registration");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text
        style={[
          styles.baseText,
          styles.secondaryTextColor,
          styles.visibilityButton,
          !isPasswordVisible ? styles.hidePasswordText : {},
        ]}
      >
        {isPasswordVisible ? "Показати" : "Приховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Pressable
      style={{ flex: 1, backgroundColor: Colors.white }}
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 80}
      >
        <ImageBackground
          source={require("../../assets/images/bg-image.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>

          <View style={[styles.innerContainer, styles.inputContainer]}>
            <Input
              value={formData.email}
              placeholder="Адреса електронної пошти"
              autofocus={true}
              inputType="email-address"
              onTextChange={(value) => handleInputChange("email", value)}
            />

            <Input
              value={formData.password}
              placeholder="Пароль"
              rightButton={showButton}
              outerStyles={styles.passwordButton}
              onTextChange={(value) => handleInputChange("password", value)}
              secureTextEntry={isPasswordVisible}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      <View style={[styles.innerContainer, styles.buttonContainer]}>
        <Button onPress={onSignIn}>
          <Text style={[styles.baseText, styles.loginButtonText]}>Увійти</Text>
        </Button>

        <View style={styles.signInContainer}>
          <Text style={[styles.baseText, styles.secondaryTextColor]}>
            Немає акаунту?
          </Text>

          <TouchableWithoutFeedback onPress={onSignUp}>
            <Text style={[styles.baseText, styles.signInText]}>
              {" "}
              Зареєструватися
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    paddingTop: 43,
    paddingBottom: 111,
    paddingHorizontal: 16,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: Colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    position: "relative",
  },
  title: {
    paddingTop: 32,
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: Colors.white,
    textAlign: "center",
  },
  secondaryTextColor: {
    color: Colors.blue,
  },
  passwordButton: {
    width: "100%",
    paddingRight: 80,
  },
  visibilityButton: {
    position: "absolute",
    right: -74,
    top: -16,
    transform: [{ translateY: -16 }],
    zIndex: 1,
    minWidth: 80,
  },
  hidePasswordText: {
    right: -64,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    textDecorationLine: "underline",
    color: Colors.blue,
  },
});

export default LoginScreen;
