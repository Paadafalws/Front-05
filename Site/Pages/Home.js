import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login'); // Substitua 'OutraTela' pelo nome da tela para a qual deseja navegar.
  }

  return (
    <View style={styles.container}>
      <Text> Bem vindo ao site do servidor </Text>
      <Text> MIyugo Plays</Text>
      <Button title="Navegar para Outra Tela" onPress={navigateToLogin} />
      <StatusBar style="auto" />
      <Text style={styles.text}>Bem-vindo ao Meu App!</Text>
    </View>
  );
}
