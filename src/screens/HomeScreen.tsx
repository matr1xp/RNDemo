import React from 'react'
import {Button, Text, View} from 'react-native'

import {styles} from './styles'
import {useAuth} from '../contexts/Auth'

export const HomeScreen = (props: { navigation: string[] }) => {
  const auth = useAuth()

  const signOut = () => {
    auth.signOut()
  }

  const welcomeRN = () => {
    props.navigation.push('RN Screen')
  }

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Welcome" onPress={welcomeRN} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}
