import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {spacing} from '@/theme/spacing';

const LocationMap: React.FC = () => {
  const defaultRegion: Region = {
    latitude: 37.78825, // Default latitude
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState<Region>(defaultRegion);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to use this feature.',
        );
        return;
      }
    }

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      error => Alert.alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {location && (
          <Marker
            coordinate={location}
            title="You are here"
            description="Your current location"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopEndRadius: spacing[8],
    borderTopStartRadius: spacing[8],
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LocationMap;
