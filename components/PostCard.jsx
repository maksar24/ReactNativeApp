import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../constants/Colors";

const PostCard = ({ image, title, comments, likes, location }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Icon name="comment-text-outline" size={24} color={Colors.orange} />
            <Text style={styles.statsText}>{comments}</Text>
          </View>
          <View style={styles.statsItem}>
            <Icon name="thumb-up-outline" size={24} color={Colors.orange} />
            <Text style={styles.statsText}>{likes}</Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Icon name="map-marker-outline" size={24} color={Colors.text_gray} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.black_primary,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 24,
  },
  statsItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statsText: {
    fontWeight: "400",
    fontSize: 16,
    color: Colors.black_primary,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: Colors.black_primary,
    textDecorationLine: "underline",
  },
});

export default PostCard;
