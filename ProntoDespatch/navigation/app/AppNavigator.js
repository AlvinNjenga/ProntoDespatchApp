import React from 'react';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppDrawer from '../../navigation/app/AppDrawer';

import BottomTavNavigator from '../tabs/BottomTabNavigator';
import JobsTopTabNavigator from '../tabs/JobsTopTabNavigator';

const Drawer = createDrawerNavigator();

export const HomeNavigator = () => (
    <Drawer.Navigator
        // screenOptions={}
        drawerContent={props => <AppDrawer {...props} />}>
        <Drawer.Screen name='Bottom' component={BottomTavNavigator} />
        <Drawer.Screen name='Top' component={JobsTopTabNavigator} />
    </Drawer.Navigator>
)