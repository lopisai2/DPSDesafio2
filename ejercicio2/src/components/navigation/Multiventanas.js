import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Peliculas from '../screens/Peliculas'
import Proximamente from '../screens/Proximamente'
import Series from '../screens/Series'
const Tab = createBottomTabNavigator();

export default function Multiventanas() {
    return (
        <>
            <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'black' } }}>
                <Tab.Screen name="Peliculas" component={Peliculas} 
                options={{ title: "Peliculas", headerShown: false, tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons color="white" name="movie-roll" size={24} />) }} />
                <Tab.Screen name="Series" component={Series} 
                options={{ title: "Series", headerShown: false, tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="television-play" color="white" size={24} />) }} />
                <Tab.Screen name="Proximamente" component={Proximamente} 
                options={{ title: "Proximamente", headerShown: false, tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="movie-star-outline" color="white" size={24} />) }} />
            </Tab.Navigator>
        </>
    )
}
