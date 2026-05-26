import React from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {
 generateEmbedding
}
from '../ai/embeddingEngine'

import {
 insertUser
}
from '../database/database'
export default function EnrollmentScreen() {

  const [name, setName] = React.useState('')

  const enrollUser = () => {

    console.log('User Enrolled:', name)
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        USER ENROLLMENT
      </Text>

      <TextInput
        placeholder="Enter Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={enrollUser}
      >

        <Text style={styles.buttonText}>
          START ENROLLMENT
        </Text>

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050B18',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    color: '#00F5FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#00F5FF',
    borderRadius: 12,
    padding: 15,
    color: 'white',
    marginBottom: 20
  },

  button: {
    backgroundColor: '#00F5FF',
    padding: 18,
    borderRadius: 12
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  }

})