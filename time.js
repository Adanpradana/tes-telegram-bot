const time = () => {
  const timeNow = new Date().toLocaleTimeString();
  return (text = `
jangan lupa minum air ya sekarang,
sekarang jam ${timeNow}
semangat !!`);
};

const result = time();
console.log(result);
