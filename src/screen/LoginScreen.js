import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Voximplant} from 'react-native-voximplant';
import {APP_NAME, ACC_NAME} from '../Constant';
import Icons from '../../assets/Icons/Icons';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const voximplant = Voximplant.getInstance();
   const navigation = useNavigation();

  useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState();
      console.log(status);
      if (status === Voximplant.ClientState.DISCONNECTED) {
        await voximplant.connect();
      }else if(status === Voximplant.ClientState.LOGGED_IN){
        redirectHome();
      }
    };
    connect();
  }, []);

  const singIn = async () => {

    try {
      const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.n2.voxiplant.com`;
      await voximplant.login(fqUsername, password);
      console.log(APP_NAME);
      redirectHome();
    } catch (e) {
      console.log(e);
      Alert.alert(e.name, `Error code: ${e.code}`);
    }
    navigation.navigate('Contact');
    // redirectHome()
  };

  const redirectHome = () => {
      navigation.reset(
        {
          index: 0,
          routes: [{name: 'Contact'}]
        }
      )
  }

  return (
    <View >
      <View style={styles.page}>
          <Image source={Icons.title2}  style={styles.img} resizeMode={"contain"} />
          <View style={styles.title}>
              <Text style={styles.titletext}>Talk Mates</Text>
          </View>
          <View style={styles.inputcontainer}>
         <Image source={Icons.user} style={styles.icon}/> 
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={setUserName}
          style={styles.input}
          autoCapitalize="none"
        /></View>
        <View style={styles.inputcontainer}>
         <Image source={Icons.password} style={styles.icon}/>
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        /></View>

        <TouchableOpacity style={styles.i} onPress={singIn}>
          <Text style={styles.btntext}>SingIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'skyblue',
    // padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    
  },title: {
    marginVertical: 20,
    position: 'absolute'
},imgcontainer: {
},
img: {
    height: "25%",
    width: "100%"
},
  titletext: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 100
    
  },
  inputcontainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  icon:{
    height: 20,
    width: 20,
    position: 'absolute',
    marginLeft: 9

    },
  input: {
    width: 250,
    borderColor: 'black',
    // borderWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    padding: 10,
    paddingLeft: 40,
    marginVertical: 15,
    borderRadius: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: "700",
    letterSpacing: 1,
  },
  btntext: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 1,
  },
  i: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 8,
    marginVertical: 15,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
