import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreens from '../screens/FavoriteScreens';
import AccountScreen from '../screens/AccountScreen';
import CreditsScreen from '../screens/CreditsScreen';
import PokedexScreen from '../screens/PokedexScreen';
import TutorialScreen from '../screens/TutorialScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Favorite' component={FavoriteScreens}></Tab.Screen>
      <Tab.Screen name='Account' component={AccountScreen}></Tab.Screen>
      <Tab.Screen name='Pokedex' component={PokedexScreen}></Tab.Screen>
      <Tab.Screen name='Tutorial' component={TutorialScreen}></Tab.Screen>
      <Tab.Screen name='Credits' component={CreditsScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}