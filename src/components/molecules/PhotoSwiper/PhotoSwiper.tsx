import { Image } from "react-native";

import styled from "styled-components/native";
import { theme } from "../../../config/theme";

import Swiper from "react-native-swiper";

const { primary, light } = theme.colors;

const SlideContainer = styled.View`
  flex: 1;
`;

interface PhotoSwiperProps {
  photos: string[];
}

const PhotoSwiper = ({ photos }: PhotoSwiperProps) => {
  return (
    <Swiper loop={false} dotColor={light} activeDotColor={primary}>
      {photos?.map((photo, index) => {
        return (
          <SlideContainer key={index}>
            <Image
              style={{ flex: 1, width: "100%", height: "100%" }}
              source={{ uri: photo }}
            />
          </SlideContainer>
        );
      })}
    </Swiper>
  );
};

export { PhotoSwiper };
