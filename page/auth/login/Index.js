import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from "styled-components/native"
import Login from './Login';
import { Ionicons } from "@expo/vector-icons";
function LoginIndex({navigation}){
  useEffect(() => {
    navigation.setOptions({
      header:()=>null
    })
}, [navigation]);
 return (
   <Screen>
      <Login/>
   </Screen>
  );
}

export default LoginIndex;
const Screen = styled.View`
 flex: 1;
 justify-content: space-evenly;
 align-items: center;
background-color:white;

`;
