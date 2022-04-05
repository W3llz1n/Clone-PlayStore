import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Dados from "./dados/dadosJogo";
import DadosL from "./dados/dadosLivros";
import Jogos from "./src/components/jogos/jogos";
import DadosAp from "./dados/dadosApp";
import Apps from "./src/components/App/Apps"
import Livros from "./src/components/livros/livros";



export default function App() {
  return (
    <View style={{backgroundColor:'#D8BFD8', flex:1}}>

      <Cabecalho></Cabecalho>

      <Botao
      logo="game-controller"
      text="Games"
      cor="#9932CC"
      logo2="film"
      text2="Filmes"
      cor2="#9932CC"
      />
      <Botao
      logo="book"
      text="Livros"
      cor="#9932CC"
      logo2="apps"
      text2="Apps"
      cor2="#9932CC"
      />

    <View>

        <View>
          <Text style={estilo.titulo}>Jogos</Text>
        </View>
    
    <FlatList
    horizontal={true}
    data = {Dados}
    keyExtractor = {(item) => item.id}
    renderItem = {({item}) => (

      <Jogos
      titulo ={item.nome}
      imagem ={item.imagem}
      valor ={item.valor}
      />
    )}
    ></FlatList>

    </View>

    <View>

        <View>
          <Text style={estilo.titulo}>Livros</Text>
        </View>
    
    <FlatList
    horizontal={true}
    data = {DadosL}
    keyExtractor = {(item) => item.id}
    renderItem = {({item}) => (

      <Livros
      titulo ={item.nome}
      imagem ={item.imagem}
      valor ={item.valor}
      />
    )}
    ></FlatList>

    </View>

    <View>

        <View>
          <Text style={estilo.titulo}>Apps</Text>
        </View>
    
    <FlatList
    horizontal={true}
    data = {DadosAp}
    keyExtractor = {(item) => item.id}
    renderItem = {({item}) => (

      <Apps
      titulo ={item.nome}
      imagem ={item.imagem}
      valor ={item.valor}
      />
    )}
    ></FlatList>

    </View>

     </View>
  );
}

const estilo = StyleSheet.create({
  titulo:{
    padding:15,
    fontSize:20,
    fontWeight:'bold'
  }


});
