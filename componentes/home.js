import React from 'react';
import { View, Image, Text, Button } from 'react-native';

const HomeApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image 
                style={{width: 100, height: 70, marginTop: 30}}
                source={require('../imagens/logo.jpg')}
            />

            <Text style={{padding: 20, marginTop: 40, fontSize: 20}}>Catálogo</Text>

            <Button 
                title="Blusas"
                onPress={() => navigation.navigate('Blusas')}
            />

            <Button 
                title="Calças/Bermudas"
                onPress={() => navigation.navigate('Calças/Bermudas')}
            />

            <Button 
                title="Tênis"
                onPress={() => navigation.navigate('Tênis')}
            />

            <Button 
                title="Bonés"
                onPress={() => navigation.navigate('Bonés')}
            />

            <Button 
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
        </View>
    );
}   

export default HomeApp;