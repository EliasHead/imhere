import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
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
    console.log("você adicionou um participante")
  }

  function handleParticipanteRemove(name: string) {
    console.log(`usuario ${name} removido`)
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

      <ScrollView showsHorizontalScrollIndicator={false}>
        {
          participants.map((participant) => (
            <Participant
              key={participant.id}
              name={participant.name}
              onRemove={() => handleParticipanteRemove("elias")}
            />
          ))
        }
      </ScrollView>
      
    </View>
  )
}