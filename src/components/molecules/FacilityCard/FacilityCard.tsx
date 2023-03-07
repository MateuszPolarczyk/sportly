import styled from "styled-components/native";
import {
  Image,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { theme } from "../../../config/theme";

import { Badge } from "../../atoms/Badge/Badge";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Icon } from "../../atoms/Icon/Icon";

const { primary, light } = theme.colors;

const FacilityCardContainer = styled.TouchableOpacity`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  justify-content: space-between;
  background-color: ${primary};
`;

const FailityCardImageContainer = styled.View`
  flex: 2;
`;

const FacilityCardContentContainer = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: space-between;
`;

interface FacilityCardProps {
  thumbnailSource: ImageSourcePropType;
  title: string;
  address: string;
  thumbnailStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  onClick?: () => void;
}

const FacilityCard = ({
  thumbnailSource,
  title,
  address,
  thumbnailStyle,
  contentStyle,
  containerStyle,
  onClick,
}: FacilityCardProps) => {
  return (
    <FacilityCardContainer onPress={onClick} style={containerStyle}>
      <FailityCardImageContainer>
        <Image
          source={thumbnailSource}
          style={[{ width: "100%", height: "100%" }, thumbnailStyle]}
        />
      </FailityCardImageContainer>
      <FacilityCardContentContainer style={contentStyle}>
        <Heading level={2}>{title}</Heading>
        <Paragraph>
          <Icon name="location" size={18} color={light} />
          {address}
        </Paragraph>
      </FacilityCardContentContainer>
    </FacilityCardContainer>
  );
};

export { FacilityCard };
