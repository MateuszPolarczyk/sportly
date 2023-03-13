import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import { theme } from "../../../config/theme";

const { dark } = theme.colors;

const DividerContainer = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${dark};
  margin: 2px;
`;

interface DividerProps {
  style?: ViewStyle;
}

const Divider = ({ style }: DividerProps) => {
  return <DividerContainer style={style} />;
};

export { Divider };
