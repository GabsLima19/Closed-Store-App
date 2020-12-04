import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const BonesApp = () => {
    return(
        <ScrollView>
        <View style={{marginTop: 10}}>

        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Blusas</Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bone0.jpg')}
            />
            
            <Text>Bone da Rota 040</Text>
            <Text>Tamanhos disponíveis: Unico</Text>
            <Text style={{fontWeight: "bold"}}>R$ 59,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bone1.jpg')}
            />

            <Text>Bone da Nike</Text>
            <Text>Tamanhos disponíveis: Unico</Text>
            <Text style={{fontWeight: "bold"}}>R$ 89,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bone2.jpg')}
            />

            <Text>Bone da CAT</Text>
            <Text>Tamanhos disponíveis: Unico</Text>
            <Text style={{fontWeight: "bold"}}>R$ 49,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bone3.jpg')}                   
            />

            <Text>Bone dos EUA</Text>
            <Text>Tamanhos disponíveis: Unico</Text>
            <Text style={{fontWeight: "bold"}}>R$ 29,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bone4.jpeg')}
            />

            <Text>Bone Preto</Text>
            <Text>Tamanhos disponíveis: Unico</Text>
            <Text style={{fontWeight: "bold"}}>R$ 29,90</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 40}}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../imagens/bone5.jpeg')}
            />

            <Text>Bone Preto e Branco</Text>
            <Text>Tamanhos disponíveis: Unico</Text>
            <Text style={{fontWeight: "bold"}}>R$ 74,90</Text>
        </View>

    </View>
    </ScrollView>
    );
}

export default BonesApp;