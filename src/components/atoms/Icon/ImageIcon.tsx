import { ImageSourcePropType, ImageStyle } from "react-native";
import styled from "styled-components/native";

interface ImageIconProps {
  source: ImageSourcePropType;
  imageStyle?: ImageStyle;
}

const ImageIconStyled = styled.Image`
  width: 100%;
  height: 100%;
`;

const ImageIcon = ({ source, imageStyle }: ImageIconProps) => {
  return <ImageIconStyled source={source} style={imageStyle} />;
};

export { ImageIcon };
