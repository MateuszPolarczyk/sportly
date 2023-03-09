import styled from "styled-components/native";

import { Heading } from "../../components/atoms/Heading/Heading";
import { FacilityCard } from "../../components/molecules/FacilityCard/FacilityCard";
import { Facilities } from "../../data/mock";
import { theme } from "../../config/theme";

const { primary } = theme.colors;

const SearchScreenContainer = styled.View`
  flex: 1;
`;

const SearchBanner = styled.View`
  flex: 0.3;
  background-color: ${primary};
  align-items: center;
  justify-content: center;
`;

const SearchListContainer = styled.View`
  flex: 0.7;
  padding-bottom: 10px;
`;

const SearchList = styled.FlatList`
  flex: 1;
  padding: 10px;
`;

interface SearchScreenProps {}

const SearchScreen = ({}: SearchScreenProps) => {
  return (
    <SearchScreenContainer>
      <SearchBanner>
        <Heading level={1}>Wyszukiwarka</Heading>
      </SearchBanner>
      <SearchListContainer>
        <SearchList
          showsVerticalScrollIndicator={false}
          data={Facilities}
          renderItem={({ item }: any) => {
            return (
              <FacilityCard
                thumbnailSource={{ uri: item.photos[0] }}
                title={item.title}
                address={item.location.address}
                containerStyle={{ marginTop: 20, marginBottom: 10 }}
                thumbnailStyle={{ height: 200, width: "100%" }}
              />
            );
          }}
        />
      </SearchListContainer>
    </SearchScreenContainer>
  );
};

export { SearchScreen };
