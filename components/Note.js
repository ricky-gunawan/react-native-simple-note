import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "twrnc";

export default function Note({ localId, title, content }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Note", { localId, title, content })} activeOpacity={1}>
      <View style={{ ...tailwind`m-2 w-36 h-[165px] rounded-md overflow-hidden shadow-md bg-white` }}>
        <View style={tailwind`px-1 h-6 bg-yellow-500`}>
          <Text numberOfLines={1} style={tailwind`text-blue-500 px-2 font-semibold my-auto`}>
            {title}
          </Text>
        </View>
        <View style={tailwind`p-1`}>
          <Text numberOfLines={8}>{content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
