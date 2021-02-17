import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert, Text, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'react-native-elements';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';
import Timer from '../../../component/Timer';

function Phone({ setCurrent }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
  const { handleSubmit, errors, clearErrors } = useForm();
  const [clear, setClear] = useState(false);
  const [count, setCount] = useState(false);

  useEffect(() => {
    // react-hook-form 유효성 검사에서 에러 발생시 에러메시지 출력
  }, []);

  /**
   * 회원가입 submit 폼
   * @param {object} data 회원가입 데이터 인풋값
   */
  const onSubmit = async (data) => {
    try {
      setCurrent(2);
    } catch (err) {}
  };

  const onAuthCount = async (data) => {
    try {
      setCount(true);
      Alert.alert(
        '휴대폰 인증',
        '3분내 인증번호를 입력해주세요.',
        [{ text: '확인', onPress: () => ref.current.focus() }],
        { cancelable: false }
      );
    } catch (err) {}
  };

  return (
    <PhoneView>
      <InputBox>
        <Input
          autoFocus={true}
          containerStyle={{ width: '100%' }}
          disabledInputStyle={{ background: '#585858' }}
          rightIcon={
            <TouchableOpacity onPress={onAuthCount}>
              <Ionicons name={`paper-plane`} color={'#585858'} size={25} />
            </TouchableOpacity>
          }
          keyboardType="number-pad"
          inputStyle={{ fontWeight: 'bold', color: '#585858' }}
          label="휴대폰 번호"
          labelStyle={{ color: '#585858' }}
        />
      </InputBox>
      {count ? (
        <View>
          <Timer setCount={setCount} setClear={setClear} />
        </View>
      ) : null}
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={4}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
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
    </PhoneView>
  );
}

export default Phone;

const PhoneView = styled.View`
  flex: 1;
  align-items: center;

  padding: 20px 40px;
  width: 92%;
  margin-top: 10%;
`;

const InputBox = styled.View`
  position: relative;
  width: 100%;
  margin-top: 20%;
`;

const styles = StyleSheet.create({
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20, width: '90%' },
  cell: {
    width: 50,
    height: 50,
    borderRadius: 10,
    lineHeight: 45,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center'
  },
  focusCell: {
    borderColor: '#4863ff'
  }
});
