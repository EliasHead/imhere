import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from './styles'

export default function Home() {
  const participants = [
    {id: 1, name: "Werbster"}, 
    {id: 2, name: "Thiago"}, 
    {id: 3, name: "Isabelle"}, 
    {id: 4, name: "Elias"},
    {id: 5, name: "Werbster"}, 
    {id: 6, name: "Thiago"}, 
    {id: 7, name: "Isabelle"}, 
    {id: 8, name: "Elias"},
    {id: 9, name: "Werbster"}, 
    {id: 10, name: "Thiago"}, 
    {id: 11, name: "Isabelle"}, 
    {id: 12, name: "Elias"},
  ]

  function handleParticipanteAdd() {
    if(participants.some(participant => participant.name === "Elias")) {
      return Alert.alert('participantes existe', "paticipante já existe na lista!")
    }

    console.log("você adicionou um participante")
  }

  function handleParticipanteRemove(name: string) {
    Alert.alert("remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("deletado")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Aula React Native
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 5 de fevereiro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipanteAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity> 
      </View>

      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant
              key={item.id}
              name={item.name}
              onRemove={() => handleParticipanteRemove(item.name)}
            />
        )}
        showsVerticalScrollIndicator={false}
        // keyExtractor={item => item.name}
      />
    </View>
  )
}