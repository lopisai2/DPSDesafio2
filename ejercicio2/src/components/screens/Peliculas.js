import React,{useState,useEffect, useRef} from 'react';
import {Image, Text, FlatList, StyleSheet, ScrollView, Modal, TouchableOpacity, TouchableHighlight, View, Button} from 'react-native';
import ModalVideo from '../ModalVideo';
import Data from '../../utils/Data';
import Styles from '../../utils/Styles'

//Regresa un Arreglo hasta cuando el id del array sea menor o igual al id requeridop
const PeliculasAccion= Data.filter(element => element.id>=0&&element.id<=5)
const PeliculasComedia= Data.filter(element => element.id>=6&&element.id<=11)
const PeliculasRomance= Data.filter(element => element.id>=12&&element.id<=17)

const Item=({imagen,video})=>(
  <>
    <View style={Styles.viewimagenes}>
      <Image style={Styles.imagenes} source={imagen} />
    </View>
  </>
);

export default function Peliculas(){  
  
  const [id,setId]=useState(4);     
  const [modalVideo,setModalVideo]=useState(false);    
  const renderItem=({item})=>(
    <TouchableOpacity onPress={()=>{setId(item.id),setModalVideo(true)}}><Item imagen={item.imagen} /></TouchableOpacity>
  );  
  return(
    <View style={{backgroundColor:"black",height:"100%"}}>    
    <ScrollView>
      <Image style={Styles.banner} source={Data[1].imagen}/>
      <Text style={Styles.titulo}>Peliculas de Accion</Text>
      <FlatList horizontal
        data={PeliculasAccion}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
      <Text style={Styles.titulo}>Peliculas de Comedia</Text>
      <FlatList horizontal
        data={PeliculasComedia}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
      <Text style={Styles.titulo}>Peliculas de Romance</Text>
      <FlatList horizontal
        data={PeliculasRomance}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
     <ModalVideo idvideo={id} titulo={Data[id].name} visibleon={modalVideo} setVisibleon={setModalVideo}/>
    </ScrollView>
  </View>
  )  
}

