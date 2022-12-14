import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import tailwind from "twrnc";
export default function AddNoteButton({ setModalVisible }) {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.5} style={tailwind`absolute right-6 top-3 w-12 h-12 rounded-full border-2 border-slate-50 justify-center items-center bg-red-500`}>
      <AntDesign name="addfile" size={24} color="white" />
    </TouchableOpacity>
  );
}
