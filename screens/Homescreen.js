import { View, Text, Button } from "react-native";
import tw from "twrnc";

export default function Homescreen({ navigation }) {
  return (
    <View style={tw`bg-red-500 flex-1 items-center justify-center`}>
      <Text>This is Homescreen</Text>
      <Button title="Go to Note" onPress={() => navigation.navigate("Note")} />
    </View>
  );
}
