import React,{useState,useEffect, useRef} from 'react';
import {Image, Text, FlatList, StyleSheet, ScrollView, Modal, TouchableOpacity, TouchableHighlight, View, Button} from 'react-native';
import ModalVideo from '../ModalVideo';
import Data from '../../utils/Data';
import Styles from '../../utils/Styles'

const SeriesAventura=Data.filter(element=> element.id>=18&&element.id<=23)
const SeriesComedia=Data.filter(element=> element.id>=24&&element.id<=29)
const SeriesFantasia=Data.filter(element=> element.id>=30&&element.id<=35)

const Item=({imagen,titulo,temporadas})=>(
  <>
    <View style={Styles.viewimagenesSeries}>
      <Image style={Styles.imagenesSeries} source={imagen} />
      <View style={Styles.subviewimagenesSeries}>
        <Text style={Styles.tituloSeries}>{titulo}</Text>
        <Text style={Styles.tituloSeries}>Temporadas:{temporadas}</Text>
      </View>
    </View>
  </>
);

export default function Series(){

  const [id,setId]=useState(4);     
  const [modalVideo,setModalVideo]=useState(false);    
  const renderItem=({item})=>(
    <TouchableOpacity onPress={()=>{setId(item.id),setModalVideo(true)}}><Item imagen={item.imagen} titulo={item.name} temporadas={item.temporadas} /></TouchableOpacity>
  );  
    return(    
        <View style={{backgroundColor:"black",height:"100%"}}>    
    <ScrollView>
      <Image style={Styles.banner} source={Data[27].imagen}/>
      <Text style={Styles.titulo}>Series de Aventura</Text>
      <FlatList
        data={SeriesAventura}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
      <Text style={Styles.titulo}>Series de Comedia</Text>
      <FlatList
        data={SeriesComedia}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
      <Text style={Styles.titulo}>Series de Fantasia</Text>
      <FlatList
        data={SeriesFantasia}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
     <ModalVideo idvideo={id} titulo={Data[id].name} visibleon={modalVideo} setVisibleon={setModalVideo}/>
    </ScrollView>
  </View>
  )
    
}