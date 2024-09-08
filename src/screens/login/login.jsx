// Importa os componentes necessários do React Native
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js"; // Importa os estilos específicos para este componente
import Header from "../../components/header/header.jsx"; // Importa o componente de cabeçalho
import TextBox from "../../components/textbox/textbox.jsx"; // Importa o componente de caixa de texto para entradas de usuário
import Button from "../../components/button/button.jsx"; // Importa o componente de botão
import { useState } from "react"; // Importa o hook useState para gerenciar o estado do componente

// Define o componente Login
function Login(props) {
  // Define os estados para armazenar o email e a senha do usuário
  const [email, setEmail] = useState(""); // Estado para o campo de email
  const [senha, setSenha] = useState(""); // Estado para o campo de senha

  // Função para processar o login quando o botão é pressionado
  function ProcessarLogin() {
    console.log(email, senha); // Exibe o email e a senha no console (apenas para fins de teste)
  }

  // Retorna o JSX para renderizar o componente
  return (
    // Componente View principal com o estilo do contêiner
    <View style={styles.container}>
      {/* Componente Header que exibe o texto do email como cabeçalho */}
      <Header texto={email} />

      {/* Grupo de campos do formulário de login */}
      <View style={styles.formGroup}>
        {/* Campo de entrada de e-mail */}
        <View style={styles.form}>
          <TextBox
            label="E-mail" // Rótulo do campo de texto
            onChangeText={(texto) => setEmail(texto)} // Função para atualizar o estado do email
            value={email} // Valor do campo de texto vinculado ao estado
          />
        </View>

        {/* Campo de entrada de senha */}
        <View style={styles.form}>
          <TextBox
            label="Senha" // Rótulo do campo de texto
            isPassword={true} // Indica que este campo é uma senha (oculta o texto digitado)
            onChangeText={(texto) => setSenha(texto)} // Função para atualizar o estado da senha
            value={senha} // Valor do campo de texto vinculado ao estado
          />
        </View>

        {/* Botão para acionar o login */}
        <View style={styles.form}>
          <Button texto="Acessar" onPress={ProcessarLogin} />
          {/* Botão que chama a função ProcessarLogin ao ser pressionado */}
        </View>
      </View>

      {/* Rodapé com opção de navegação para a tela de registro */}
      <View style={styles.footer}>
        {/* TouchableOpacity permite que o texto seja clicável para navegação */}
        <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
          <Text style={styles.footerText}>Criar minha conta.</Text>
          {/* Texto para criar uma nova conta */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Exporta o componente Login como padrão
export default Login;
