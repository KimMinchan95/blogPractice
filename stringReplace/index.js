// 문자열 생성
const str = '1, 4, 5, 6에서 짝수를 골뱅이로 바꾸고 싶다.';

// replace()에 넣을 모든 숫자를 찾는 정규 표현식 생성
const findAllNumber = /\d/g;

// 두 번째 인자로 넣을 정규 표현식으로 찾은 숫자 중
// 짝수는 @로 바꾸고, 홀수는 놔둠
const changeEvenNumber = number => {
  // number는 string형식이기 때문에 number형식으로 바꿔준다.
  number = parseInt(number, 10);
  
  // 짝수면 @로 홀수면 그대로 리턴
  return number % 2 === 0  ? '@' : number;
};

const newStr = str.replace(findAllNumber, changeEvenNumber);

console.log(newStr) // '1, @, 5, @에서 짝수를 골뱅이로 바꾸고 싶다.'