import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking, ScrollView,Button } from 'react-native';

const BlusasApp = ({navigation}) => {
    return(      
        <ScrollView>
        <View style={{marginTop: 10}}>

            <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Blusas</Text>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/blusa1.jpg')}
                />
                
                <Text>Camisa de Manga Comprida</Text>
                <Text>Tamanhos disponíveis: | G | GG | XG |</Text>
                <Text style={{fontWeight: "bold"}}>R$ 99,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/blusa2.jpg')}
                />

                <Text>Camisa YIKES</Text>
                <Text>Tamanhos disponíveis: | P | M | G | GG |</Text>
                <Text style={{fontWeight: "bold"}}>R$ 49,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/blusa3.jpg')}
                />

                <Text>Camisa Social</Text>
                <Text>Tamanhos disponíveis: | 2 | 3 | 4 | 5 |</Text>
                <Text style={{fontWeight: "bold"}}>R$ 119,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/blusa4.jpg')}                   
                />

                <Text>Camisa NYC</Text>
                <Text>Tamanhos disponíveis: | M | G | GG | XG |</Text>
                <Text style={{fontWeight: "bold"}}>R$ 49,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/blusa5.jpg')}
                />

                <Text>Camisa Lisa</Text>
                <Text>Tamanhos disponíveis: | P | M | G |</Text>
                <Text style={{fontWeight: "bold"}}>R$ 29,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 40}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/blusa6.jpg')}
                />

                <Text>Camisa Manga Curta Tropical</Text>
                <Text>Tamanhos disponíveis: | 2 | 3 | 5 |</Text>
                <Text style={{fontWeight: "bold"}}>R$ 74,90</Text>
            </View>
            <Button 
        title="Voltar"
        onPress={() => navigation.goBack()}
    />
        </View>
        </ScrollView>
    );
}

export default BlusasApp;

