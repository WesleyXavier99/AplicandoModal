import React from 'react';
import { Button, View, Text } from 'react-native';


const Mostrar = ({onAlteraEstado}) => {
    return(
        <View style={{width:320, height:300, backgroundColor:'#292929', borderRadius:20}}>
            <Text style={{color:'red',textAlign:'center'}}>Esse é o Modal</Text>
            <Button title='Sair' onPress={()=>onAlteraEstado(false)}/>
        </View>
    );
}

export default Mostrar;