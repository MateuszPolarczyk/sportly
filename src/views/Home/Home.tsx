import { StatusBar } from "react-native";

import styled from "styled-components/native";
import { theme } from "../../config/theme";

import { Heading } from "../../components/atoms/Heading/Heading";
import { Paragraph } from "../../components/atoms/Paragraph/Paragraph";
import { Icon } from "../../components/atoms/Icon/Icon";

import { CategoryCard } from "../../components/molecules/CategoryCard/CategoryCard";
import { FacilityCard } from "../../components/molecules/FacilityCard/FacilityCard";
import { TopAppBar } from "../../components/molecules/TopAppBar/TopAppBar";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";
import { Categories, Facilities } from "../../data/mock";

const { primary, dark, accent } = theme.colors;

////////////////////////////////////////////////////
// VIEW CONTAINERS
const HomeContainer = styled.View`
  flex: 1;
`;

const HomeBanner = styled.View`
  flex: 0.3;
  background-color: ${primary};
  align-items: center;
  justify-content: center;
`;

const CategoriesContainer = styled.View`
  flex: 0.2;
`;

const CategoriesList = styled.FlatList`
  padding: 10px;
  margin: 5px;
`;

const FacilitiesContainer = styled.View`
  flex: 0.5;
`;

const FacilitiesList = styled.FlatList`
  padding: 10px;
  margin: 5px;
`;
////////////////////////////////////////////////////

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <HomeContainer>
      <HomeBanner>
        <TopAppBar
          containerStyle={{
            position: "absolute",
            top: StatusBar.currentHeight,
          }}
          rightItem={<Icon name="notifications" size={35} color={accent} />}
          onRightClick={() => {
            console.log("notifications clicked");
          }}
        />
        <Heading level={1} style={{ marginTop: StatusBar.currentHeight }}>
          Cześć Mateusz 👋
        </Heading>
        <Paragraph>Jaki plan na dziś?</Paragraph>
      </HomeBanner>
      <CategoriesContainer>
        <CategoriesList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Categories}
          renderItem={({ item, index }: any) => {
            return (
              <CategoryCard
                key={index}
                iconSource={item.icon}
                title={item.title}
                containerStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 30,
                }}
                imageStyle={{ width: 80, height: 80 }}
                titleStyle={{
                  fontWeight: "700",
                  color: primary,
                  marginTop: 10,
                }}
                onClick={() => {
                  navigation.navigate("Search");
                }}
              />
            );
          }}
        />
      </CategoriesContainer>
      <FacilitiesContainer>
        <Heading level={3} style={{ color: dark, padding: 10 }}>
          Polecane obiekty
        </Heading>
        <FacilitiesList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Facilities.filter((item) => item.featured == true)}
          renderItem={({ item, index }: any) => {
            return (
              <FacilityCard
                key={index}
                thumbnailSource={{ uri: item.photos[0] }}
                title={item.title}
                address={item.location.address}
                containerStyle={{ marginRight: 20 }}
                onClick={() => {
                  navigation.navigate("FacilityDetail", { id: item.id });
                }}
              />
            );
          }}
        />
      </FacilitiesContainer>
    </HomeContainer>
  );
};

export { HomeScreen };
