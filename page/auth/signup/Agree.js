import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Button, CheckBox } from 'react-native-elements';
import Card from '../../../component/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import AgreeModal from '../../../utils/AgreeModal';
import * as Animatable from 'react-native-animatable';
import { fadeDownIn } from '../../../utils/Animation';

function Agree({ setCurrent }) {
  const [check, setCheck] = useState({ all: false, check1: false, check2: false, check3: false });
  const [open, setOpen] = useState(false);
  /**
   * 모두동의 체크박스 클릭 이벤트
   */
  const onAllCheck = () => {
    if (check.all === false) {
      setCheck((props) => ({ ...props, all: true, check1: true, check2: true, check3: true }));
    } else {
      setCheck((props) => ({ ...props, all: false, check1: false, check2: false, check3: false }));
    }
  };

  const onNext = () => {
    if (check.check1 === true && check.check2 === true) {
      setCurrent(1);
    } else {
      Alert.alert(
        '약관동의',
        '필수 약관 동의해 주세요.',
        [{ text: '확인', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  };
  
  return (
    <AgreeView>
      <Title animation={fadeDownIn} easing={"ease-in-out"}  >
        가입약관동의
      </Title>
      <CheckBox
        containerStyle={{ marginTop: 10, borderColor: '#f2f2f2', width: '35%', padding: 0, backgroundColor: '#f3f3f3' }}
        title="모두동의"
        checkedColor={'#585858'}
        onPress={onAllCheck}
        checked={check.all}
      />
      <Card>
        <CardTextView>
          <CheckBox
            containerStyle={{
              borderColor: '#f8f8f8',
              padding: 0,
              backgroundColor: '#f8f8f8'
            }}
            title="패션피플 약관 동의(필수)"
            textStyle={{ fontSize: 10 }}
            checkedColor={'#585858'}
            onPress={() => setCheck((props) => ({ ...props, all: false, check1: !props.check1 }))}
            checked={check.check1}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <CardText>내용 보기</CardText>
          </TouchableOpacity>
        </CardTextView>
        <CardTextView>
          <CheckBox
            containerStyle={{
              borderColor: '#f8f8f8',
              padding: 0,
              backgroundColor: '#f8f8f8'
            }}
            title="개인정보수집 및 이용에 대한 안내(필수)"
            textStyle={{ fontSize: 10 }}
            checkedColor={'#585858'}
            onPress={() => setCheck((props) => ({ ...props, all: false, check2: !props.check2 }))}
            checked={check.check2}
          />
          <TouchableOpacity>
            <CardText>내용 보기</CardText>
          </TouchableOpacity>
        </CardTextView>
        <CardTextView>
          <CheckBox
            containerStyle={{
              borderColor: '#f8f8f8',
              padding: 0,
              backgroundColor: '#f8f8f8'
            }}
            title="이벤트/마케팅 수신동의(선택)"
            textStyle={{ fontSize: 10 }}
            checkedColor={'#585858'}
            onPress={() => setCheck((props) => ({ ...props, all: false, check3: !props.check3 }))}
            checked={check.check3}
          />
          <TouchableOpacity>
            <CardText>내용 보기</CardText>
          </TouchableOpacity>
        </CardTextView>
      </Card>
      <Button
        titleStyle={{ fontWeight: 'bold' }}
        buttonStyle={{
          backgroundColor: '#585858',
          borderColor: '#dadada',
          borderWidth: 1.5,
          height: 50,
          borderRadius: 10
        }}
        containerStyle={{ width: '100%', marginTop: '10%' }}
        title="다음"
        onPress={onNext}
      />
      {open ? <AgreeModal open={open} setOpen={setOpen} /> : null}
    </AgreeView>
  );
}

export default Agree;

const AgreeView = styled.View`
  flex: 1;
  padding: 20px 40px;
  width: 100%;
  margin-top: 20%;
`;

const Title = Animatable.createAnimatableComponent(styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => props.theme.titleColor};
`);

const CardTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CardText = styled.Text`
  font-size: 10px;
`;
