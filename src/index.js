
exports.min = function min (array) {
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    console.log(minValue);
    return 0;
}

exports.max = function max (array) {
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    console.log(maxValue);
    return 0;
}

exports.avg = function avg (array) {
    let avgValue = array[0];
    for (let i = 1; i < array.length; i++) {
        avgValue += array[i];
    }
    console.log(avgValue / array.length);
  return 0;
}


