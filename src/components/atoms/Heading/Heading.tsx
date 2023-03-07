import { ReactNode } from "react";

import styled from "styled-components/native";
import { theme } from "../../../config/theme";
import { TextStyle } from "react-native";

interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
  color?: string;
  style?: TextStyle;
}

const { heading1, heading2, heading3 } = theme.typography;
const { light, dark } = theme.colors;

const HeadingText = styled.Text<{ level: number; color?: string }>`
  font-size: ${({ level }) => [heading1, heading2, heading3][level - 1]}px;
  font-weight: bold;
  color: ${({ color }) => (color ? color : dark)};
`;

const Heading = ({ level, children, style, color = light }: HeadingProps) => {
  return (
    <HeadingText level={level} color={color} style={style}>
      {children}
    </HeadingText>
  );
};

export { Heading };
