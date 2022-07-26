import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import tailwind from "twrnc";
import { setFilteredNotes } from "../features/noteSlice";

export default function SearchField() {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setFilteredNotes(value));
  };

  return (
    <View style={tailwind`self-stretch`}>
      <TextInput onChangeText={handleChange} placeholder="Search" style={tailwind`bg-white ml-3 mr-20 h-[10] rounded-md mt-4 mb-2 px-2 shadow-sm`} />
    </View>
  );
}
