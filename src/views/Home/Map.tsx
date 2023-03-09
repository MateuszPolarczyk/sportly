import styled from "styled-components/native";
import MapView from "react-native-maps";

const MapScreenContainer = styled.View`
  flex: 1;
`;

interface MapScreenProps {}

const MapScreen = ({}: MapScreenProps) => {
  return (
    <MapScreenContainer>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 51.4264,
          longitude: 17.93355,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </MapScreenContainer>
  );
};

export { MapScreen };
