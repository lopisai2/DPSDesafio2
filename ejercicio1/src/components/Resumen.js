import React from "react";
import Datos from "./Datos";
import { Text,View,StyleSheet } from "react-native";

export default function Resumen(props){

    const {quantity,off,total,error,idsize,idtype,idpayment}=props;
    
    function Resumen(props){
        const {titulo, valor}=props;

        return(
            <View style={Style.valor}>
                <Text style={Style.texto}>{titulo}</Text>
                <Text style={Style.texto}>{valor}</Text>
            </View>
        )
    }
    const Tamaño=[
        {
            label:'Selecciona el Tamaño del Café',
        },
        {
            label:'Short (8 onz)',
        },
        {
            label:'Tall (12 onz)',
        },
        {
            label:'Grande (16 onz)',
        },
    ]
    const Tipo=[
        {
            label:'Selecciona el Tipo de Café',
        },
        {
            label:'Mocha',
        },
        {
            label:'Te Chai',
        },
        {
            label:'Americano',
        },
        {
            label:'Frapper',
        },
    ]
    const Pago=[
        {
            label:'Selecciona el Mátodo de pago',
        },
        {
            label:'Efectivo',
        },
        {
            label:'Tarjeta de Crédito',
        },        
    ]       

    return(
        <View style={Style.contenedor}>
            {total &&(
                <View>
                <Text style={Style.titulo}>Resumen</Text>
                <Resumen titulo="Cantidad Solicitada:" valor={`${quantity}`} />
                <Resumen titulo="Tamaño:" valor={`${Tamaño[idsize].label}`} />
                <Resumen titulo="Tipo Cafe:" valor={`${Tipo[idtype].label}`} />
                <Resumen titulo="Tipo de Pago:" valor={`${Pago[idpayment].label}`} />                    
                <Resumen titulo="Descuento %:" valor={`${off}`} />                    
                <Resumen titulo="Total a Pagar:" valor={`$${total.pago}`} />                    
            </View>


            )}
            <View>
                <Text style={Style.error}>{error}</Text>                                
            </View>
        </View>
    )    
}

const Style=StyleSheet.create({
    contenedor:{
        paddingLeft:40,
        paddingRight:40,        
    },
    titulo:{
        fontSize:24,
        textAlign:'center',
        marginBottom:10,
    },
    texto:{
        fontSize:16,
    },
    valor:{
        flexDirection:'row',
        marginBottom:20,
        justifyContent:'space-between',
    },  
    error:{
        fontSize:20,
        alignSelf:'center',
        color:'red',
        position:'absolute',
        marginVertical:150,
    }
})