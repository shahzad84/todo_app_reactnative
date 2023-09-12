import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { React, useState } from "react";
import { TextInput } from "react-native-web";
export default function App() {
  const [people, setPeople] = useState([
    { name: "shahzad", key: "1" },
    { name: "cool", key: "2" },
    { name: "noob", key: "3" },
    { name: "hoii", key: "4" },
    { name: "metome", key: "5" },
    { name: "lool", key: "6" },
    { name: "sh", key: "7" },
    { name: "to", key: "8" },
  ]);
  const pressHandler=(key)=>{
    console.log(key);  
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.key!=key);
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(item=>(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
