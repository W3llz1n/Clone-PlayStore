import React,{Fragment} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Botao(props){
        
    return(

        <View>

        <TouchableOpacity style={estilo.container} onPress={props.onClick}>

        <Ionicons name= {props.logo} size= {20} color='white'
        style={{marginRight:10}}/>

            <Text style = {estilo.textoBotao} > {props.text} </Text>

            </TouchableOpacity>

        </View>

    );

}

const estilo = StyleSheet.create({

    container:{
        padding:10,
        width: 170,
        marginHorizontal: 5,
        marginBottom: 10,
        alignItems:'center',
        justifyContent:'flex-start',
        fontSize:12,
        flexDirection:'row',
        borderRadius: 20,
        backgroundColor: '#D94C2A'
    },

    textBotao:{
        fontSize: 20,
        color:"black",
        fontWeight:'bold'
    },


})