import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';

const ClassModal = ({ modal, setModal, classData }) => {
  let startTime = moment(classData.start).format('LT').toString();
  let duration = classData.duration.split(':');
  let seconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2]);
  let endTime = moment(classData.start).add(seconds, 'seconds').format('LT').toString();
  return (
    <>
      <View>
        <Overlay style={{ width: '80%' }} isVisible={modal} onBackdropPress={() => setModal(false)}>
          {false ? (
            <ActivityIndicator size="large" color="#0059ff" />
          ) : (
            <>
              <ClassView>
                <DtlTitle>{classData.note}</DtlTitle>
                <TimeDate>
                  {`${moment(classData.start).format('MM')}월 ${moment(classData.start).format('DD')}일`}
                </TimeDate>
                <TimeText>
                  {startTime} ~ {endTime}
                </TimeText>

                <Avatar
                  resizeMode="cover"
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/-nj5Kk7ehuYP4VhSU5WGjijaQfNuVfF6G8lzdK0UeE5Araf0AIz-lyDBsgyAP9ATCDzZp39Pgr9CfkaQrXRYvJfgD4Fc5HFwRYl03j9jOInPXNhu'
                  }}
                />
                <Teacher>{classData.teacher}</Teacher>
                <BtnView>
                  <TouchableOpacity style={{ width: '50%' }}>
                    <LeftBtn>수강 신청</LeftBtn>
                  </TouchableOpacity>
                  <BtnLine />
                  <TouchableOpacity style={{ width: '50%' }} onPress={() => setModal(false)}>
                    <RightBtn>취소</RightBtn>
                  </TouchableOpacity>
                </BtnView>
              </ClassView>
              <UserCount>5/20명</UserCount>
            </>
          )}
        </Overlay>
      </View>
    </>
  );
};

export default ClassModal;

const ClassView = styled.View`
  width: 250px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const DtlTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${(props) => props.theme.blackColor};
`;
const TimeDate = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: gray;
`;
const TimeText = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: gray;
`;
const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 10px;
  border-radius: 20px;
`;
const Teacher = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.blackColor};
  font-weight: 700;
`;
const UserCount = styled.Text`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.blackColor};
  top: 15px;
  right: 10px;
`;
const BtnView = styled.View`
  width: 100%;
  height: 35px;
  margin-top: 20px;
  border-top-width: 1px;
  border-top-color: gray;
  flex-direction: row;
`;
const BtnLine = styled.Text`
  border-left-width: 1px;
  border-left-color: #a7a7a7;
  width: 1px;
`;
const LeftBtn = styled.Text`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  width: 100%;
  height: 43px;
  color: ${(props) => props.theme.blackColor};
`;
const RightBtn = styled.Text`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  width: 100%;
  height: 43px;
  color: ${(props) => props.theme.blackColor};
`;
