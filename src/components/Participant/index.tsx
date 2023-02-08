import { View, Text, TouchableOpacity } from "react-native";

import { styles } from '../../components/Participant/styles'

type  PartipantType = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: PartipantType) {
  return (
    <View style={styles.container} >
      <Text style={styles.name} >
        {name}
      </Text>
      <TouchableOpacity
          onPress={onRemove}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity> 
    </View>
  )
}