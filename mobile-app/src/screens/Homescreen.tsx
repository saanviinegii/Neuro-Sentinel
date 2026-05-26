import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        NeuroLock Sentinel
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>
          Start Authentication
        </Text>
      </TouchableOpacity>
   style={styles.button}
   onPress={() =>
      navigation.navigate('Enrollment')
   }
>

   <Text style={styles.buttonText}>
      Enroll New User
   </Text>

</TouchableOpacity>
    </View>
    >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#00F5FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40
  },

  button: {
    backgroundColor: '#00F5FF',
    padding: 18,
    borderRadius: 12
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold'
  }
})