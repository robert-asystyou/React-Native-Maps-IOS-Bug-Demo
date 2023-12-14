/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {height} = useWindowDimensions();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <MapView
            style={{
              height: height * 0.4,
            }}
            initialRegion={{
              latitude: 31.5551583,
              longitude: -97.1295999,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            minZoomLevel={17}>
            <Marker
              key={0}
              coordinate={{
                latitude: 31.5551583,
                longitude: -97.1295999,
              }}
              title={'Test Name'}
              description={''}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
