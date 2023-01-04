const idGen = (num) =>
  [...Array(num)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

module.exports = idGen