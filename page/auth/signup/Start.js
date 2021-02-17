import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { captureScreen } from 'react-native-view-shot';
function Start() {
  const [value, setValue] = useState('사랑해요');

  // const targetPixelCount = 1080; // If you want full HD pictures
  // const pixels = targetPixelCount / pixelRatio;
  
  // captureScreen({
  //   format: "jpg",
  //   quality: 0.8
  // }).then(
  //   uri => console.log("Image saved to", uri),
  //   error => console.error("Oops, snapshot failed", error)
  // );
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
