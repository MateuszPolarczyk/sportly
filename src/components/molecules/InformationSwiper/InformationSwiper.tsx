import styled from "styled-components/native";
import { theme } from "../../../config/theme";

import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Divider } from "../../atoms/Divider/Divider";
import { CategoryCard } from "../CategoryCard/CategoryCard";

import { Category, Feature } from "../../../types";

const InformationItemsContainer = styled.View`
  flex: 0.25;
  padding: 5px;
`;

const InformationList = styled.FlatList`
  padding: 2px;
`;

const { dark, primary } = theme.colors;

interface InformationSwiperProps {
  title: string;
  data: Category[] | Feature[];
}

const InformationSwiper = ({ title, data }: InformationSwiperProps) => {
  return (
    <InformationItemsContainer>
      <Paragraph color={dark} style={{ fontWeight: "600" }}>
        {title}
      </Paragraph>
      <InformationList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
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
              imageStyle={{ width: 50, height: 50 }}
              titleStyle={{
                fontWeight: "700",
                color: primary,
                marginTop: 10,
              }}
            />
          );
        }}
      />
      <Divider />
    </InformationItemsContainer>
  );
};

export { InformationSwiper };
