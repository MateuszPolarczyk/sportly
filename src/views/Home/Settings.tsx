import styled from "styled-components/native";
import { Icon } from "../../components/atoms/Icon/Icon";
import { Paragraph } from "../../components/atoms/Paragraph/Paragraph";
import { Banner } from "../../components/molecules/Banner/Banner";
import { IconComponentProp } from "../../types";
import { theme } from "../../config/theme";

const { dark, gray } = theme.colors;

const SettingsScreenContainer = styled.View`
  flex: 1;
`;

const SettingsListContainer = styled.View`
  flex: 0.7;
  padding: 5px;
`;

const SettingItemContainer = styled.TouchableOpacity`
  flex: 0.1;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  justify-content: space-between;
  background-color: ${gray};
`;

type SettingItemProps = {
  icon: IconComponentProp;
  title: string;
  onClick: () => void;
};

const SettingItem = ({ icon, title, onClick }: SettingItemProps) => {
  return (
    <SettingItemContainer onPress={onClick}>
      <Icon name={icon} size={25} color={dark} />
      <Paragraph color={dark} style={{ fontSize: 20, fontWeight: "500" }}>
        {title}
      </Paragraph>
      <Icon name="chevron-forward" size={20} color={dark} />
    </SettingItemContainer>
  );
};

const SettingsScreen = () => {
  return (
    <SettingsScreenContainer>
      <Banner content="Ustawienia" />
      <SettingsListContainer>
        <SettingItem
          icon="notifications-outline"
          title="Powiadomienia"
          onClick={() => {
            console.log("otwierania modala powiadomienia");
          }}
        />
        <SettingItem
          icon="information-circle-outline"
          title="O aplikacji"
          onClick={() => {
            console.log("nawigacja do onboardingu");
          }}
        />
        <SettingItem
          icon="log-out-outline"
          title="Wyloguj się"
          onClick={() => {
            console.log("funkcja wylogowania");
          }}
        />
      </SettingsListContainer>
    </SettingsScreenContainer>
  );
};

export { SettingsScreen };
