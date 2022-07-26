import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "twrnc";
import { useDispatch } from "react-redux";
import { deleteNoteAsync } from "../features/noteSlice";
import { useNavigation } from "@react-navigation/native";

export default function DeleteNoteButton({ localId }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = () => {
    dispatch(deleteNoteAsync(localId));
    navigation.navigate("Home");
  };

  return (
    <TouchableOpacity onPress={handleDelete} activeOpacity={0.5} style={tailwind`absolute right-6 bottom-6 w-12 h-12 rounded-full border-2 border-slate-50/80 justify-center items-center bg-red-700/80`}>
      <AntDesign style={tailwind`text-white/80`} name="delete" size={24} color="white" />
    </TouchableOpacity>
  );
}
