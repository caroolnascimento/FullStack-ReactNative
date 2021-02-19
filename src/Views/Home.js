import React from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import Style from '../Components/Style'
import Botao from '../Components/Botao';
const Home = (props) => {
    return (
        <View style={Style.body}>
            <Botao navigation={props.navigation} />
            <Text style={Style.text}>Bem vindo ao site <br />FullStack Eletro</Text>
        </View >


    )
}

export default Home
