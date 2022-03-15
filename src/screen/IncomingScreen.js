import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Icons from '../../assets/Icons/Icons';

const IncomingScreen = () => {

    const onDecline = () => {
        console.log('Wrong btn')
    }
    const onAccept = () => {
        console.log('True btn')
    }

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        source={Icons.iosbg}
        resizeMode="cover"
        style={styles.img}>
        <View style={styles.container}>
          <Text style={styles.name}>Raju bhai</Text>
          <Text style={styles.number}>+91 789456123</Text>
        </View>
        <View
          style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconcontainer}>
            <Pressable>
              <Image source={Icons.alarm} style={styles.icon} />
            </Pressable>

            <Text style={styles.iconfont}>Remide me</Text>
          </View>
          <View style={styles.iconcontainer}>
            <Pressable>
              <Image source={Icons.msg} style={styles.icon} />
            </Pressable>

            <Text style={styles.iconfont}>Message</Text>
          </View>
        </View>
        <View
          style={styles.row}>
          <View style={styles.iconcontainer}>
            <TouchableOpacity onPress={onDecline} style={styles.iconbg}>
              <Image source={Icons.wrong} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.iconfont}>Decline</Text>
          </View>
          <View style={styles.iconcontainer}>
            <TouchableOpacity onPress={onAccept}
              style={[styles.iconbg, {backgroundColor: 'green'}]}>
              <Image source={Icons.tr} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.iconfont}>Accept</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IncomingScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    padding: 90,
  },
  img: {
    height: '100%',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 15,
    color: '#DBDBDB',
  },
  number: {
    fontSize: 20,
    color: '#2B2B2B',
  },
  icon: {
    height: 35,
    width: 35,
    tintColor: 'white',
    
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 40
  
},
  iconfont: {
    fontSize: 16,
    marginVertical: 4
  },
  iconcontainer: {    
    alignItems: 'center',
  },
  iconbg: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 28,
  },
});
