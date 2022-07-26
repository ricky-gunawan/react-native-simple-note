import { Formik } from "formik";
import { View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "twrnc";
import { useDispatch } from "react-redux";
import { addNoteAsync } from "../features/noteSlice";

export default function FormModal({ setModalVisible }) {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, resetForm) => {
    if (values.title && values.content) {
      const newNote = { ...values, localId: Date.now().toString() };
      dispatch(addNoteAsync(newNote));
      resetForm();
      setModalVisible(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tailwind`flex-1 justify-center bg-white/60 items-center`}>
        <View style={tailwind`bg-slate-200 p-4 w-[70] h-[76] rounded-md`}>
          <Formik initialValues={{ title: "", content: "" }} onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={tailwind`flex-1`}>
                <TextInput style={tailwind`bg-white h-[10] rounded-md mb-2 px-2`} onChangeText={handleChange("title")} onBlur={handleBlur("title")} value={values.title} />
                <TextInput style={{ ...tailwind`bg-white h-[46] rounded-md mb-2 p-2`, textAlignVertical: "top" }} multiline onChangeText={handleChange("content")} onBlur={handleBlur("content")} value={values.content} />
                <Button onPress={handleSubmit} title="Submit" color={"red"} />
              </View>
            )}
          </Formik>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={{ ...tailwind`absolute right-0 top-0`, transform: [{ translateX: 8 }, { translateY: -8 }] }}>
            <AntDesign name="closecircle" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
