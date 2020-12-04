import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CalçasApp = () => {
    return(
        <ScrollView>
        <View style={{marginTop: 10}}>

        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Blusas</Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bermuda1.jpg')}
            />
            
            <Text>Bermuda  Branca</Text>
            <Text>Tamanhos disponíveis: | G | GG | XG |</Text>
            <Text style={{fontWeight: "bold"}}>R$ 49,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bermuda2.jpg')}
            />

            <Text>Bermuda Adidas</Text>
            <Text>Tamanhos disponíveis: | P | M | G | GG |</Text>
            <Text style={{fontWeight: "bold"}}>R$ 69,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bermuda3.jpg')}
            />

            <Text>Bermuda Colorida</Text>
            <Text>Tamanhos disponíveis: | P | M | G |</Text>
            <Text style={{fontWeight: "bold"}}>R$ 39,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/calca1.jpg')}                   
            />

            <Text>Calça Style</Text>
            <Text>Tamanhos disponíveis: | M | G | GG | XG |</Text>
            <Text style={{fontWeight: "bold"}}>R$ 119,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/calca2.jpg')}
            />

            <Text>Calça Branca</Text>
            <Text>Tamanhos disponíveis: | P | M | G |</Text>
            <Text style={{fontWeight: "bold"}}>R$ 69,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 40}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/calca3.jpg')}
            />

            <Text>Calça Preta</Text>
            <Text>Tamanhos disponíveis: | P | M | G |</Text>
            <Text style={{fontWeight: "bold"}}>R$ 54,90</Text>
        </View>

    </View>
    </ScrollView>
    );
}

export default CalçasApp;