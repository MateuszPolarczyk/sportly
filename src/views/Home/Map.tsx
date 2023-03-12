import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import { theme } from "../../config/theme";
import { Icon } from "../../components/atoms/Icon/Icon";
import { StatusBar } from "react-native";
import { Facilities } from "../../data/mock";

const { dark, accent } = theme.colors;

const MapScreenContainer = styled.View`
  flex: 1;
`;

const MarkerContainer = styled.View`
  flex: 1;
  background-color: ${accent};
  padding: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

interface MapScreenProps {}

const MapScreen = ({}: MapScreenProps) => {
  // Ostrzeszów
  const initiailLat = 51.4264;
  const initialLong = 17.93355;

  return (
    <MapScreenContainer>
      <MapView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          marginTop: StatusBar.currentHeight,
        }}
        initialRegion={{
          latitude: initiailLat,
          longitude: initialLong,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {Facilities.map((facility, index) => (
          <Marker
            coordinate={{
              latitude: facility.location.lat,
              longitude: facility.location.long,
            }}
            key={index}
            title={facility.title}
            onCalloutPress={() => {
              console.log("nawiguj do details");
            }}
          >
            <MarkerContainer>
              <Icon name="football" size={30} color={dark} />
            </MarkerContainer>
          </Marker>
        ))}
      </MapView>
    </MapScreenContainer>
  );
};

export { MapScreen };
