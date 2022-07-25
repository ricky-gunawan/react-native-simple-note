import { View, TextInput } from "react-native";
import tailwind from "twrnc";
export default function SearchField() {
  return (
    <View style={tailwind`self-stretch`}>
      <TextInput placeholder="Search" style={tailwind`bg-slate-100 mx-8 h-[10] rounded-md mb-2 px-2`} />
    </View>
  );
}
