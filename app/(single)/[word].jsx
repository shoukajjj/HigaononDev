import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function WordScreen() {
  const { word } = useLocalSearchParams(); // Retrieve the dynamic word

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{word}</Text>
    </View>
  );
}
