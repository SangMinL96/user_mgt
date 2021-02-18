import React, { useRef, useState } from 'react';
import { PermissionsAndroid, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import ViewShot from 'react-native-view-shot';
import MediaLibrary from "expo-media-library"

function Start() {
  const [value, setValue] = useState('3814');

  const captureRef = useRef();

  const getPhotoUri = async () => {
    const uri = await captureRef.current.capture();
    return uri;
  };
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const onSave = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      toast('갤러리 접근 권한이 없어요');
      return;
    }
    const uri = await getPhotoUri();
   const result =  await MediaLibrary.saveToLibraryAsync(uri);
    console.log('🐤result', result);
  };

  return (
    <StartView>
      <StartLogo
        resizeMode="contain"
        source={require('../../../assets/Image/startTitle.png')}
        animation="swing"
        iterationCount="infinite"
      />
      <StartText animation="pulse" iterationCount={3}>
        매장 입장 코드 입니다.
      </StartText>
      <StartText animation="pulse" iterationCount={3}>
        반드시 저장 또는 메모를 해주세요!
      </StartText>
      <ViewShot ref={captureRef} options={{ format: 'jpg', quality: 0.9 }}>
      <CodeBox>
        {value.split('').map((item, index) => (
          <CodeText
            key={index}
            animation={
              index === 0
                ? 'bounceInLeft'
                : index === 1
                ? 'bounceInDown'
                : index === 2
                ? 'bounceInUp'
                : index === 3
                ? 'bounceInRight'
                : null
            }
            duration={1500}
            easing="ease-out"
          >
            <Numtext animation="tada" iterationCount={'infinite'}>
              {item}
            </Numtext>
          </CodeText>
        ))}
      </CodeBox>
      </ViewShot>
      <Button
        titleStyle={{ fontWeight: 'bold' }}
        buttonStyle={{
          backgroundColor: '#585858',
          borderColor: '#dadada',
          borderWidth: 1.5,
          height: 50,
          borderRadius: 10
        }}
        containerStyle={{ width: '80%', marginTop: '10%' }}
        title="MGT 시작하기"
        onPress={onSave}
      />
    </StartView>
  );
}

export default Start;

const StartView = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  margin-top: 25%;
`;

const StartLogo = Animatable.createAnimatableComponent(styled.Image``);

const StartText = Animatable.createAnimatableComponent(styled.Text`
  font-size: 17px;
  color: #242424;
  font-weight: bold;
`);

const CodeBox = styled.View`
  margin-top: 10%;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;
const CodeText = Animatable.createAnimatableComponent(styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(114, 114, 114, 0.76);
  border-radius: 10px;
  width: 50px;
  height: 50px;
`);
const Numtext = Animatable.createAnimatableComponent(styled.Text`
  font-size: 20px;
  font-weight: bold;
`);
