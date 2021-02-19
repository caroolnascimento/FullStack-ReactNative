import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer';
const Routes = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Routes;