import { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getNotesAsync } from "../features/noteSlice";
import Note from "./Note";

export default function NoteList() {
  const { notes, filteredNotes } = useSelector((store) => store.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  return <FlatList data={filteredNotes ? filteredNotes : notes} numColumns={2} renderItem={({ item }) => <Note {...item} />} keyExtractor={(item) => item.localId} />;
}
