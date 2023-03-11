import styled from "styled-components/native";
import { Image } from "react-native";

import { theme } from "../../../config/theme";
import { Icon } from "../../atoms/Icon/Icon";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";

const { primary, light } = theme.colors;

const BookingCardContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 400px;
  height: 200px;
  margin-top: 20px;
`;

const LeftBookingCard = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

const InnerLeftBookingCard = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 130px;
  width: 100px;
  background-color: ${primary}
  border-radius: 10px;
`;

const RightBookingCard = styled.View`
  flex: 0.7;
  background-color: ${primary};
  border-radius: 10px;
  overflow: hidden;
`;

const RightBookingCardThumbnail = styled.View`
  flex: 0.6;
`;

const RightBookingCardContent = styled.View`
  flex: 0.4;
  padding: 5px;
`;

interface BookingCardProps {
  title?: string;
  playing_hours: string;
  cost: number;
  thumbnail?: string;
  onClick: () => void;
  booking_date: string;
}

const BookingCard = ({
  title,
  playing_hours,
  cost,
  thumbnail,
  onClick,
  booking_date,
}: BookingCardProps) => {
  const [bookingDay, bookingMonth] = booking_date.split(" ");
  return (
    <BookingCardContainer onPress={onClick}>
      <LeftBookingCard>
        <InnerLeftBookingCard>
          <Paragraph style={{ fontWeight: "900", fontSize: 40 }}>
            {bookingDay}
          </Paragraph>
          <Paragraph style={{ fontWeight: "600" }}>{bookingMonth}</Paragraph>
        </InnerLeftBookingCard>
      </LeftBookingCard>
      <RightBookingCard>
        <RightBookingCardThumbnail>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: thumbnail }}
          />
        </RightBookingCardThumbnail>
        <RightBookingCardContent>
          <Paragraph style={{ fontWeight: "800" }}>{title}</Paragraph>
          <Paragraph>
            <Icon name="time-outline" size={19} color={light} /> {playing_hours}
          </Paragraph>
          <Paragraph>
            <Icon name="wallet-outline" size={19} color={light} /> {cost}zł
          </Paragraph>
        </RightBookingCardContent>
      </RightBookingCard>
    </BookingCardContainer>
  );
};

export { BookingCard };
