import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import {useNavigation} from '@react-navigation/native'

import Cabecalho from "../../components/cabecalho/index";
import Botao from "../../components/botao/index";

import Dados from "../../../dados/dadosJogo";
import DadosL from "../../../dados/dadosLivros"
import DadosAp from "../../../dados/dadosApp";
import DadosF from "../../../dados/dadosFilmes";
import DadosFavoritos from "../../../dados/dadosFavoritos";

import Cards from "../../components/Card/card";
import CardFavorito from "../../components/CardFavorito/index";




export default function Home() {

const Navigator = useNavigation();

  return (
    <View style={{backgroundColor:'#FDEB5C', flex:1, justifyContent:"center"}}>

      <Cabecalho></Cabecalho>

    <View style={{flexDirection:'row', justifyContent:'center', width:"100%"}}>
      <Botao logo="game-controller" text="Games" onClick={()=> Navigator.navigate('Jogos')}/>
      <Botao logo="book" text="Livros" onClick={()=>alert('clicois')}/>
    </View>
    <View style={{flexDirection:'row', justifyContent:'center', width:"100%"}}>
      <Botao logo="film" text="Filmes" onClick={()=>alert('clicois')}/>
      <Botao logo="apps" text="Apps" onClick={()=>alert('clicois')}/>
    </View>

      <ScrollView>

        <View style={estilo.contentCard}>
          <Text style={estilo.titulo}>Jogos</Text>
        
        <FlatList
        horizontal={true}
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

        <View style={estilo.contentCard}>
          <Text style={estilo.titulo}>Livros</Text>

        <FlatList
        horizontal={true}
        data = {DadosL}
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

        <View style={estilo.contentCard}>
          <Text style={estilo.titulo}>Apps</Text>
                
        <FlatList
        horizontal={true}
        data = {DadosAp}
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

        <View style={estilo.contentCard}>
          <Text style={estilo.titulo}>Filmes</Text>
                
        <FlatList
        horizontal={true}
        data = {DadosF}
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

        <View style={estilo.contentCard}>
          <Text style={estilo.tituloL}>Lançamentos</Text>
          <FlatList
          horizontal={true}
          data = {DadosFavoritos}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardFavorito
            titulo ={item.nome}
            imagem ={item.imagem}
            valor ={item.valor}
            />
          )}
          />
        </View>

      </ScrollView>



     </View>
  );
}

const estilo = StyleSheet.create({
  titulo:{
    marginBottom:15,
    fontSize:20,
    fontWeight:'bold',
    color:"#D94C2A"
  },
  contentCard:{
    padding:10
  },
  tituloL:{
    fontSize:25,
    color:"#D94C2A",
    marginBottom: 20,
    fontWeight:'bold'
  },


});