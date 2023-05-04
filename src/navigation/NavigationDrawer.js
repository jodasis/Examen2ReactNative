import React from 'react'
import FavoriteScreens from '../screens/FavoriteScreens';
import AccountScreen from '../screens/AccountScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Favorite' component={FavoriteScreens}></Drawer.Screen>
      <Drawer.Screen name='Account' component={AccountScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}