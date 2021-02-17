import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Text } from 'react-native';

const Timer = ({ setClear,setCount }) => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          Alert.alert(
            '휴대폰 인증',
            '인증시간이 끝났습니다. 다시 시도해주세요.',
            [{ text: '확인', onPress: () =>{
                setCount(false)
                setClear(true);
            } }],
            { cancelable: false }
          );
         
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  return (
    <Text style={{fontSize:15,fontWeight:"500",color:"rgb(58, 58, 58)"}}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
};

export default Timer;
