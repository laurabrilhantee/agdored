import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import FormInput from "../components/FormInput";
import AppButton from "../components/AppButton";
import EventCard from "../components/EventCard";

export default function CadastroListagemScreen() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");
  const [lista, setLista] = useState([]);

  function salvar() {
    if (titulo === "" || descricao === "") {
      setErro("Preencha todos os campos");
      return;
    }

    const novoItem = {
      id: Date.now().toString(),
      titulo,
      descricao,
    };

    setLista([...lista, novoItem]);

    // limpa campos
    setTitulo("");
    setDescricao("");
    setErro("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Cadastro de Eventos</Text>

      <FormInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        error={erro && titulo === "" ? erro : ""}
      />

      <FormInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        error={erro && descricao === "" ? erro : ""}
      />

      <AppButton title="Salvar" onPress={salvar} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            titulo={item.titulo}
            descricao={item.descricao}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tituloTela: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});