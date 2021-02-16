import React from 'react';
import styled from "styled-components/native"
function Card({children,width,height}){
 return (
   <CardView style={{width,height}}>
      {children}
   </CardView>
  );
}

export default Card;

const CardView =styled.View`
 background-color: #f8f8f8;
 padding: 12px;
 border-radius: 8px;
 border:1px solid #e4e4e4;
`