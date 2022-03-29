import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";


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

     </View>
  );
}
