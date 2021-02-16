import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';

function AgreeModal({ open, setOpen }) {
  return (
    <Overlay isVisible={open} onBackdropPress={() => setOpen(false)}>
      <ScrollView style={{ width: '80%', maxHeight: 300 }}>
        <Text>
          제 1 장 총칙 제 1 조 (목 적) 
          이 약관은 '제일전기' (이하 '회사'라 합니다.)가 제공하는 서비스의 이용조건 및
          절차, 기타 필요한 사항을 규정함을 목적으로 합니다. 제 2 조 (약관의 효력 및 변경) 1. 이 약관의 내용은 서비스
          화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다. 2. 회사는 합리적인 사유가 발생될
          경우에는 이 약관을 변경할 수 있으며, 약관이 변경되는 경우에는 최소한 7일전에 1항과 같은 방법으로 공시합니다.
          3. 본 사이트 안에 새로운 서비스가 개설될 경우 별도의 명시된 설명이 없는 한 이 약관에 따라 제공됩니다. 제 3 조
          (약관 외 준칙) 이 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법 및 기타 관련법령의 규정에
          따릅니다. 제 4 조 (정의) 1. 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① 회 원 : 회사와 서비스
          이용계약을 체결한 개인이나 법인 또는 법인에 준하는 단체 ② 운영자 : 서비스의 전반적인 관리와 원활한 운영을
          위하여 회사가 선정한 사람 ③ 아이디(ID): 회원식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는
          문자와 숫자의 조합 ④ 비밀번호 : 회원의 정보 보호를 위해 회원 자신이 설정한 문자와 숫자의 조합 ⑤ 서비스 중지:
          정상이용 중 회사가 정한 일정한 요건에 따라 일정 기간 동안 서비스의 제공을 중지하는 것 ⑥ 해지 : 회사 또는
          회원이 서비스 개통 후 이용계약을 해약하는 것 2. 본 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을
          제외하고는 관계법령 및 서비스별 안내에서 정하는 바에 의합니다. 제 2장 이용계약 체결 제 5 조 (서비스의 구분) 1.
          회사가 회원에게 제공하는 서비스는 기본서비스와 부가서비스 등으로 구분합니다. 2. 서비스의 종류와 내용 등은
          회사가 공지나 서비스 이용안내에서 별도로 정하는 바에 의합니다. 제 6 조 (이용계약의 성립)
        </Text>
      </ScrollView>
    </Overlay>
  );
}

export default AgreeModal;
