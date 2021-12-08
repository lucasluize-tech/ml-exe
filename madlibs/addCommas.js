function addCommas(num) {
  const n = num.toString();
  let decimals = n.split(".")[1];
  let numbers = n.split(".")[0];
  let nList = numbers.split("");

  // base case
  if (nList.length <= 3) {
    return n;
  }
  // keep track of negative numbers
  let isNegative = false;
  if (nList[0] === "-") {
    nList.shift();
    isNegative = true;
  }
  // get number of commas, start comma position and next cooma positions
  const numOfCommas = Math.floor(nList.length / 3);
  let startComma = Math.abs(nList.length) % 3;
  let nextComma;
  startComma === 0
    ? ((nextComma = 3), (nList = nList.reverse()))
    : (nextComma = 0);
  // reverse list if num % 3 = 0

  for (let i = 0; i < numOfCommas; i++) {
    nList.splice(startComma + nextComma, 0, ",");
    startComma === 0 ? (startComma += 4) : (nextComma += 4);
  }

  // un-reverse
  startComma > 3 ? (nList = nList.reverse()) : null;

  isNegative ? nList.unshift("-") : null;
  decimals ? (nList.push("."), nList.push(decimals)) : null;

  return nList.join("");
}

// console.log(addCommas(1234));
// console.log(addCommas(1000000));
// console.log(addCommas(9876543210));
// console.log(addCommas(6));
// console.log(addCommas(-10));
// console.log(addCommas(-5678));
// console.log(addCommas(12345.678));
// console.log(addCommas(-3131592.65));

module.exports = addCommas;
