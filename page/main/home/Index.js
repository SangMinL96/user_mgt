import React, { useEffect } from 'react';
import {  Text, View } from 'react-native';
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons";
function HomeIndex({navigation}){
 
 return (
   <Screen>
      <Text>홈</Text>
   </Screen>
  );
}

export default HomeIndex;
const Screen = styled.View`
 flex: 1;

 align-items: center;

`;
