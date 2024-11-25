import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { obj } from "../../data";

export default function WordScreen() {
  const { word } = useLocalSearchParams();
  const Obj = obj.find(item => item.word === word);

  if (!word || !Obj) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: 'red' }}>Word not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{word}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.prn}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.phonetic}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.definition}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.transF}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.transE}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.transB}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.exH}</Text>
      <Text style={{ fontSize: 18 }}>{Obj.ex}</Text>

    </View>
  );
}
