import React from 'react'
import { View, Text, FlatList } from 'react-native'
import TextCenter from '../Components/TextCencer';
import Botao from '../Components/Botao';
import CardProdutos from '../Components/CardProdutos';
import ApiProdutos from '../Components/ApiProdutos';
import Style from '../Components/Style';

function Produtos(props) {


    const dados = ApiProdutos.map((item) => {
        return item
    })
    console.log(dados)
    return (
        <View style={Style.bodyCard}>
            <Botao navigation={props.navigation} />

            <View>
                <FlatList data={dados} keyExtractor={(item) => `${item.id}`} renderItem={({ item }) => (
                    <CardProdutos produto={item.produto} imagem={item.imagem} preco={item.preco} precoAnterior={item.precoAnterior} descricao={item.descricao} />
                )} />
            </View>
        </View>
    )
}





export default Produtos
