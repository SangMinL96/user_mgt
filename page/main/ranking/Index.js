import React, { useEffect } from 'react';
import {  Text, View } from 'react-native';
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons";
function RankingIndex({navigation}){
 
 return (
   <Screen>
      <Text>랭킹</Text>
   </Screen>
  );
}

export default RankingIndex;
const Screen = styled.View`
 flex: 1;
 justify-content: space-evenly;
 align-items: center;

`;
