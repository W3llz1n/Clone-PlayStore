import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Dados from "./dados/dadosJogo";
import Jogos from "./src/components/jogos/jogos";


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
      <Text>Jogos</Text>
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

     </View>
  );
}
