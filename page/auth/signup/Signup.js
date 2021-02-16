import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Alert, Text, View } from 'react-native';
import TextInput from '../../../component/TextInput';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
import {
  emailErr,
  emailPt,
  emailValid,
  lengthErr,
  lengthPt,
  lengthValid,
  pwErr,
  pwPt,
  pwValid
} from '../../../utils/Validate';
function Signup({ setCurrent }) {
  const { control, handleSubmit, setValue, errors, clearErrors } = useForm();


   /**
   * 회원가입 서브밋 버튼 클릭시 errors 값이 바뀌면 리랜더링하여 에러 검사
   */
  useEffect(() => {
    // react-hook-form 유효성 검사에서 에러 발생시 에러메시지 출력
    if (Object.keys(errors).length >= 1) {
        Alert.alert(
            "회원가입 실패",
            "빈칸 및 형식을 확인해주세요.",
            [
              { text: "확인", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false })
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
  
  }, [errors]);
  console.log(errors)

    /**
   * 회원가입 submit 폼
   * @param {object} data 회원가입 데이터 인풋값
   */
  const onSubmit = async (data) => {
    try {
      console.log(data);
      setCurrent(2);
      //   const rslt = await loginMt({ variables: { param: data } });
      //   const userInfo = rslt.data.user;
      //   if(userInfo){
      //     setLogLoading(false)
      //   }
      //  onLogin(userInfo);
    } catch (err) {}
  };
  return (
    <SignupView>
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
        <InputBtn onPress={() => onInputCheck('name')}>
          <InputText>중복 확인</InputText>
        </InputBtn>
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
      <InputBox>
        <TextInput control={control} label={'닉네임'} name={'nm'} rule={true} />
        <InputBtn onPress={() => onInputCheck('name')}>
          <InputText>중복 확인</InputText>
        </InputBtn>
      </InputBox>
      <InputBox>
        <TextInput control={control} label={'휴대폰 번호'} name={'hp'} rule={true} />
        <InputBtn onPress={() => onInputCheck('name')}>
          <InputText>인증</InputText>
        </InputBtn>
      </InputBox>
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
    </SignupView>
  );
}

export default Signup;

const SignupView = styled.View`
  flex: 1;
  padding: 20px 40px;
  width: 100%;
  margin-top: 10%;
`;

const InputBox = styled.View`
  position: relative;
`;

const InputBtn = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 3%;
  top: 22px;
  width: 42px;
  background-color: #585858;
  height: 20px;
  border-radius: 10px;
`;
const InputText = styled.Text`
  font-size: 7px;
  font-weight: 500;
  color: white;
`;
