import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';
import styled from 'styled-components';
import Dimenstions from '../utils/Dimenstions';
import * as Animatable from 'react-native-animatable';
import { fadeDownIn } from '../utils/Animation';
import { TouchableOpacity } from 'react-native';

const months = Array.from({ length: 12 }).map((_, index) => (index + 1).toString());
const days = Array.from({ length: 31 }).map((_, index) => (index + 1).toString());
const years = () => {
  let yearArray = [];
  for (let i = 2021; i >= 1950; i--) {
    yearArray.push(i);
  }
  return yearArray;
};

function ScrollPickers({setOpen,onChange}) {
  const { width, height } = Dimenstions;
  const [year,setYear] =useState()
  const [month,setMonth] =useState()
  const [day,setDay]=useState()

  const onUse = ()=>{
    setOpen(false)
    onChange(`${year||"1996"}-${month||"07"}-${day||"16"}`)
  }
  return (
    <BgView animation="fadeInUpBig" duration={700} >
      <PickerView>
        <CountBox>
          <PickerText>년도</PickerText>
          <ScrollPicker
            dataSource={years()}
            selectedIndex={25}
            itemHeight={40}
            wrapperHeight={140}
            wrapperColor={'#f7f7f7'}
            highlightColor={'#000000'}
            renderItem={(data, index, isSelected) => {
              return (
                <View>
                  <YearText isSelected={isSelected}>{data}</YearText>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              console.log(data)
              setYear(data);
            }}
          />
        </CountBox>

        <CountBox>
          <PickerText>월</PickerText>
          <ScrollPicker
            dataSource={months}
            selectedIndex={6}
            itemHeight={40}
            wrapperHeight={140}
            wrapperColor={'#f7f7f7'}
            highlightColor={'#000000'}
            renderItem={(data, index, isSelected) => {
              return (
                <View>
                  <YearText isSelected={isSelected}>{data}</YearText>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              setMonth(data <10 ? `0${data}`:data);
            }}
          />
        </CountBox>

        <CountBox>
          <PickerText>일</PickerText>
          <ScrollPicker
            dataSource={days}
            selectedIndex={15}
            itemHeight={40}
            wrapperHeight={140}
            wrapperColor={'#f7f7f7'}
            highlightColor={'#000000'}
            renderItem={(data, index, isSelected) => {
              return (
                <View>
                  <YearText isSelected={isSelected}>{data}</YearText>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              setDay(data <10 ? `0${data}`:data);
            }}
          />
        </CountBox>
        <View>
          <TouchableOpacity onPress={onUse}>
            <ConfirmBtn>사용</ConfirmBtn>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setOpen(false)}>
            <ConfirmBtn >취소</ConfirmBtn>
          </TouchableOpacity>
        </View>
      </PickerView>
    </BgView>
  );
}

export default ScrollPickers;

const BgView = Animatable.createAnimatableComponent(styled.View`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  flex: 1;
  top: 0;
  background-color: rgba(107, 107, 107, 0.055);
`);
const PickerText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  padding-bottom: 15px;
  font-weight: bold;
`;
const CountBox = styled.View`
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const PickerView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 230px;
  z-index: 9999;
  position: absolute;
  background-color: #f7f7f7;
  bottom: 0;
`;
const YearText = styled.Text`
  width: 100%;
  padding: 0px 10px;

  text-align: center;
  font-size: ${(props) => (props.isSelected ? '22px' : '16px')};
  color: ${(props) => (props.isSelected ? '#3b3b3b' : 'gray')};
  font-weight: ${(props) => (props.isSelected ? 'bold' : '500')};
`;
const ConfirmBtn = styled.Text`
  margin-top:10px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 14px;
`;
