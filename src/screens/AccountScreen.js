import { View, Text, Button } from 'react-native'
import React from 'react'

export default function AccountScreen(props) {
  const{navigation} = props;
    
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>Pantalla de cuenta</Text>
      <Button onPress={()=>goToPage("Pokedex")} title="Go to Pokedex" ></Button>
    </View>
  )
}