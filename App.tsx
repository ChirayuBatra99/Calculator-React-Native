import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import MainScreen from './views/mainScreen';
import LoadScreen from './views/loadScreen';

export default function App() {

  const [isLoaded, setIsLoaded]= useState(false);
  setTimeout(()=>{
    setIsLoaded(true);},
    2000)

  return (
    <View>
      {isLoaded? <MainScreen/>: <LoadScreen/> }
    </View>
  )
}

const styles = StyleSheet.create({})