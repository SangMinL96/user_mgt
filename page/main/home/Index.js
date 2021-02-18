import React, { useEffect } from 'react';
import {  Text, View } from 'react-native';
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons";
import Calender from './Calender';
function HomeIndex({navigation}){
 
 return (
   <Screen>
      <Calender/>
   </Screen>
  );
}

export default HomeIndex;
const Screen = styled.View`
 flex: 1;
 align-items: center;

`;
