import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"

export default function App() {
  const [valorDolar, setValorDolar] = useState(null);
  const [valorReal, setValorReal] = useState(null);
  const [textoBotao, setTextoBotao] = useState("Converter");
  const [mensagem, setMensagem] = useState("Digite o valor em dólares");
  
  const TAXA_CONVERSAO = 5.7; // 1 dólar = 5.7 reais

  function calcularConversao() {
    return (valorDolar * TAXA_CONVERSAO).toFixed(2);
  }

  function validarConversao() {
    if (valorDolar != null) {
      Keyboard.dismiss();
      setValorReal(calcularConversao());
      setTextoBotao("Converter Novamente");
      setMensagem(`US$ ${valorDolar} equivalem a:`);
      return;
    }
    setValorReal(null);
    setTextoBotao("Converter");
    setMensagem("Digite o valor em dólares");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>Conversor Dólar-Real</Text>
      </View>
      <View style={styles.conteudo}>
      <Text style={styles.subTitulo}>Cotação: US$ 1 = R$ 5.70</Text>
      
      <View>
        <Text style={styles.rotulo}>VALOR EM DÓLARES</Text>
        <TextInput
          style={styles.entrada}
          onChangeText={setValorDolar}
          value={valorDolar ?? ''}
          placeholder='Ex. 100.00'
          keyboardType='numeric'
        />
      </View>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => validarConversao()}
      > 
        <Ionicons name={"cash-outline"} size={24} color="#fff" />
        <Text style={styles.textoBotao}>{textoBotao}</Text>
      </TouchableOpacity>
      
      <View style={styles.resultadoContainer}>
        <Text style={styles.textoResultado}>{mensagem}</Text>
        <Text style={styles.valorResultado}>R$ {valorReal}</Text>
      </View>

      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tituloContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#A020F0',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  tituloTexto: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  conteudo: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#fff'
  },
  subTitulo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#A020F0',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  rotulo: {
    color: '#000',
    fontSize: 18,
  },
  entrada: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#A020F0',
    borderWidth: 3,
    borderRadius: 18,
    marginVertical: 5
  },
  botao: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A020F0',
    borderRadius: 100,
    marginTop: 18,
    marginBottom: 10
  },
  textoBotao: {
    color: '#ffff',
    fontSize: 20,
    marginLeft: 5
  },
  resultadoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textoResultado: {
    fontSize: 18,
    color: "#A020F0",
    fontWeight: 'bold'
  },
  valorResultado: {
    fontSize: 48,
    color: "#A020F0",
    fontWeight: 'bold'
  }
});