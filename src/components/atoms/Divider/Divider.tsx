import styled from "styled-components/native";
import { ViewStyle } from "react-native";

const DividerContainer = styled.View`
  width: auto;
  height: 2px;
  background-color: #808080;
  margin: 2px;
`;

interface DividerProps {
  style?: ViewStyle;
}

const Divider = ({ style }: DividerProps) => {
  return <DividerContainer style={style} />;
};

export { Divider };
