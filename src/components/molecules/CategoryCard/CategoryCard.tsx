import styled from "styled-components/native";
import {
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { ImageIcon } from "../../atoms/Icon/ImageIcon";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { theme } from "../../../config/theme";

const { dark } = theme.colors;

const CategoryCardWrapper = styled.TouchableOpacity`
  flex: 1;
`;

interface CategoryCardProps {
  iconSource: ImageSourcePropType;
  title: string;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  titleStyle?: TextStyle;
  onClick?: () => void;
}

const CategoryCard = ({
  iconSource,
  title,
  containerStyle,
  imageStyle,
  titleStyle,
  onClick,
}: CategoryCardProps) => {
  return (
    <CategoryCardWrapper style={containerStyle} onPress={onClick}>
      <ImageIcon source={iconSource} imageStyle={imageStyle} />
      <Paragraph style={titleStyle} color={dark}>
        {title}
      </Paragraph>
    </CategoryCardWrapper>
  );
};

export { CategoryCard };
