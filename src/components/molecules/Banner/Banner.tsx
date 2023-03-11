import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import { theme } from "../../../config/theme";
import { Heading } from "../../atoms/Heading/Heading";

const { primary } = theme.colors;

const BannerContainer = styled.View`
  flex: 0.3;
  background-color: ${primary};
  align-items: center;
  justify-content: center;
`;

interface BannerProps {
  content: string;
  style?: ViewStyle;
}

const Banner = ({ content, style }: BannerProps) => {
  return (
    <BannerContainer style={style}>
      <Heading level={1}>{content}</Heading>
    </BannerContainer>
  );
};

export { Banner };
