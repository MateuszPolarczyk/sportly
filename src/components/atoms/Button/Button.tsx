import { ReactNode } from "react";
import styled, { css } from "styled-components/native";
import { theme } from "../../../config/theme";
import { TextStyle, ViewStyle } from "react-native";

const { primary, secondary, accent, light } = theme.colors;
const { button } = theme.typography;

interface ButtonContainerProps {
  variant?: "primary" | "secondary" | "accent";
  disabled?: boolean;
}

const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: 12px 16px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border-radius: 5px;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${primary};
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${secondary};
    `}

  ${({ variant }) =>
    variant === "accent" &&
    css`
      background-color: ${accent};
    `}
`;

const ButtonText = styled.Text`
  color: ${light};
  font-size: ${button}px;
  text-align: center;
`;

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onPress,
  containerStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <ButtonContainer
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}
      variant={variant}
    >
      <ButtonText style={textStyle}>{children}</ButtonText>
    </ButtonContainer>
  );
};

export { Button };
