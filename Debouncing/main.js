const clickBtn = () => {
  console.log('30λ§μ μκΈ')
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