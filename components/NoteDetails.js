import { View, Text, ScrollView } from "react-native";
import tailwind from "twrnc";

export default function NoteDetails({ title, content }) {
  return (
    <View style={tailwind`self-stretch`}>
      <View style={tailwind`border-b-2 border-yellow-500`}>
        <Text numberOfLines={1} style={tailwind`text-blue-500 px-4 my-1 text-lg font-semibold`}>
          {title}
        </Text>
      </View>
      <ScrollView style={tailwind`p-1`}>
        <Text>{content}</Text>
      </ScrollView>
    </View>
  );
}
