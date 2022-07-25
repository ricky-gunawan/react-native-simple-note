import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import tailwind from "twrnc";
import AddNoteButton from "../components/AddNoteButton";
import NoteList from "../components/NoteList";
import SearchField from "../components/SearchField";

export default function HomeScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={tailwind`bg-yellow-300 flex-1 items-center justify-center p-4`}>
        <SearchField />
        <NoteList />
        <AddNoteButton />
      </View>
    </TouchableWithoutFeedback>
  );
}
