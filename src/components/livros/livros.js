import React from "react";
import {View,  TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function livros({titulo, valor, imagem}){
    return (
        <>
        <TouchableOpacity style={estilo.containerLivros}>
            <Image
                style={estilo.images}
                source={require(`../../../assets/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>

        </TouchableOpacity>
        </>
    );
}

const estilo = StyleSheet.create({
    containerLivros:{
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 100,
        height: 150,
        marginLeft: 8,
    },
    titulo:{
      color: "black",
      fontSize: 15,
      fontWeight: 8,  
    },
    valor: {
        color: "balck",
        fontSize: 12,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: "bold",
    },
    images:{
        width: "100%",
        height: 75,
        borderRadius: 3,
    },
});