import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";

export default IconButton = ({ onPress, name, size = 24, color, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, { opacity: pressed ? 0.6 : 1 }]}
      hitSlop={10}
    >
      {({ pressed }) => (
        <Icon
          name={name}
          size={size}
          color={pressed ? Colors.orange : color || Colors.border_gray}
        />
      )}
    </Pressable>
  );
};
