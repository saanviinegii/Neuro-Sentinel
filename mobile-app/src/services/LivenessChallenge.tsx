import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function LivenessChallenge({
  challenge
}: any) {

  return (

    <View style={styles.container}>

      <Text style={styles.text}>
        {challenge}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center'
  },

  text: {
    color: '#00F5FF',
    fontSize: 26,
    fontWeight: 'bold'
  }

})