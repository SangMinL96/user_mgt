import React, { useRef, useState } from 'react';
import { PermissionsAndroid, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import ViewPhoto from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
function Start() {
  const [value, setValue] = useState('3814');

  const captureRef = useRef();

  const getPhotoUri = async () => {
    const uri = await captureRef.current.capture();
    return uri;
  };

  const hasAndroidPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    console.log(status);
    if (status === 'granted') {
      return 'OK';
    } else {
      console.log('오 오! 사용자가 권한을 부여하지 않았습니다.');
    }
  };

  const onSave = async () => {
    // if (Platform.OS === 'android' && !()) {
    //  console.log("없다")
    //   return;
    // }
    const status = await hasAndroidPermission();
    if (status === 'OK') {
      const uri = await getPhotoUri();
      console.log(uri);
      const result = await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert(
        '매장 코드',
        '매장 코드 이미지가 저장되었습니다.',
        [{ text: '확인', onPress: () => console.log('이미지 저장') }],
        { cancelable: false }
      );
    }
  };

  return (
    <StartView>
      <ViewPhoto ref={captureRef} options={{ format: 'jpg', quality: 0.9 }}>
        <PhothView>
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
        </PhothView>
      </ViewPhoto>
      <TouchableOpacity  onPress={onSave}>
        <Ionicons style={{ marginTop: 20 }} name={'camera-outline'} color={'gray'} size={30} />
      </TouchableOpacity>
      <Button
        titleStyle={{ fontWeight: 'bold' }}
        buttonStyle={{
          backgroundColor: '#585858',
          borderColor: '#dadada',
          borderWidth: 1.5,
          height: 50,
          borderRadius: 10
        }}
        containerStyle={{ width: '85%', marginTop: '5%' }}
        title="MGT 시작하기"
       
      />
    </StartView>
  );
}

export default Start;

const StartView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.normalColor};
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  margin-top: 25%;
`;
const PhothView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.normalColor};
`;

const StartLogo = Animatable.createAnimatableComponent(styled.Image``);

const StartText = Animatable.createAnimatableComponent(styled.Text`
  font-size: 17px;
  color: #242424;
  font-weight: bold;
`);

const CodeBox = styled.View`
  margin-top: 10%;
  width: 73%;
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
