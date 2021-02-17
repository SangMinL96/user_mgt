import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert, ScrollView, Text, View } from 'react-native';
import TextInput from '../../../component/TextInput';
import ScrollPickers from '../../../component/ScrollPickers';
import { Controller, useForm } from 'react-hook-form';
import { Input, Picker } from '@99xt/first-born';
import { Button, ButtonGroup } from 'react-native-elements';
import {
  emailErr,
  emailPt,
  emailValid,
  lengthErr,
  lengthPt,
  lengthValid,
  pwErr,
  pwPt,
  pwValid,
  ageValid,
  ageErr
} from '../../../utils/Validate';
import { Ionicons } from '@expo/vector-icons';
import SelectInput from '../../../component/SelectInput';
function Signup({ setCurrent }) {
  const { control, handleSubmit, errors, clearErrors } = useForm();
  const [checkState, setCheckState] = useState({ id: false, name: false });
  const [category, setCategory] = useState();
  const [userType, setUserType] = useState(0);
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  /**
   * 회원가입 서브밋 버튼 클릭시 errors 값이 바뀌면 리랜더링하여 에러 검사
   */
  useEffect(() => {
    // react-hook-form 유효성 검사에서 에러 발생시 에러메시지 출력
    if (Object.keys(errors).length >= 1) {
      Alert.alert(
        '회원가입 실패',
        '빈칸 및 형식을 확인해주세요.',
        [{ text: '확인', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
      //   Toast.show({ text1: '빈칸 및 형식을 확인해주세요.', type: 'error' });
      if (!errors.id) {
        // 아이디 중복 체크
        // setCheckState((props) => ({ ...props, id: false }));
      }
      if (!errors.name) {
        // 닉네임 중복 체크
        // setCheckState((props) => ({ ...props, name: false }));
      }
      clearErrors();
    }
  }, [errors, date]);

  /**
   * 회원가입 submit 폼
   * @param {object} data 회원가입 데이터 인풋값
   */
  const onSubmit = async (data) => {
    try {
      console.log(data);
      setCurrent(3);
      //   const rslt = await loginMt({ variables: { param: data } });
      //   const userInfo = rslt.data.user;
      //   if(userInfo){
      //     setLogLoading(false)
      //   }
      //  onLogin(userInfo);
    } catch (err) {}
  };
  const onUserType = (type) => {
    setUserType(type);
  };
  const onChangeText = (ev) => {
    setDate(ev?.replace(/(\d{4})(\d{2})(\d{1})/, '$1-$2-$3'));
  };

  return (
    <>
      <SignupView>
        <ScrollView>
          <ButtonGroup
            buttonStyle={{ width: '100%' }}
            buttons={['강사', '회원']}
            onPress={onUserType}
            selectedIndex={userType}
            selectedButtonStyle={{ backgroundColor: '#585858' }}
            textStyle={{ fontWeight: 'bold' }}
          />
          <InputBox>
            <TextInput
              control={control}
              label={'아이디'}
              name={'id'}
              rule={true}
              valid={lengthValid}
              errMsg={lengthErr}
              pt={lengthPt}
            />
            <InputBtnIcon onPress={() => onInputCheck('name')}>
              <Ionicons
                name={checkState.id === true ? 'checkbox-sharp' : 'checkbox-outline'}
                color={checkState.id === true ? '#66f753' : 'gray'}
                size={25}
              />
            </InputBtnIcon>
          </InputBox>
          <TextInput
            control={control}
            label={'이메일'}
            name={'eml'}
            rule={true}
            valid={emailValid}
            errMsg={emailErr}
            pt={emailPt}
          />
          <TextInput
            control={control}
            label={'비밀번호'}
            name={'pw'}
            valid={pwValid}
            errMsg={pwErr}
            pwType={true}
            rule={true}
            pt={pwPt}
          />
          <TextInput
            control={control}
            label={'비밀번호 확인'}
            name={'pw'}
            valid={pwValid}
            errMsg={pwErr}
            pwType={true}
            rule={true}
            pt={pwPt}
          />
          <TextInput control={control} label={'성함'} name={'nm'} rule={true} />
          {userType === 1 ? (
            <InputBox>
              <Input
                keyboardType="number-pad"
                placeholder={'생년월일'}
                isValid={ageValid}
                errorMessage={ageErr}
                onChangeText={onChangeText}
                onPress={() => setOpen(true)}
                value={date}
              />
              <InputBtnIcon onPress={() => setOpen(true)}>
                <Ionicons name={'today-sharp'} color={'gray'} size={25} />
              </InputBtnIcon>
            </InputBox>
          ) : (
            <>
              <TextInput control={control} label={'업소명'} name={'shop'} rule={true} />
            </>
          )}

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
            onPress={handleSubmit(onSubmit)}
          />
        </ScrollView>
      </SignupView>
      {open && <ScrollPickers onChange={onChangeText} setOpen={setOpen} />}
    </>
  );
}

export default Signup;

const SignupView = styled.View`
  flex: 1;
  padding: 20px 40px;
  width: 100%;
  margin-top: 3%;
`;

const InputBox = styled.View`
  position: relative;
`;
const TextBox = styled.View`
  flex-direction: row;
`;

const InputBtnIcon = styled.TouchableOpacity`
  position: absolute;
  right: 5%;
  top: 20px;
`;
