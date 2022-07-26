import { Formik } from "formik";
import { View, TextInput, Button } from "react-native";
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
    <View style={tailwind`flex-1 justify-center bg-slate-200/80 items-center`}>
      <View style={tailwind`bg-slate-200 p-4 w-[70] h-[76] rounded-md`}>
        <Formik initialValues={{ title: "", content: "" }} onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={tailwind`flex-1`}>
              <TextInput style={tailwind`bg-slate-100 h-[10] rounded-md mb-2 px-2`} onChangeText={handleChange("title")} onBlur={handleBlur("title")} value={values.title} />
              <TextInput style={{ ...tailwind`bg-slate-100 h-[46] rounded-md mb-2 p-2`, textAlignVertical: "top" }} multiline onChangeText={handleChange("content")} onBlur={handleBlur("content")} value={values.content} />
              <Button onPress={handleSubmit} title="Submit" color={"red"} />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
