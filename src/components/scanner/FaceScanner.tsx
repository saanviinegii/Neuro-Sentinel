// import React,{
// useEffect
// }
// from 'react'

// import {
// View,
// Text
// }
// from 'react-native'

// import {

// Camera,
// useCameraDevice,
// useCameraPermission

// }

// from 'react-native-vision-camera'

// export default function FaceScanner(){

// const device=
// useCameraDevice('front')

// const {hasPermission,
// requestPermission}
// =
// useCameraPermission()

// useEffect(()=>{

// if(!hasPermission){

// requestPermission()

// }

// },[])

// if(!hasPermission){

// return <Text>
// No Camera Permission
// </Text>

// }

// if(device==null){

// return <Text>
// Loading Camera
// </Text>

// }

// return(

// <View style={{flex:1}}>

// <Camera

// style={{flex:1}}

// device={device}

// isActive={true}

// />

// </View>

// )

// }

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function FaceScanner() {

  const device = useCameraDevice('front');

  const {
    hasPermission,
    requestPermission
  } = useCameraPermission();

  useEffect(() => {

    if (!hasPermission) {
      requestPermission();
    }

  }, [hasPermission]);



  if (!hasPermission) {

    return (
      <View style={styles.center}>
        <Text>No Camera Permission</Text>
      </View>
    );

  }


  if (device == null) {

    return (
      <View style={styles.center}>
        <Text>Loading Camera...</Text>
      </View>
    );

  }


  return (

    <Camera
      style={{flex:1}}
      device={device}
      isActive={true}
    />

  );

}


const styles=StyleSheet.create({

center:{

flex:1,
justifyContent:'center',
alignItems:'center'

}

});