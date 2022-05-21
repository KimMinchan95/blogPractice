const a = 5;

// 일반적인 switch문
switch (a) {
  case 1:
    console.log('a는 1입니다.');
    break;
  case 2:
    console.log('a는 2입니다.')
    break;
  case 3:
    console.log('a는 3입니다.');
    break;
  default:
    console.log('일치하는 값이 없습니다.')
};


// default를 중간에 작성한 예시
const foo = 5;
switch (foo) {
  default:
    console.log('일치하는 값이 없습니다.')
    break;
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
    // fall-through
  case 1:
    console.log('1');
}
