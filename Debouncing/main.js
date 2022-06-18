const clickBtn = () => {
  console.log('30만원 입금')
};

const debounce = (func, ms) => {
  let timeout;

  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func();
    }, ms);
  }
};

document.querySelector('#btn').addEventListener('click', debounce(clickBtn, 500));