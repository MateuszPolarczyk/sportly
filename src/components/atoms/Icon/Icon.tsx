import { ViewStyle } from "react-native";
import { IconComponentProp } from "../../../types";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IconProps {
  size: number;
  name: IconComponentProp;
  color: string;
  style?: ViewStyle;
}

const Icon = ({ size, name, color, style }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};

export { Icon };
