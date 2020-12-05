import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TenisApp = ({navigation}) => {
    return(
        <ScrollView>
        <View style={{marginTop: 10}}>

            <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Blusas</Text>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/tenis1.jpg')}
                />
                
                <Text>Tenis Polo</Text>
                <Text>Tamanhos disponíveis: 37 a 42</Text>
                <Text style={{fontWeight: "bold"}}>R$ 129,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/tenis2.jpg')}
                />

                <Text>Tenis Nike Alto</Text>
                <Text>Tamanhos disponíveis: 37 a 42</Text>
                <Text style={{fontWeight: "bold"}}>R$ 159,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/tenis3.jpg')}
                />

                <Text>Tenis Atsuma </Text>
                <Text>Tamanhos disponíveis: 37 a 42</Text>
                <Text style={{fontWeight: "bold"}}>R$ 209,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/tenis4.jpg')}                   
                />

                <Text>Tenis Nike Preto</Text>
                <Text>Tamanhos disponíveis:37 a 42</Text>
                <Text style={{fontWeight: "bold"}}>R$ 179,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/tenis5.jpg')}
                />

                <Text>Tenis Air Max Nike</Text>
                <Text>Tamanhos disponíveis: 37 a 42</Text>
                <Text style={{fontWeight: "bold"}}>R$ 329,90</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 40}}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={require('../imagens/tenis6.jpg')}
                />

                <Text>Tenis Fluorescente Verde</Text>
                <Text>Tamanhos disponíveis: 37 a 42</Text>
                <Text style={{fontWeight: "bold"}}>R$ 404,90</Text>
            </View>
            <Button 
        title="Voltar"
        onPress={() => navigation.goBack()}
    />
        </View>
        </ScrollView>
    );
}

export default TenisApp;