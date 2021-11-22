import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TransactionScreen from './transaction';
import SearchScreen from './search';
import { Component } from 'react';

const Tab=createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen name='transaction' component = {TransactionScreen}/>
                <Tab.Screen name='search' component = {SearchScreen}/>

                </Tab.Navigator>



            </NavigationContainer>
        )
    }
}