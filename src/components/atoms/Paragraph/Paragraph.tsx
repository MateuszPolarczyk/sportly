import { ReactNode } from "react";

import styled from "styled-components/native";
import { theme } from "../../../config/theme";
import { TextStyle } from "react-native";

const { paragraph } = theme.typography;
const { light, dark } = theme.colors;

const ParagraphText = styled.Text<{ color?: string }>`
  font-size: ${paragraph}px;
  color: ${({ color }) => (color ? color : dark)};
`;

interface ParagraphProps {
  children: ReactNode;
  color?: string;
  style?: TextStyle;
}

const Paragraph = ({ children, style, color = light }: ParagraphProps) => {
  return (
    <ParagraphText style={style} color={color}>
      {children}
    </ParagraphText>
  );
};

export { Paragraph };
