import React, { useEffect, useState } from 'react';
import { createStackNavigator, create } from '@react-navigation/stack';
import { useIsLoggedIn, useLogIn, useLogOut } from '../utils/AuthProvider';
// import { onUserInfo } from '../component/utils';
import LoginIndex from '../page/auth/login/Index';
import SignupIndex from '../page/auth/signup/Index';
import AgreeView from '../page/auth/signup/Agree';
import SignupView from '../page/auth/signup/Signup';
import Tabs from './Tabs';


export default function Stack() {
  const isLogined = useIsLoggedIn();
  // const onLogin = useLogIn();
  // const onLoginOut = useLogOut();

  // useEffect(() => {
  //   onLogihState();

  // }, [onLogihState]);

  //   /**
  //  * 사용자가 로그아웃을 직접하지 않았다면 스토리지에
  //  * 사용가능한 토큰이나 만료된 토큰을 가지고 있으면 로그인 상태 유지
  //  */
  // const onLogihState = async () => {
  //   try {
  //     const userInfo = await onUserInfo()
  //     const cryptoInfo = JSON.parse(userInfo)
  //     if (cryptoInfo?.token) {
  //       onLogin(cryptoInfo);

  //     } else {
  //       onLoginOut();
  //     }
  //   } catch (err) {}
  // };
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      mode="card"
      headerMode="screen"
    >
      {isLogined ? (
        <>
        <Stack.Screen name="Tabs" component={Tabs} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginIndex} />
          <Stack.Screen name="SignUp" component={SignupIndex} />
          <Stack.Screen name="Agree" component={AgreeView} />
          <Stack.Screen name="Signup" component={SignupView} />
        </>
      )}
    </Stack.Navigator>
  );
}
