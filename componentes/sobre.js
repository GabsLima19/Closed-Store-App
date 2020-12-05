import React from 'react';
import { View, Image, Text, TouchableOpacity, Button } from 'react-native';


const SobreApp = ({navigation}) => {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
       <Text>Closed Store App</Text>
        <Text>Versão 1.0</Text>
        <Text style={{marginTop: 30, fontWeight: 'bold'}}>Desenvolvido por:</Text>
        <Text>Jorge Otavio Teles</Text>
        <Text>Gabriel Francisco</Text>
        <Text>Lucas Hermida</Text>
        <Text>João Victor Plessim</Text>
        <Text style={{marginBottom: 30}}>Christian Souza</Text>
        <Button 
        title="Voltar"
        onPress={() => navigation.goBack()}
    />
    </View>
    );
}

export default SobreApp;