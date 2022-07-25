import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "twrnc";

export default function DeleteNoteButton({ id }) {
  return (
    <TouchableOpacity onPress={() => console.log(`delete: ${id}`)} activeOpacity={0.5} style={tailwind`absolute right-6 bottom-6 w-12 h-12 rounded-full justify-center items-center bg-red-500/40`}>
      <AntDesign style={tailwind`text-black/80`} name="delete" size={24} color="black" />
    </TouchableOpacity>
  );
}
