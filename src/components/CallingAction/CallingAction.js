import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icons from '../../../assets/Icons/Icons'

const CallingAction = () => {

    const [isCameraOn, setIsCameraOn] = useState(false)
    const [isMicrophoneOn, setMicrophoneOn] = useState(false)

const onSwitchCamera = () => {
    console.warn('rewerseCamera')
}
const onSCamreaOff = () => {
    setIsCameraOn(!isCameraOn);
}
const onMute = () => {
    setMicrophoneOn(!isMicrophoneOn)
}
const onEndCall = () => {

}
  return (
    <View style={styles.btncontainer}>
        <View style={styles.iconcontainer}>
        <TouchableOpacity onPress={onSwitchCamera} >
        <Image source={Icons.switchcemara} style={styles.icon} />
        </TouchableOpacity>  
        </View>
        <View style={styles.iconcontainer}>
        <TouchableOpacity onPress={onSCamreaOff} >
        <Image source={isCameraOn ? Icons.oncamera : Icons.cemaraoff} style={styles.icon} />
        </TouchableOpacity>  
        </View>
        <View style={styles.iconcontainer}>
        <TouchableOpacity onPress={onMute} >
        <Image source={isMicrophoneOn ? Icons.mute : Icons.onmic} style={styles.icon} />
        </TouchableOpacity>  
        </View>
        <View style={[styles.iconcontainer, {backgroundColor:'red'}]}>
        <TouchableOpacity onPress={onEndCall} >
        <Image source={Icons.endcall} style={styles.icon} />
        </TouchableOpacity>  
        </View>        
      </View>
  )
}

export default CallingAction

const styles = StyleSheet.create({
    btncontainer: {
        backgroundColor: '#333333',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        marginTop: 'auto'
      },
      iconcontainer: {
        backgroundColor: '#4a4a4a',
        padding: 10,
        borderRadius: 50,
        marginVertical: 15,
      },
    
      icon: {
        height: 35,
        width: 35,
        tintColor: 'white'
      },
})