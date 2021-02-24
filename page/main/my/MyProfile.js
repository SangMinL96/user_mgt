import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { shadowStyle } from '../../../utils/Shadow';
import { TouchableOpacity, Platform } from 'react-native';
let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
function MyProfile() {
  return (
    <Screen>
      <MyProfileView>
        <AvatarView>
          <TouchableOpacity style={{ width: '100%', height: '100%' }}>
            <Avatar
              resizeMode="cover"
              source={{
                uri:
                  'https://blog.kakaocdn.net/dn/tNgjN/btqEJB13ptZ/NkfYqyyZQWJubmkJhmnr5K/img.jpg'
              }}
            />
          </TouchableOpacity>
          <MyName style={shadowStyle.feedShadow}>이상민</MyName>
        </AvatarView>
        <MyListScrollView style={shadowStyle.feedShadow}>
          <Text>sadfsad</Text>
        </MyListScrollView>
      </MyProfileView>
      <PhoneView>
        <Ionicons name={`${iconName}call`} color={'rgba(73, 73, 73, 0.425)'} size={16} />
        <MyDetailText>010-3794-3814</MyDetailText>
      </PhoneView>
      <EmlView>
        <Ionicons name={`${iconName}mail`} color={'rgba(73, 73, 73, 0.425)'} size={16} />
        <MyDetailText>hwon3794@gmail.com</MyDetailText>
      </EmlView>
    </Screen>
  );
}

export default MyProfile;
const Screen = styled.View`
margin-top: 10px;
  width: 100%;
  height: 35%;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.6px;
  border-bottom-color: ${props=>props.theme.darkGreyColor};
`;
const MyProfileView = styled.View`
  padding: 10px 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const AvatarView = styled.View`
  position: relative;
  width: 100px;
  height: 130px;
  align-items: center;
  margin-right: 20px;
`;
const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const MyName = styled.Text`
  position: absolute;
  text-align: center;
  font-size: 13px;
  width: 70px;
  bottom: -10px;
  padding: 3px 8px;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: ${(props) => props.theme.blackColor};
`;

const MyListScrollView = styled.ScrollView`
  background-color: #f0f0f0;
  height: 130px;
  border-radius: 10px;
  padding: 10px;
`;

const PhoneView = styled.View`
  width: 100%;
  margin-top:15px;
  margin-left: 40px;
  flex-direction: row;
  align-items: center;
`;
const EmlView = styled.View`
  width: 100%;
  margin-bottom: 15px;
  margin-left: 40px;
  flex-direction: row;
  align-items: center;
`;
const MyDetailText =styled.Text`
margin-left: 10px;
font-size: 13px;
color:${props=>props.theme.darkGreyColor};
`
