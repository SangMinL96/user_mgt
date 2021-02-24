import React, { useEffect } from 'react';
import {  Text, View } from 'react-native';
import styled from "styled-components/native"
import MyNavList from './MyNavList';
import MyProfile from './MyProfile';
function MyIndex(){
 
 return (
   <Screen>
     <MyProfile/>
     <MyNavList/>
   </Screen>
  );
}

export default MyIndex;
const Screen = styled.View`
 flex: 1;
 align-items: center;
`;
