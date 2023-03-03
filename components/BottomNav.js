import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import styles from '../styles/style';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Gameboard from "./Gameboard";
import Scoreboard from './Scoreboard'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HOME = 'Home';
const GAMEBOARD = 'Gameboard';
const SCOREBOARD = 'Scoreboard';
const icons = {
    [HOME]: 'home',
    [GAMEBOARD]: 'game-controller',
    [SCOREBOARD]: 'trophy'
}

export default BottomNav = () => {

    
    return (
        <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? icons[HOME]
                : icons[HOME] + '-outline';
            } else if (route.name === 'Gameboard') {
              iconName = focused ? icons[GAMEBOARD] : icons[GAMEBOARD] + '-outline';
            }
            else if (route.name === 'Scoreboard') {
                iconName = focused ? icons[SCOREBOARD] : icons[SCOREBOARD] + '-outline';
              }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarStyle: {display: "none"}}} />
        <Tab.Screen name="Gameboard" component={Gameboard} />
        <Tab.Screen name="Scoreboard" component={Scoreboard} />
      </Tab.Navigator>
    </NavigationContainer>
       
    )
}

