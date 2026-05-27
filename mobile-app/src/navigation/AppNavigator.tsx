import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import VerificationScreen from '../screens/VerificationScreen'
import EnrollmentScreen
from '../screens/EnrollmentScreen'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          <Stack.Screen
   name="Enrollment"
   component={EnrollmentScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}