import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useFrameProcessor
} from 'react-native-vision-camera'

import { runOnJS } from 'react-native-reanimated'

import {
  scanFaces
} from 'vision-camera-face-detector'

export default function FaceScanner() {

  const device = useCameraDevice('front')

  const { hasPermission, requestPermission } =
    useCameraPermission()

  React.useEffect(() => {
    requestPermission()
  }, [])

  const [faceDetected, setFaceDetected] =
    React.useState(false)

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'

    const faces = scanFaces(frame)

    runOnJS(setFaceDetected)(faces.length > 0)

  }, [])

  if (!hasPermission || device == null) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'white' }}>
          Loading Camera...
        </Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>

      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
      />

      <View style={styles.overlay}>
        <Text style={styles.status}>

          {faceDetected
            ? 'FACE DETECTED'
            : 'SCANNING...'}

        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  overlay: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center'
  },

  status: {
    color: '#00FF88',
    fontSize: 24,
    fontWeight: 'bold'
  }

})