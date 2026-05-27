import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function TacticalHUD() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        NEUROLOCK SENTINEL
      </Text>

      <Text style={styles.status}>
        STATUS: SCANNING
      </Text>

      <Text style={styles.ai}>
        AI THREAT ENGINE ACTIVE
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center'
  },

  title: {
    color: '#00F5FF',
    fontSize: 22,
    fontWeight: 'bold'
  },

  status: {
    color: '#00FF88',
    marginTop: 10
  },

  ai: {
    color: '#FF4444',
    marginTop: 6
  }
})