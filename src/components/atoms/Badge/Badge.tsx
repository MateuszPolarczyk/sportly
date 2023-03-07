import { ReactNode } from "react";

import styled, { css } from "styled-components/native";
import { ViewStyle, TextStyle } from "react-native";
import { theme } from "../../../config/theme";

const { primary, secondary, accent, light } = theme.colors;
const { paragraph } = theme.typography;

interface BadgeContainerProps {
  variant: "primary" | "secondary" | "accent";
}

const BadgeContainer = styled.View<BadgeContainerProps>`
  padding: 4px 8px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;

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

interface BadgeLabelProps {
  variant: "primary" | "secondary" | "accent";
}

const BadgeLabel = styled.Text<BadgeLabelProps>`
  font-size: ${paragraph}px;
  font-weight: bold;
  color: ${light};
`;

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

const Badge = ({
  children,
  variant = "primary",
  style,
  labelStyle,
}: BadgeProps) => {
  return (
    <BadgeContainer variant={variant} style={style}>
      <BadgeLabel variant={variant} style={labelStyle}>
        {children}
      </BadgeLabel>
    </BadgeContainer>
  );
};

export { Badge };
