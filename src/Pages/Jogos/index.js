import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';

import Dados from "../../../dados/dadosJogo";
import Cards from "../../components/card-telas/index";

export default function Jogos() {
 return (
    <View style={{backgroundColor:'#FDEB5C', flex:1}}>
       <FlatList
       style={estilo.box_cards}
        horizontal={false}
        data = {Dados}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (

          <Cards
          titulo ={item.nome}
          imagem ={item.imagem}
          valor ={item.valor}
          />
        )}
        />
    </View>
  );
}

const estilo = StyleSheet.create({
  box_cards:{
    flexWrap:"wrap"
  }


});