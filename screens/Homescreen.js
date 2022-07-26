import { Formik } from "formik";
import { useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback, Modal, Text, TextInput, Button } from "react-native";
import tailwind from "twrnc";
import AddNoteButton from "../components/AddNoteButton";
import FormModal from "../components/FormModal";
import NoteList from "../components/NoteList";
import SearchField from "../components/SearchField";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={tailwind`bg-yellow-300 flex-1 items-center justify-center p-4`}>
        <SearchField />
        <NoteList />
        <AddNoteButton setModalVisible={setModalVisible} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <FormModal setModalVisible={setModalVisible} />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
