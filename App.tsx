import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';

export const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator /> */}
            {/* <MenuLateralBasico /> */}
            <MenuLateral />
            {/* <Tabs /> */}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});