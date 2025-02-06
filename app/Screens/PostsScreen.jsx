import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";
import data from "../data/posts.json";

import IconButton from "@/components/ui/IconButton";
import PostCard from "@/components/PostCard";
import { SafeAreaView } from "react-native-safe-area-context";

const images = {
  "forest.jpeg": require("@/assets/images/forest.jpeg"),
  "sunset.jpeg": require("@/assets/images/sunset.jpeg"),
  "home.jpeg": require("@/assets/images/home.jpeg"),
};

const PostsScreen = () => {
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <IconButton
          onPress={handleLogout}
          name="logout"
          size="24"
          style={styles.logoutButton}
        />
      </View>

      <View style={styles.userContainer}>
        <Image
          source={require("@/assets/images/avatar.png")}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <FlatList
        style={styles.postsContainer}
        data={data.posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard {...item} image={images[item.image]} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
    right: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: Colors.black_primary,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: Colors.text_gray,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
});

export default PostsScreen;
