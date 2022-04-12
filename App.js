import {StatusBar} from 'expo-status-bar'
import React from 'react';
import {StyleSheet } from 'react-native';

import Routes from './src/Pages/routes'

export default function App() {
 return (
   <>
   <StatusBar style='light' backgroundColor='#000' translucent={true}/>
   <Routes/>
   </>
  );
}

const estilo = StyleSheet.create({
  
});
