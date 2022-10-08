import React from 'react';
import {Picker} from '@react-native-picker/picker';
import InputNumber from '../utils/InputNumber';
import Colores from '../utils/Colores';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Datos(props) {
    const { setIdSize,setIdType,setIdPayment,setSize, setType, setPayment, setQuantity, selectedsize,selectedtype,selectedpayment } = props;    
    return (
        <>
            <View style={Styles.fondo}>
                <Text style={Styles.Titulo}>StarBosco App</Text>
                <View style={Styles.contenedorpicker}>
                    <View style={Styles.picker1}>
                    <Picker
                        style={picketSelectStyles.inputAndroid1}                        
                        selectedValue={selectedsize}
                        onValueChange={(value,index) => {setSize(value),setIdSize(index)}}
                    >
                        <Picker.Item label='Seleccionar Tamaño del Café' value={null}></Picker.Item>
                        <Picker.Item label='Short (8 onz) $1.00' value={1}></Picker.Item>
                        <Picker.Item label='Tall (12 onz) $1.50' value={1.5}></Picker.Item>
                        <Picker.Item label='Grande (16 onz) $2.00' value={2}></Picker.Item>
                    </Picker>
                    </View>                    
                    <View style={Styles.picker2}>
                    <Picker
                        style={picketSelectStyles.inputAndroid1}
                        selectedValue={selectedtype}
                        onValueChange={(value,index) => {setType(value),setIdType(index)}}
                    >
                        <Picker.Item label='Seleccionar Tipo del Café' value={null}></Picker.Item>
                        <Picker.Item label='Mocha $2.00' value={2}></Picker.Item>
                        <Picker.Item label='Te Chai $2.50' value={2.5}></Picker.Item>
                        <Picker.Item label='Americano $1.50' value={1.5}></Picker.Item>
                        <Picker.Item label='Frapper $3.00' value={3}></Picker.Item>
                    </Picker>
                    </View>                    
                    <View style={Styles.pickerinput}>
                    <View style={Styles.picker3}>
                    <Picker
                        style={picketSelectStyles.inputAndroid2}
                        selectedValue={selectedpayment}
                        onValueChange={(value,index) => {setPayment(value),setIdPayment(index)}}
                    >
                        <Picker.Item label='Seleccionar el Método de Pago' value={null}></Picker.Item>
                        <Picker.Item label='Efectivo' value={1}></Picker.Item>
                        <Picker.Item label='Tarjeta de Crédito' value={2}></Picker.Item>                        
                    </Picker>
                    </View>                
                    <InputNumber setQuantity={setQuantity} />
                </View>
                </View>                
            </View>
        </>
    )
}

const Styles = StyleSheet.create({    
    fondo: {
        backgroundColor: Colores.Blanco,
    },
    Titulo:{
        fontSize:24,
        textAlign:'center',
        marginBottom:15,
    },
    picker1:{           
        borderRadius:10,
        borderWidth:2,
        borderColor:Colores.Negro,
        marginTop:10,
        marginBottom:10,          
    },
    picker2:{             
        borderRadius:10,
        borderWidth:2,
        borderColor:Colores.Negro,
        marginTop:10,
        marginBottom:10,          
    },
    picker3:{        
        borderRadius:10,
        borderWidth:2,
        borderColor:Colores.Negro,
        marginTop:10,
        marginBottom:10,                  
        marginRight:30,
        width:'55%',
    },
    pickerinput:{           
        display:'flex',
        flexDirection:'row', 
        alignItems:'center',    
            
    },
    contenedorpicker:{
        paddingLeft:40,
        paddingRight:40,        
    }
})
const picketSelectStyles = StyleSheet.create({
    inputAndroid1: {        
        
    },
    inputAndroid2:{        
    }

})