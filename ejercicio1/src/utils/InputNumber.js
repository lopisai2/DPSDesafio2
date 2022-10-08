import React from 'react';
import NumericInput from 'react-native-numeric-input';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function InputNumber(props){
    const {setQuantity}=props;
    return(
        <Text>
            <NumericInput containerStyle={style.contenedor} maxValue={999} totalHeight={60} totalWidth={120} inputStyle={style.tamaño} minValue={0} type='plus-minus' onChange={value=>setQuantity(value)}/>
        </Text>
    )
}
const style=StyleSheet.create({
    tamaño:{
        fontSize:16,   
        color:'black',        
    },
    contenedor:{        
    }
})