import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const getNotesAsync = () => async (dispatch) => {
  try {
    const notesStr = await AsyncStorage.getItem("notes");
    const notes = notesStr ? JSON.parse(notesStr) : [];
    dispatch(setNotes(notes));
  } catch (error) {}
};

export const addNoteAsync = (newNote) => async (dispatch) => {
  try {
    const notesStr = await AsyncStorage.getItem("notes");
    const notes = notesStr ? JSON.parse(notesStr) : [];
    notes.push(newNote);
    const newNotesStr = JSON.stringify(notes);
    await AsyncStorage.setItem("notes", newNotesStr);
    dispatch(setNotes(notes));
  } catch (error) {}
};

export const deleteNoteAsync = (localId) => async (dispatch) => {
  try {
    const notesStr = await AsyncStorage.getItem("notes");
    const notes = notesStr ? JSON.parse(notesStr) : [];
    const newNotes = notes.filter((note) => note.localId !== localId);
    const newNotesStr = JSON.stringify(newNotes);
    await AsyncStorage.setItem("notes", newNotesStr);
    dispatch(setNotes(newNotes));
  } catch (error) {}
};

const initialState = {
  notes: [],
  filteredNotes: [],
};

const noteSlice = createSlice({
  name: "Note",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setFilteredNotes: (state, action) => {
      if (action.payload) {
        state.filteredNotes = state.notes.filter((note) => note.title.toLowerCase().includes(action.payload.toLowerCase()) || note.content.toLowerCase().includes(action.payload.toLowerCase()));
      } else {
        state.filteredNotes = state.notes;
      }
    },
  },
});

export default noteSlice.reducer;

export const { setNotes, setFilteredNotes } = noteSlice.actions;
