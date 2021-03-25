/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  let product = 1;
  let total = 0;
  let numArray = n.toString().split('');
  for (let i = 0; i < numArray.length; i++) {
    let singleNum = Number(numArray[i]);
    product *= singleNum;
    total += singleNum
  }
  return product - total;
}