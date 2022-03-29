import React,{Fragment} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Botao({logo,text,cor,logo2,text2,cor2}){
        
    return(

        <View style={estilo.containerBotoes1}>

        <TouchableOpacity style={[estilo.botoes, {backgroundColor:cor}]}>
        <Ionicons name= {logo} size= {20} color='white'
        
        style={{marginRight:10}}/>
            <Text style = {estilo.textoBotao} > {text} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={[estilo.botoes, {backgroundColor:cor2}]}>
        <Ionicons name= {logo2} size= {20} color='white'
        
        style={{marginRight:10}}/>
            <Text style = {estilo.textoBotao} > {text2} </Text>

            </TouchableOpacity>

        </View>

    );

}

const estilo = StyleSheet.create({

    containerBotoes1:{
        flexDirection:'row',
        marginBottom:10,
        justifyContent:"center"
    },

    textBotao:{
        color:"black",
        fontWeight:'bold'
    },
    botoes:{
        padding:10,
        width:'45%',
        marginHorizontal: 5,
        alignItems:'center',
        justifyContent:'flex-start',
        fontSize:12,
        flexDirection:'row',
        borderRadius: 20,
    }


})