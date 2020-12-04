import React from 'react';
import { View, Image, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
  );

const HomeApp = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                style={{width: 100, height: 70, marginTop: 30}}
                source={require('../imagens/logo.jpg')}
            />

            <Text style={{padding: 20, marginTop: 40, fontSize: 20}}>Catálogo</Text>

            <Button 
                title="Blusas"
                onPress={() => navigation.navigate('Blusas')}
            />

        </View>
        <Separator/>
     
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}} >

        <Button 
                title="Calças/Bermudas"
                onPress={() => navigation.navigate('Calças/Bermudas')}
            />

        </View>
        <Separator/>
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>

        <Button 
                title="Tênis"
                onPress={() => navigation.navigate('Tênis')}
            />

        </View>
        <Separator/>
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>

        <Button 
                title="Bonés"
                onPress={() => navigation.navigate('Bonés')}
            />

        </View>
        <Separator/>
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>

        <Button 
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
            
        </View>
        <Separator/>
    </SafeAreaView>
    );
}   

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
      }
    });
    

export default HomeApp;