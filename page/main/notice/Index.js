import React, { useEffect } from 'react';
import {  Text, View } from 'react-native';
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons";
function NoticeIndex({navigation}){
 
 return (
   <Screen>
      <Text>노티스</Text>
   </Screen>
  );
}

export default NoticeIndex;
const Screen = styled.View`
 flex: 1;
 justify-content: space-evenly;
 align-items: center;

`;
