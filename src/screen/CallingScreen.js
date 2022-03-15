import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  PermissionsAndroid,
  Alert,
  Platform
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CallingAction from '../components/CallingAction/CallingAction';
import Icons from '../../assets/Icons/Icons';
import {useNavigation, useRoute} from '@react-navigation/core';

const permissions = [
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
]

const CallingScreen = () => {
  const [permissionsGranted, setPermissionGranted] = useState(false)
  const navigation = useNavigation();
  const route = useRoute();

  const user = route?.params?.user;
  const onPressBack = () => {
    navigation.navigate('Contact');
  };

  useEffect(() => {
    const getPermessions = async () => {
      const granted = await PermissionsAndroid.requestMultiple(permissions);
      const recordAudioGranted =
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
      const cameraGranted =
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
      if (!cameraGranted || !recordAudioGranted) {
        Alert.alert('Permissions not granted');
      } else {
        setPermissionGranted(true);
      }
    };

    if(Platform.OS == 'android'){
      getPermessions();
    } else {
      setPermissionGranted(true);
    }
  }, []);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.imgcontainer}>
        <TouchableOpacity onPress={onPressBack}>
          <Image source={Icons.Down} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.number}>+91 789456123</Text>
      </View>

      <CallingAction />
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'skyblue',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
  },
  number: {
    fontSize: 20,
    color: '#2B2B2B',
  },
  img: {
    height: 20,
    width: 30,
    top: 10,
    left: 15,
  },
  imgcontainer: {
    flexDirection: 'row',
    marginTop: 50,
    height: 25,
    width: 40,
  },
});
