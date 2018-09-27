// 1. Adds three numbers, checks if the sum is divisble by three, returns true if so, false if not.
function sumDivBy3 (num1, num2, num3) {
  var sum = num1 + num2 + num3;

  if (sum % 3 == 0) {
    return true;
  }
  else {
    return false;
  }
}

// 2. Compares the sums of two arrays and returns the array with the larger sum.
function compareSums (array1, array2) {
  var sum1 = 0;
  var sum2 = 0;

  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }

  for (let z = 0; z < array2.length; z++) {
    sum2 += array2[z];
  }

  if (sum1 > sum2) {
    return array1;
  }
  else {
    return array2;
  }
}

// 3. From 1 - 100, log "Rick" if div. by 3, "Roll" if div. by 5, "RickRoll" if div. by both, and the number if none.
function rickRoll () {
  for (let y = 0; y <= 100; y++) {
    if ((y % 5 == 0) && (y % 3 == 0)) {
      console.log("RickRoll");
    }
    else if (y % 3 == 0) {
      console.log("Rick");
    }
    else if (y % 5 == 0) {
      console.log("Roll");
    }
    else {
      console.log(y);
    }
  }
}

// 4. Return the highest number in an array.
function highestNum (array) {
  var highNum = array[0];

  for (let z = 1; z < array.length; z++) {
    if (array[z] > highNum) {
      highNum = array[z];
    }
  }

  return highNum;
}
