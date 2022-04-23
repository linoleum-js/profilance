
const sleep = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  })
};

export default sleep;
