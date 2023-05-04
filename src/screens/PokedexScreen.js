import { View, Text, Button } from 'react-native'
import React from 'react'

export default function PokedexScreen(props) {
  const{navigation} = props;
    
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>Pantalla principal de Pokedex</Text>
      <Button onPress={()=>goToPage("Tutorial")} title="Go to Tutorial" ></Button>
    </View>
  )
}