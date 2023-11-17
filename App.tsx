import React,  {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import Mostrar from './src/Mostrar'

export default function App() {
  const [modalVisibility, setVisibility] = useState(false);

  const mostrar = ()=> {
    setVisibility(true)
  }

  const sair = (visibility: boolean)=> {
    setVisibility(visibility)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Botão que aciona o Modal</Text>
      <Button onPress={mostrar} title='Mostrar'/>
      <Modal animationType='fade' visible={modalVisibility}>
        <View style={{flex:1, margin: 20, alignItems:'center', justifyContent:'center'}}>
          <Mostrar onAlteraEstado={()=>sair(false)}/>
        </View>
        
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
