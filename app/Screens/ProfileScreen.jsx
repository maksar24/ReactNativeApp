import {
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  FlatList,
  Text,
  Image,
} from "react-native";

import { Colors } from "../../constants/Colors";
import data from "../data/posts.json";

import IconButton from "@/components/ui/IconButton";
import PostCard from "@/components/PostCard";
import { useDispatch, useSelector } from "react-redux";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const images = {
  "forest.jpeg": require("@/assets/images/forest.jpeg"),
  "sunset.jpeg": require("@/assets/images/sunset.jpeg"),
  "home.jpeg": require("@/assets/images/home.jpeg"),
};

const RegistrationScreen = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Помилка", "Не вдалося вийти. Спробуйте ще раз.");
      console.error("Logout Error:", error);
    }
  };

  const handleChangeAvatar = async () => {
    console.log("Change avatar");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg-image.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <IconButton
          onPress={handleLogout}
          name="logout"
          size="24"
          style={styles.logoutButton}
        />
        <View style={styles.avatarContainer}>
          <Image
            source={require("@/assets/images/avatar.png")}
            style={styles.avatar}
          />
          <IconButton
            onPress={handleChangeAvatar}
            name="plus"
            size="20"
            style={styles.addButton}
          />
        </View>

        <Text style={styles.userName}>{user?.displayName || "Unknown"}</Text>

        <FlatList
          style={styles.postsContainer}
          contentContainerStyle={{ flexGrow: 1 }}
          data={data.posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard {...item} image={images[item.image]} />
          )}
        />
      </View>
    </View>
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
    paddingTop: 103,
  },
  formContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: Colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
    marginTop: 103,
  },
  logoutButton: {
    position: "absolute",
    top: 22,
    right: 16,
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addButton: {
    width: 25,
    height: 25,
    backgroundColor: Colors.white,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: Colors.border_gray,
    position: "absolute",
    right: -12.5,
    bottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontWeight: "500",
    fontSize: 30,
    color: Colors.black_primary,
    marginBottom: 32,
    textAlign: "center",
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default RegistrationScreen;
