import { View, Text, Button } from 'react-native'
import React from 'react'

export default function CreditsScreen(props) {
  const{navigation} = props;
    
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>Pantalla de créditos</Text>
      <Button onPress={()=>goToPage("Favorite")} title="Go to Favorite" ></Button>
    </View>
  )
}