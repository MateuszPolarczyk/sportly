import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Icon } from "../../atoms/Icon/Icon";

const TopAppBarContainer = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const LeftItemContainer = styled.View`
  flex: 0.2;
  alignitems: flex-start;
  margin-left: 5px;
`;

const BackButtonContainer = styled.TouchableOpacity`
  width: 50px;
  heigth: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: rgba(211, 211, 211, 0.7);
`;

const TitleContainer = styled.View`
  flex: 0.6;
  align-items: center;
`;

const RightItemContainer = styled.TouchableOpacity`
  flex: 0.2;
  align-items: flex-end;
`;

interface TopAppBarProps {
  title?: string;
  rightItem?: ReactNode;
  backButton?: boolean;
  containerStyle?: ViewStyle;
  onRightClick?: () => void;
}

const TopAppBar = ({
  title,
  rightItem,
  containerStyle,
  onRightClick,
  backButton,
}: TopAppBarProps) => {
  const navigation = useNavigation();

  return (
    <TopAppBarContainer style={containerStyle}>
      <LeftItemContainer>
        {backButton && (
          <BackButtonContainer
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-back" size={40} color="#232829" />
          </BackButtonContainer>
        )}
      </LeftItemContainer>
      <TitleContainer>
        <Paragraph>{title}</Paragraph>
      </TitleContainer>
      <RightItemContainer onPress={onRightClick}>
        {rightItem}
      </RightItemContainer>
    </TopAppBarContainer>
  );
};

export { TopAppBar };
