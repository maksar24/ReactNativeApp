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
import Icon from "react-native-vector-icons/Feather";

import { Colors } from "../../constants/Colors";

import Input from "../../components/ui/CustomInput";
import Button from "../../components/ui/CustomButton";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    login: "",
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

  const onAddAvatar = async () => {
    console.log("Add avatar");
  };

  const onSignUp = () => {
    console.log("Sign up!", formData);
    navigation.replace("Home");
  };

  const onSignIn = () => {
    navigation.navigate("Login");
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
          <View style={styles.avatarContainer}>
            <TouchableOpacity style={styles.addButton} onPress={onAddAvatar}>
              <Icon name="plus" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>

          <View style={[styles.innerContainer, styles.inputContainer]}>
            <Input
              value={formData.login}
              autofocus={true}
              placeholder="Логін"
              onTextChange={(value) => handleInputChange("login", value)}
            />

            <Input
              value={formData.email}
              placeholder="Адреса електронної пошти"
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
        <Button onPress={onSignUp}>
          <Text style={[styles.baseText, styles.loginButtonText]}>
            Зареєстуватися
          </Text>
        </Button>

        <View style={styles.signUpContainer}>
          <Text style={[styles.baseText, styles.secondaryTextColor]}>
            Вже є акаунт?
          </Text>
          <TouchableWithoutFeedback onPress={onSignIn}>
            <Text style={[styles.baseText, styles.signUpText]}> Увійти</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: -60,
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
    paddingBottom: 45,
    paddingHorizontal: 16,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: Colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
    position: "relative",
  },
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: Colors.light_gray,
    borderRadius: 16,
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  addButton: {
    width: 25,
    height: 25,
    backgroundColor: Colors.white,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: Colors.orange,
    position: "absolute",
    right: -12.5,
    bottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: Colors.orange,
  },
  title: {
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
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
    color: Colors.blue,
  },
});

export default RegistrationScreen;
