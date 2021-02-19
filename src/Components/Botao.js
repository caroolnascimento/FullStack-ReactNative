import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'

const Botao = (props) => {
    return (
        <SafeAreaView >
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#DC3545' }} onPress={() => {
                props.navigation.openDrawer();
                setTimeout(() => {
                    props.navigation.closeDrawer();
                }, 3000)
            }}><Text style={{ padding: 15, color: '#fff', fontSize: 18, fontWeight: 500 }}>Menu</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

export default Botao
