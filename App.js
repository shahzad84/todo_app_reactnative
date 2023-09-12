import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {React,useState} from 'react';
import { Button } from 'react-native-web';
export default function App() {
  const [name,setName]=useState("shahzad");
  const [person,setPerson]=useState({name:"cool",age:"34"});
  const clickHandle=()=>{
    setName("good");
    setPerson({name:"noob",age:"53"})
  }
  return (
    <View style={styles.container}>
      <Text>hii my name is {name}</Text>
      <Text>this is {person.name} and my age is {person.age} </Text>
      <View>
        <Button title="click" onPress={clickHandle}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
