import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <Ionicons name="menu" size={24} color="white" />

        <Text style ={estilo.Texto}> Dark Store </Text>
       
        <Ionicons name="ios-search-sharp" size={24} color="white" />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#262223',
        width:'100%',
        padding:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20

    },
    Texto:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }

})