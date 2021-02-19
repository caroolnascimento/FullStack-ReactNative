import React from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import TextCenter from '../Components/TextCencer';
import Botao from '../Components/Botao';
import Input from '../Components/Input';
import Style from '../Components/Style'
function Login(props) {
    return (
        <View style={Style.body}>
            <Botao navigation={props.navigation} />
            <View style={Style.position}>
                <Text style={Style.space}>LOGIN</Text>
                <View >
                    <Text>Email</Text>
                    <Input type='email-address' placeholder='Digite o seu email' style={Style.position} />
                </View>
                <View style={{ display: 'flex' }}>
                    <Text>Senha</Text>
                    <Input type='email-address' placeholder='Digite o seu email' style={Style.position} />

                </View>
                <TouchableOpacity style={{ flex: 1, backgroundColor: '#28A745', borderRadius: 15 }} onPress={() => {
                    window.location.href = '/'
                }}><Text style={{ padding: 15, color: '#fff', fontSize: 18, fontWeight: 500 }}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

