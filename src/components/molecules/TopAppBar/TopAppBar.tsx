import { ReactNode } from "react";

import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";

const TopAppBarContainer = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const LeftItemContainer = styled.TouchableOpacity`
  flex: 0.2;
  alignitems: flex-start;
  margin-left: 10px;
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
  leftItem?: ReactNode;
  containerStyle?: ViewStyle;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const TopAppBar = ({
  title,
  rightItem,
  leftItem,
  containerStyle,
  onLeftClick,
  onRightClick,
}: TopAppBarProps) => {
  return (
    <TopAppBarContainer style={containerStyle}>
      <LeftItemContainer onPress={onLeftClick}>{leftItem}</LeftItemContainer>
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
