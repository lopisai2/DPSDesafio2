import React,{useState,useEffect, useRef} from 'react';
import {Image, Text, FlatList, StyleSheet, ScrollView, Modal, TouchableOpacity, TouchableHighlight, View} from 'react-native';
import {Video} from 'expo-av';
import Data from '../../utils/Data';
import Styles from '../../utils/Styles'

const PeliculasProximamente=Data.filter(element=> element.id>=36&&element.id<=41)

const Item=({video,descripcion,fecha, titulo})=>(
  <>
    <View style={Styles.viewVideosProximamente}>
      <Video 
        shouldPlay={false}  
        resizeMode="contain" 
        style={Styles.videoProximamente} 
        source={video} 
        isMuted={false} 
        volume={0.25}
        useNativeControls/> 
      <View style={Styles.subviewimagenesSeries}>
        <Text style={Styles.tituloVideosProximamente}>{titulo}</Text>
        <Text style={Styles.tituloVideosProximamente}>Descripcion:{descripcion}</Text>
        <Text style={Styles.tituloVideosProximamente}>Fecha de Estreno:{fecha}</Text>
      </View>
    </View>
  </>
);

export default function Series(){
  const renderItem=({item})=>(
    <Item video={item.video} titulo={item.name} descripcion={item.descripcion} fecha={item.fecha} />
  );  
    return(    
        <View style={{backgroundColor:"black",height:"100%"}}>    
    <ScrollView>      
      <Text style={Styles.maxtituloVideosProximamente}>Peliculas para el 2023</Text>
      <FlatList
        data={PeliculasProximamente}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
       />       
    </ScrollView>
  </View>
  )
    
}
