const tt = (num) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`depth${num}`, new Date());
      num += 1;
      if (num > 3) throw new Error('Already 3-depth!!');
      return res(num);
    }, num * 1000);
  });
};

tt(1).then(tt).then(tt).catch(console.log);
console.log('START!', new Date());
