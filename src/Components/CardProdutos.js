import Style from "./Style"
import React from 'react'
import { View, Text } from 'react-native'

const CardProdutos = ({ produto, imagem, preco, precoAnterior, descricao }) => {

    return (
        <View style={Style.cardProducts}>
            <img src={require(`../Imagens/${imagem}`)} alt="Imagem de Produtos" style={{ width: 300 }} />
            <Text style={styleText.title}>{produto}</Text>
            <Text style={styleText.subtitle}>{descricao}</Text>
            <Text style={styleText.priceBefore}>de: {precoAnterior}</Text>
            <Text style={styleText.priceAfter}>para: {preco}</Text>
        </View>
    )
}
export default CardProdutos;
const styleText = {
    title: {
        fontSize: 25,
        fontFamily: 'Arial',
    },
    subtitle: {
        fontSize: 20,
    },
    priceBefore: {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        fontSize: 17
    },
    priceAfter: {
        fontSize: 18
    }
}