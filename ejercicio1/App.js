import { View, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Datos from './src/components/Datos';
import Calcular from './src/components/Calcular';
import Resumen from './src/components/Resumen';
import React,{useState,useEffect} from 'react';


export default function App() {  

    const [size,setSize]=useState(null);
    const [idsize,setIdSize]=useState(null);
    const [type,setType]=useState(null);     
    const [idtype,setIdType]=useState(null);     
    const [payment,setPayment]=useState(null);
    const [idpayment,setIdPayment]=useState(null);
    const [quantity,setQuantity]=useState(null);
    const [off,setOff]=useState(null);
    const [total,setTotal]=useState(null);
    const [error,setError]=useState('');

    const Limpiar =() =>{
      setError('');
      setTotal(null);
    }

    const calcular=()=>{
      Limpiar();
      if(idsize<1){
        setError('Selecciona el tamaño del café')
      }else if (idtype<1){
        setError('Selecciona el Tipo de Café')
      }else if (payment<1){
        setError('Selecciona el tipo de pago')
      }else if(quantity===0){
        setError('La cantidad debe ser mayor a cero')
      }else{ 
        if(payment===1){
          setOff('15%')
        const discount= (quantity*(type+size))*0.15
        setTotal({
          pago:((quantity*(type+size)) - discount).toFixed(2).replace('.',',')
        })
        }
         
      if(payment===2){        
        setOff('5%')
        const discount= (quantity*(type+size))*0.05
        setTotal({
          pago:((quantity*(type+size)) - discount).toFixed(2).replace('.',',')
      })      
      }  
    }    
    }
    
    useEffect(()=>{
      if(idsize>0&&idtype>0&&quantity>0&&idpayment>0) calcular();
      else Limpiar();
    },[size,type,quantity,payment])



  return (
    <>
      <StatusBar barStyle={'light-content'} hidden={false} backgroundColor={'black'} translucent={false}></StatusBar>
      <Datos 
        setSize={setSize}
        setType={setType}
        setQuantity={setQuantity}
        setPayment={setPayment}
        setIdSize={setIdSize}
        setIdType={setIdType}
        setIdPayment={setIdPayment}
        selectedsize={size}
        selectedtype={type}
        selectedpayment={payment}        
      />
      <Resumen
        size={size}
        payment={payment}
        type={type}
        quantity={quantity}
        off={off}
        total={total}
        error={error}
        idsize={idsize}
        idtype={idtype}
        idpayment={idpayment}
       />
      <Calcular
        calcular={calcular}
       />
    </>
  );
}

