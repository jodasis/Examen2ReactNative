import { View, Text, Button } from 'react-native'
import React from 'react'

export default function TutorialScreen(props) {
  const{navigation} = props;
    
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>Tutorial</Text>
      <Button onPress={()=>goToPage("Credits")} title="Go to Credits" ></Button>
    </View>
  )
}