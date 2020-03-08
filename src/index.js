import React from "react";
import MapView from "react-native-maps";

import { View } from "react-native";

const Home = () => (
  <View style={{flex:1}}>
    <MapView
    style={{flex:1}}
    region={{
      latitude: -23.212302,
      longitude: -47.2825257,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134
      }}
    showsUserLocation
    loadingEnabled
    />
  </View>
);

export default Home;