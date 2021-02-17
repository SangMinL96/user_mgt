import { HeaderBackButton } from '@react-navigation/stack';
import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import StepIndicator from 'react-native-step-indicator';
import Agree from './Agree';
import Signup from './Signup';
import Start from './Start';
import { statusHeight } from '../../../utils/StatusHeight';
import Phone from './Phone';
function SignupIndex({ navigation }) {
  const [current, setCurrent] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <>
          <RoomHeaderView style={{marginTop:statusHeight}}>
            <HeaderBackButton
              {...props}
              onPress={(ev) => {
                if (current === 0) {
                  navigation.navigate('Login');
                } else {
                  setCurrent((props) => props - 1);
                }
              }}
            />
          </RoomHeaderView>
          <StepIndicator stepCount={4} customStyles={customStyles} currentPosition={current} labels={labels} />
        </>
      )
    });
  }, [navigation, current]);

  const labels = ['약관동의','휴대폰인증', '회원가입', '시작'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#585858',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#585858',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#585858',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#585858',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#585858',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#585858'
  };
  return (
    <Screen>
      {current === 3 ? (
        <Agree setCurrent={setCurrent} />
      ) : current ===1 ?(
          <Phone setCurrent={setCurrent} />
      ) : current === 2 ? (
        <Signup setCurrent={setCurrent} />
      ) : current === 0 ? (
        <Start setCurrent={setCurrent} />
      ) : null}
    </Screen>
  );
}

export default SignupIndex;
const Screen = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const RoomHeaderView = styled.View`
  flex-direction: row;
  z-index: 999;
  margin-bottom: 20px;
  align-items: center;
`;
