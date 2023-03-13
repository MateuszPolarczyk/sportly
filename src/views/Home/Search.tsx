import styled from "styled-components/native";

import { FacilityCard } from "../../components/molecules/FacilityCard/FacilityCard";
import { Facilities } from "../../data/mock";
import { Banner } from "../../components/molecules/Banner/Banner";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";

const SearchScreenContainer = styled.View`
  flex: 1;
`;

const SearchListContainer = styled.View`
  flex: 0.7;
  padding-bottom: 10px;
`;

const SearchList = styled.FlatList`
  flex: 1;
  padding: 10px;
`;

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface SearchScreenProps {
  navigation: SearchScreenNavigationProp;
}

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  return (
    <SearchScreenContainer>
      <Banner content="Wyszukiwarka" />
      <SearchListContainer>
        <SearchList
          showsVerticalScrollIndicator={false}
          data={Facilities}
          renderItem={({ item, index }: any) => {
            return (
              <FacilityCard
                key={index}
                thumbnailSource={{ uri: item.photos[0] }}
                title={item.title}
                address={item.location.address}
                containerStyle={{ marginTop: 20, marginBottom: 10 }}
                thumbnailStyle={{ height: 200, width: "100%" }}
                onClick={() => {
                  navigation.navigate("FacilityDetail", { id: item.id });
                }}
              />
            );
          }}
        />
      </SearchListContainer>
    </SearchScreenContainer>
  );
};

export { SearchScreen };
