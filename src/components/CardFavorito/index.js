import React from "react";
import {View,  TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function jogos({titulo, valor, imagem}){

    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }
        return `${desc.substring(0, 18)}...`;
    }

    return (
        <>
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
                style={estilo.images}
                source={require(`../../../assets/${imagem}`)}
            />
            <Text style={estilo.titulo}>{filterDesc(titulo)}</Text>
            <View styly={estilo.infovalor}>
                <Text style={estilo.valor}>{valor}</Text>
            </View>
            

        </TouchableOpacity>
        </>
    );
}

const estilo = StyleSheet.create({
    containerJogos:{
        backgroundColor: "#262223",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent:"space-between",
        width: 300,
        height: 350,
        marginLeft: 8,
        borderWidth:2,
        borderColor:"#D94C2A",
    },
    titulo:{
      color: "#FFF",
      fontSize: 15,
      fontWeight: 8,  
    },
    valor: {
        width: "100%",
        color: "#D94C2A",
        fontSize: 12,
        marginTop: 2,
        fontWeight: "bold",
    },
    images:{
        width: "100%",
        height: "85%",
        borderRadius: 3,
    },
});