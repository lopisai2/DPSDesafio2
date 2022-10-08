import { TouchableHighlight, StyleSheet,Text, View } from "react-native";

export default function Calcular(props){

    const {calcular}=props

    return(
        <View style={Style.contenedor}>
            <TouchableHighlight style={Style.boton} onPress={calcular}>
                <Text style={Style.texto}>Calcular</Text>
            </TouchableHighlight>
        </View>
    )    
}

const Style=StyleSheet.create({
    contenedor:{
        position:'absolute',
        bottom:0,        
        height:100,
        paddingRight:40,
        paddingLeft:40,        
        alignSelf:'center',
    },
    boton:{        
        borderRadius:10,
        borderWidth:2,
        height:60,
        width:190,        
    },
    texto:{
        fontSize:16,
        marginTop:14,
        textAlign:'center',
    }

})