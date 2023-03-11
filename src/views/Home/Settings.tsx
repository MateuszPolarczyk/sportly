import styled from "styled-components/native";
import { Banner } from "../../components/molecules/Banner/Banner";

const SettingsScreenContainer = styled.View`
  flex: 1;
`;

const SettingsScreen = () => {
  return (
    <SettingsScreenContainer>
      <Banner content="Ustawienia" />
    </SettingsScreenContainer>
  );
};

export { SettingsScreen };
