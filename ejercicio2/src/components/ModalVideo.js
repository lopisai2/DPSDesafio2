import React,{useState,useRef} from 'react';
import {Modal, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Video} from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Data from '../utils/Data';
import Styles from '../utils/Styles';

export default function ModalVideo(props){
  const {idvideo, titulo,visibleon,setVisibleon}=props      
  return(
    
    <Modal style={Styles.modal} visible={visibleon} animationType={"slide"} transparent={true} onRequestClose={()=>setVisibleon(false)}>
      <View style={Styles.fondo}>
        <View style={Styles.subcontenedor}>
          <TouchableOpacity style={Styles.botoncerrar} onPress={()=>setVisibleon(false)}>
          <MaterialCommunityIcons color="white" name="close-circle" size={28} />
          </TouchableOpacity>
          <Text style={Styles.titulo2}>{titulo}</Text>      
        </View>
        <Video 
        shouldPlay={true}  
        resizeMode="contain" 
        style={Styles.video} 
        source={Data[idvideo].video} 
        isMuted={false} 
        volume={0.25}
        useNativeControls/>                        
      </View>      
      </Modal>   
     
  )
}
