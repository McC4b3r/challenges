/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let currAlt = 0;
  let altitudes = [];
  gain.forEach((currentGain, i) => {
    altitudes.push(currAlt);
    currAlt += currentGain;
    if (i === gain.length - 1) {
      altitudes.push(currAlt);
    }
  })
  return Math.max(...altitudes);
};