import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary
                }
            }}
        >
            <Tab.Screen name="Home" component={Tab1Screen} />
            <Tab.Screen name="Settings" component={Tab2Screen} />
            <Tab.Screen name="StackNavigation" component={StackNavigator} />

        </Tab.Navigator>
    );
}