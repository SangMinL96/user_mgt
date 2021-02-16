export const emailValid = (text) => {
    const regex = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/
    return regex.test(text);
  }
export const emailPt = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/
export const emailErr = "이메일 형식이 잘못 되었습니다.";



export const pwValid = (text) => {
    const regex = /(?=.*\d{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
    return regex.test(text);
  }
export const pwPt = /(?=.*\d{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
export const pwErr = "한글, 영문 각 1회 혼용하여 8자 이상 입력해주세요.";



export const lengthValid = (text) => {
    const regex = /^.{7,32}$/
    return regex.test(text);
  }
export const lengthPt = /^.{7,32}$/
export const lengthErr = "7자 이상 입력해주세요."


export const hpValid = (text)=>{
    const regex = /^\d{3}\d{3,4}\d{4}$/
    return regex.test(text); 
}
export const hpPt = /^\d{3}\d{3,4}\d{4}$/
export const hpErr = "잘못된 번호 입니다. 예)01000000000"

export const ageValid = (text)=>{
  const regex = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
  return regex.test(text); 
}
export const agePt = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
export const ageErr = "잘못된 생년월일 입니다. 예)1996-12-06"