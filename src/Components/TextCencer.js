import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function TextCenter({ text }) {
    return (
        <View style={css.container}>
            <Text style={css.text}>
                {text}
            </Text>
        </View>
    )
}
export default TextCenter;

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FF6347"
    },
    text: {
        fontSize: 50,
        color: "#000"
    }
})