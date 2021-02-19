import React from 'react'

import Home from '../Views/Home';
import Login from '../Views/Login';
import Produtos from '../Views/Produtos';

import { createDrawerNavigator } from '@react-navigation/drawer';

const routeDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <routeDrawer.Navigator initialRouteName='Home'>
            <routeDrawer.Screen name='Home' component={Home} />
            <routeDrawer.Screen name='Login' component={Login} />
            <routeDrawer.Screen name='Produtos' component={Produtos} />

        </routeDrawer.Navigator>
    )
}

export default Drawer
