import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { shadowStyle } from '../../../utils/Shadow';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { listFadeDownIn } from '../../../utils/Animation';
let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

function MyNavList() {
  return (
    <MyNavScrollView>
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <Ionicons name={`${iconName}trail-sign-outline`} color={'#4b4b4b'} size={23} />
          <NavText>수업 안내</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <Ionicons name={`${iconName}document-text-outline`} color={'#4b4b4b'} size={23} />
          <NavText>수강권</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <Ionicons name={`${iconName}person-outline`} color={'#4b4b4b'} size={23} />
          <NavText>강사</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <Ionicons name={`${iconName}list-outline`} color={'#4b4b4b'} size={23} />
          <NavText>예약 확인</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <Ionicons name={`${iconName}open-outline`} color={'#4b4b4b'} size={23} />
          <NavText>예약 현황</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <MaterialCommunityIcons name={`text-box-check-outline`} color={'#4b4b4b'} size={23} />
          <NavText>출석 체크</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity>
        <MyNavListView animation={listFadeDownIn}>
          <Ionicons name={`${iconName}build-outline`} color={'#4b4b4b'} size={23} />
          <NavText>이용 문의</NavText>
          <NavIcon name={`${iconName}chevron-forward-sharp`} color={'#4b4b4b'} size={23} />
        </MyNavListView>
      </TouchableOpacity>
      <Divider />
    </MyNavScrollView>
  );
}

export default MyNavList;
const MyNavScrollView = styled.ScrollView`
  width: 100%;
`;
const MyNavListView = Animatable.createAnimatableComponent(styled.View`
  position: relative;
  background-color: #f0f0f0;
  padding: 10px 20px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`);
const NavText = styled.Text`
  color: ${(props) => props.theme.blackColor};
  font-size: 13.5px;
  margin-left: 10px;
`;
const NavIcon = styled(Ionicons)`
  position: absolute;
  right: 20px;
`;
