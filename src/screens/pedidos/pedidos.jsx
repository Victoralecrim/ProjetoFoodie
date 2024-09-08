// Importa os componentes necessários e os dados de outros arquivos
import { FlatList, Image, Text, View } from "react-native"; // Importa componentes de interface do React Native
import { pedidos } from "../../constants/dados.js"; // Importa o array de pedidos de um arquivo de constantes
import Pedido from "../../components/pedido/pedido.jsx"; // Importa o componente Pedido que renderiza cada item da lista
import icons from "../../constants/icons.js"; // Importa os ícones usados no componente
import { styles } from "./pedidos.style.js"; // Importa os estilos específicos para este componente

// Define o componente Pedidos
export default function Pedidos() {
  // Retorna o JSX para renderizar o componente
  return (
    // Componente View externo com o estilo de contêiner
    <View style={styles.container}>
      {/* Componente FlatList para renderizar uma lista de pedidos */}
      <FlatList
        // Dados que serão exibidos na lista
        data={pedidos}
        // Função para extrair uma chave única para cada item de pedido
        keyExtractor={(restaurante) => restaurante.id}
        // Oculta o indicador de rolagem vertical
        showsVerticalScrollIndicator={false}
        // Função para renderizar cada item da lista de pedidos
        renderItem={({ item }) => {
          return (
            // Renderiza o componente Pedido com os detalhes do pedido
            <Pedido
              logotipo={item.logotipo} // Logotipo do restaurante
              nome={item.nome} // Nome do restaurante
              valor={item.vl_total} // Valor total do pedido
              data={item.dt_pedido} // Data do pedido
              status={item.status} // Status do pedido
            />
          );
        }}
        // Estilo aplicado ao contêiner dos itens da lista
        contentContainerStyle={styles.containerList}
        // Função para renderizar quando a lista estiver vazia
        ListEmptyComponent={() => {
          return (
            // Renderiza uma View com uma imagem e uma mensagem de texto
            <View style={styles.empty}>
              <Image source={icons.empty} />{" "}
              {/* Exibe uma imagem indicando que não há favoritos */}
              <Text style={styles.emptyText}>
                Nenhum favorito encontrado
              </Text>{" "}
              {/* Texto para quando não há pedidos */}
            </View>
          );
        }}
      />
    </View>
  );
}
