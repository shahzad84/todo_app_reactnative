import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {React,useState} from 'react';
import { Button } from 'react-native-web';
export default function App() {
  const [name,setName]=useState("shahzad");
  const clickHandle=()=>{
    setName("good");
  }
  return (
    <View style={styles.container}>
      <Text>hii my name is {name}</Text>
      <view>
        <Button title="click" onPress={clickHandle}/>
      </view>
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
