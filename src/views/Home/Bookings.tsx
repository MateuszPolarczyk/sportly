import styled from "styled-components/native";

import { BookingCard } from "../../components/molecules/BookingCard/BookingCard";
import { Bookings } from "../../data/mock";
import { Facilities } from "../../data/mock";
import { ListRenderItem } from "react-native";
import { Banner } from "../../components/molecules/Banner/Banner";

const BookingsScreenContainer = styled.View`
  flex: 1;
`;

const BookingsListContainer = styled.View`
  flex: 0.7;
  align-items: center;
  padding: 10px;
`;

const BookingsList = styled.FlatList``;

interface BookingsScreenProps {}

const formatBookingDate = (dateString: string) => {
  const [day, month, year] = dateString.split(".");
  const BookingDate = new Date(`${year}-${month}-${day}`);
  const formatted = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
  });

  return formatted.format(BookingDate);
};

const BookingsScreen = ({}: BookingsScreenProps) => {
  const renderBookingCard: ListRenderItem<any> = ({
    item,
  }: {
    item: typeof Bookings[0];
  }) => {
    const facility = Facilities.find(
      (facility) => facility.id === item.facility_id
    );
    const FacilityTitle = facility?.title;
    const FacilityThumbnail = facility?.photos[0];
    const PlayingHours = `${item.start_hour} - ${item.end_hour}`;
    const BookingDate = formatBookingDate(item.date);
    const BookingCost = item.cost;

    return (
      <BookingCard
        title={FacilityTitle}
        playing_hours={PlayingHours}
        cost={BookingCost}
        thumbnail={FacilityThumbnail}
        onClick={() => {
          console.log("open modal");
        }}
        booking_date={BookingDate}
      />
    );
  };

  return (
    <BookingsScreenContainer>
      <Banner content="Rezerwacje" />
      <BookingsListContainer>
        <BookingsList
          showsVerticalScrollIndicator={false}
          data={Bookings}
          renderItem={renderBookingCard}
        />
      </BookingsListContainer>
    </BookingsScreenContainer>
  );
};

export { BookingsScreen };
