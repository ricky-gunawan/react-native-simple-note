import { View } from "react-native";
import tailwind from "twrnc";
import DeleteNoteButton from "../components/DeleteNoteButton";
import NoteDetails from "../components/NoteDetails";

export default function NoteScreen({ route }) {
  const { localId, title, content } = route.params;

  return (
    <View style={tailwind`bg-yellow-300 flex-1 items-center p-4`}>
      <NoteDetails title={title} content={content} />
      <DeleteNoteButton localId={localId} />
    </View>
  );
}
