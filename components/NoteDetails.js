import { View, Text, ScrollView } from "react-native";
import tailwind from "twrnc";

export default function NoteDetails({ title, content }) {
  return (
    <View style={tailwind`self-stretch`}>
      <View style={tailwind`px-1 h-6 border-b bg-yellow-500`}>
        <Text numberOfLines={1} style={tailwind`text-blue-500 text-center my-auto`}>
          {title}
        </Text>
      </View>
      <ScrollView style={tailwind`p-1`}>
        <Text>{content}</Text>
      </ScrollView>
    </View>
  );
}
