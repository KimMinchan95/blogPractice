const number = document.querySelector('#number');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

increase.onclick = () => {
  number.innerHTML++;
}

decrease.onclick = () => {
  number.innerHTML--;
}