import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreens from '../screens/FavoriteScreens';
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';
import TutorialScreen from '../screens/TutorialScreen';
import CreditsScreen from '../screens/CreditsScreen';

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen name='Favorite' component={FavoriteScreens}></Stack.Screen>
        <Stack.Screen name='Account' component={AccountScreen}></Stack.Screen>
        <Stack.Screen name='Pokedex' component={PokedexScreen}></Stack.Screen>
        <Stack.Screen name='Tutorial' component={TutorialScreen}></Stack.Screen>
        <Stack.Screen name='Credits' component={CreditsScreen}></Stack.Screen>
      </Stack.Navigator>
    )
  }