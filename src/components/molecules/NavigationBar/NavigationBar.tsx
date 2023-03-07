import styled from "styled-components/native";

import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../atoms/Button/Button";

import { theme } from "../../../config/theme";
const { dark } = theme.colors;

interface NavigationBarProps {
  onClick: () => void;
}

const NavigationBarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const NavigationBar = ({ onClick }: NavigationBarProps) => {
  return (
    <NavigationBarContainer>
      <Button onPress={onClick}>
        <Icon name="chevron-back-circle-outline" color={dark} size={30} />
      </Button>
    </NavigationBarContainer>
  );
};

export { NavigationBar };
