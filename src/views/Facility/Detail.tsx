import { StatusBar } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import styled from "styled-components/native";
import { theme } from "../../config/theme";

import { Button } from "../../components/atoms/Button/Button";
import { Paragraph } from "../../components/atoms/Paragraph/Paragraph";
import { Divider } from "../../components/atoms/Divider/Divider";
import { Icon } from "../../components/atoms/Icon/Icon";
import { Heading } from "../../components/atoms/Heading/Heading";

import { TopAppBar } from "../../components/molecules/TopAppBar/TopAppBar";
import { InformationSwiper } from "../../components/molecules/InformationSwiper/InformationSwiper";
import { PhotoSwiper } from "../../components/molecules/PhotoSwiper/PhotoSwiper";

import { RootStackParamList } from "../../navigation";
import { Facilities, Categories, Features } from "../../data/mock";

const { primary, dark } = theme.colors;

const DetailScreenContainer = styled.View`
  flex: 1;
`;

const SwiperContainer = styled.View`
  flex: 0.3;
`;

const ContentContainer = styled.View`
  flex: 0.7;
  padding: 10px;
`;

const InformationContainer = styled.View`
  flex: 0.4;
  justify-content: space-around;
`;

const FooterContainer = styled.View`
  flex: 0.1;
  justify-content: center;
`;

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<{ params: { id: string } }, "params">;

interface DetailScreenProps {
  navigation: DetailScreenNavigationProp;
  route: RouteProps;
}

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
  const { id } = route.params;

  const currentFacility = Facilities.filter((facility) => facility.id == id)[0];
  const {
    photos,
    title,
    description,
    location,
    contact,
    features,
    categories,
    price_per_hour,
    open_hours,
  } = currentFacility;

  const selectedFeatures = Features.filter((item) =>
    features.includes(item.id)
  );

  const selectedCategories = Categories.filter((item) =>
    categories.includes(item.id)
  );

  return (
    <DetailScreenContainer>
      <SwiperContainer>
        <PhotoSwiper photos={photos} />
      </SwiperContainer>

      <TopAppBar
        containerStyle={{
          position: "absolute",
          marginTop: StatusBar.currentHeight,
        }}
        backButton
      />

      <ContentContainer>
        <InformationContainer>
          <Heading level={2} color={primary}>
            {title}
          </Heading>
          <Paragraph color={dark}>
            <Icon name="location-outline" size={20} color={dark} />{" "}
            {location.address}
          </Paragraph>
          <Paragraph color={dark}>
            <Icon name="time-outline" size={20} color={dark} />{" "}
            {open_hours.open_hour} - {open_hours.close_hour}
          </Paragraph>
          <Paragraph color={dark}>
            <Icon name="at-outline" size={20} color={dark} /> {contact.email},
            <Icon name="call-outline" size={20} color={dark} />
            {contact.telephone}
          </Paragraph>
          <Paragraph color={dark}>
            <Icon name="wallet-outline" size={20} color={dark} /> od{" "}
            {price_per_hour} zł/h
          </Paragraph>
          <Paragraph color={dark} style={{ fontSize: 15 }}>
            {description}
          </Paragraph>
          <Divider />
        </InformationContainer>

        <InformationSwiper
          title="Dostępne aktywności:"
          data={selectedCategories}
        />

        <InformationSwiper title="Udogodnienia:" data={selectedFeatures} />

        <FooterContainer>
          <Button
            variant="primary"
            onPress={() => {
              navigation.navigate("BookingForm");
            }}
            textStyle={{ fontSize: 25, fontWeight: "600" }}
          >
            Rezerwuje
          </Button>
        </FooterContainer>
      </ContentContainer>
    </DetailScreenContainer>
  );
};

export { DetailScreen };
