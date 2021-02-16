import React from 'react';
import { Image, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
function Start() {
  return (
    <StartView>
      <IconView>
        <StartLogo
          resizeMode="contain"
          source={require('../../../assets/Image/startLeft.png')}
          animation="swing"
          iterationCount="infinite"
        />
        <StartLogo
          resizeMode="contain"
          source={require('../../../assets/Image/startRight.png')}
          animation="swing"
          iterationCount="infinite"
        />
      </IconView>
      <StyledImage
        resizeMode="contain"
        source={require('../../../assets/Image/mainLogo.png')}
        // animation="pulse"
        // easing="ease-out"
        // iterationCount="infinite"
      />
      <Image resizeMode="contain" source={require('../../../assets/Image/contentGif.gif')} />
      <Button
        titleStyle={{ fontWeight: 'bold' }}
        buttonStyle={{
          backgroundColor: '#e84393',
          borderColor: '#dadada',
          borderWidth: 1.5,
          height: 50,
          borderRadius: 10
        }}
        containerStyle={{ width: '80%', marginTop: '10%' }}
        title="패피 시작하기"
        
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
  margin-top: 10%;
`;

const IconView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: -5%;
`;
const StyledImage = Animatable.createAnimatableComponent(styled.Image`
  width: 50%;
  border-radius: 15px;
`);
const StartLogo = Animatable.createAnimatableComponent(styled.Image``);
