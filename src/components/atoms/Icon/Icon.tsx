import Ionicons from "@expo/vector-icons/Ionicons";
import { ViewStyle } from "react-native";

interface IconProps {
  size: number;
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  style?: ViewStyle;
}

const Icon = ({ size, name, color, style }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};

export { Icon };
