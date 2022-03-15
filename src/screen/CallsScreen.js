import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallingAction from '../components/CallingAction/CallingAction'

const CallsScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.camerapreview} />
      <CallingAction />
    </View>
  )
}

export default CallsScreen

const styles = StyleSheet.create({
    page: {
        // flex: 1,
        backgroundColor: 'grey',
        height: '100%'
    },
    camerapreview:{ 
        width: 100,
        height: 150,
        right: 10,
        top: 150,
        backgroundColor: 'white',
        position: "absolute",
        borderRadius: 10
    }
})