import { View, Text, Button } from 'react-native'
import React from 'react'

export default function FavoriteScreens(props) {
  const{navigation} = props;
    
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>Pantallas favoritas</Text>
      <Button onPress={()=>goToPage("Account")} title="Go to Account" ></Button>
    </View>
  )
}