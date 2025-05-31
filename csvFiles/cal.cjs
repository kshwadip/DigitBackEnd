"use strict";

var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const N1Pos = "N1.txt";
const N2Pos = "N2.txt";
const N3Pos = "N3.txt";
const N1Date = "N1Date.txt";
const N2Date = "N2Date.txt";
const N3Date = "N3Date.txt";
let days;
let maxColumns;
function resetN2(n2) {
  return n2 = -1;
}
function calculateColumn(operation, j) {
  let x;
  if (operation == "add") {
    return x = 4 + j + j + j;
  } else if (operation == "minus") {
    return x = maxColumns - 2 - j - j - j;
  }
  return 0;
}
function writeIntegerToFile(filename, value) {
  _fs.default.writeFileSync(filename, value.toString(), "utf8");
}
function readIntegerFromFile(filename) {
  try {
    const data = _fs.default.readFileSync(filename, "utf8");
    const value = parseInt(data, 10);
    return value;
  } catch (err) {
    console.error(`Error reading from file ${filename}:`, err);
    return null;
  }
}
function readCSV(filename) {
  let data = [];
  try {
    const fileContent = _fs.default.readFileSync(filename, "utf8");
    const lines = fileContent.split("\n");
    for (const line of lines) {
      const items = line.split(",");
      let row = [];
      for (const item of items) {
        try {
          row.push(parseInt(item, 10));
        } catch (error) {
          return [];
        }
      }
      data.push(row);
    }
  } catch (error) {
    return [];
  }
  return data;
}
function addn(n1, n2) {
  let addn = 0;

  // Check ranges for n1 0 to 9
  if (n1 < 10 && n2 > 9 || n1 > 19 && n1 < 30 || n1 > 39 && n1 < 50 || n1 > 59 && n1 < 70 || n1 > 79 && n1 < 90) {
    if (n1 < 10 && (n2 < 20 || n2 > 59 && n2 < 70) || n1 > 19 && n1 < 30 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 39 && n1 < 50 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 59 && n1 < 70 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 79 && n1 < 90 && (n2 < 10 || n2 > 49 && n2 < 60)) {
      addn += 20;
      return addn;
    }
    if (n1 < 10 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 19 && n1 < 30 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 39 && n1 < 50 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 59 && n1 < 70 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 79 && n1 < 90 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70)) {
      addn += 40;
      return addn;
    }
    if (n1 < 10 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 19 && n1 < 30 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 39 && n1 < 50 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 59 && n1 < 70 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70) || n1 > 79 && n1 < 90 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80)) {
      addn += 60;
      return addn;
    }
    if (n1 < 10 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 19 && n1 < 30 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 39 && n1 < 50 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70) || n1 > 59 && n1 < 70 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 79 && n1 < 90 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90)) {
      addn += 80;
      return addn;
    }
  }

  // Check ranges for n1 10 to 19
  if (n1 > 9 && n1 < 20 || n1 > 29 && n1 < 40 || n1 > 49 && n1 < 60 || n1 > 69 && n1 < 80 || n1 > 89 && n1 < 100) {
    if (n1 < 20 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 29 && n1 < 40 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70) || n1 > 49 && n1 < 60 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 69 && n1 < 80 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 89 && n1 < 100 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100)) {
      addn += 90;
      return addn;
    }
    if (n1 < 20 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70) || n1 > 29 && n1 < 40 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 49 && n1 < 60 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 69 && n1 < 80 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 89 && n1 < 100 && (n2 < 10 || n2 > 49 && n2 < 60)) {
      addn += 10;
      return addn;
    }
    if (n1 < 20 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 29 && n1 < 40 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 49 && n1 < 60 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 69 && n1 < 80 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 89 && n1 < 100 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70)) {
      addn += 30;
      return addn;
    }
    if (n1 < 20 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90) || n1 > 29 && n1 < 40 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 49 && n1 < 60 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 69 && n1 < 80 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70) || n1 > 89 && n1 < 100 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80)) {
      addn += 50;
      return addn;
    }
    if (n1 < 20 && (n2 > 39 && n2 < 50 || n2 > 89 && n2 < 100) || n1 > 29 && n1 < 40 && (n2 < 10 || n2 > 49 && n2 < 60) || n1 > 49 && n1 < 60 && (n2 > 9 && n2 < 20 || n2 > 59 && n2 < 70) || n1 > 69 && n1 < 80 && (n2 > 19 && n2 < 30 || n2 > 69 && n2 < 80) || n1 > 89 && n1 < 100 && (n2 > 29 && n2 < 40 || n2 > 79 && n2 < 90)) {
      addn += 70;
      return addn;
    }
  }

  // If no conditions matched, return 0
  return 0;
}
function addx(n1) {
  let x = 0;

  // Handle cases for n1 < 10
  if (n1 < 10) {
    x = 10 - n1; // Calculate difference to reach 10
    return x > 9 ? x % 10 : x; // Return adjusted value if greater than 9
  }

  // Handle cases for n1 being a multiple of 10
  if (n1 % 10 == 0) {
    x = 100 - n1; // Calculate difference to reach 100
    return x; // Return value
  }

  // Handle ranges
  if (n1 >= 10 && n1 < 20) {
    x = 100 - n1 % 10; // Calculate for range 11 to 19
  } else if (n1 >= 20 && n1 < 30) {
    x = 90 - n1 % 10; // Calculate for range 21 to 29
  } else if (n1 >= 30 && n1 < 40) {
    x = 80 - n1 % 10; // Calculate for range 31 to 39
  } else if (n1 >= 40 && n1 < 50) {
    x = 70 - n1 % 10; // Calculate for range 41 to 49
  } else if (n1 >= 50 && n1 < 60) {
    x = 60 - n1 % 10; // Calculate for range 51 to 59
  } else if (n1 >= 60 && n1 < 70) {
    x = 50 - n1 % 10; // Calculate for range 61 to 69
  } else if (n1 >= 70 && n1 < 80) {
    x = 40 - n1 % 10; // Calculate for range 71 to 79
  } else if (n1 >= 80 && n1 < 90) {
    x = 30 - n1 % 10; // Calculate for range 81 to 89
  } else if (n1 >= 90 && n1 < 100) {
    x = 20 - n1 % 10; // Calculate for range 91 to 99
  }

  // Adjust output if x exceeds 9
  return x > 9 ? x % 10 : x;
}
function cn3(x, y) {
  let n1 = x;
  let n2 = y - 1;
  let n3;

  // Reset N2 if value > 99
  if (n2 > 98) {
    n2 = resetN2(n2); // Assuming resetN2 is defined elsewhere
  }
  n2 = n2 + 1; // Adjust n2

  // Calculate n3 based on n1 and n2
  if (n1 >= 0 && n1 < 100 && n2 >= 0 && n2 < 100) {
    // Ensure n1 and n2 are in range
    n3 = n2 + n2 + addx(n1); // Simplified calculation
    n3 = n3 % 100;
    n3 = n3 % 10 + addn(n1, n2);
  }

  // Create and return the array of objects
  let numbers = [{
    name: "Number 1",
    value: n1
  }, {
    name: "Number 2",
    value: n2
  }, {
    name: "Number 3",
    value: n3
  }];
  return numbers;
}
function searchWithConstraints(data, searchValues, columns) {
  let foundIndices = [];
  let searchFromBottom = data.length - 1;
  for (const pair of searchValues) {
    for (let i = searchFromBottom; i >= 0; i--) {
      if (pair.name === "Number 1" && data[i][columns[0]] === pair.value) {
        foundIndices.push(i);
        searchFromBottom = i - 1;
        break;
      } else if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
        foundIndices.push(i);
        searchFromBottom = i - 1;
        break;
      } else if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
        foundIndices.push(i);
        searchFromBottom = i - 1;
        break;
      }
    }
  }
  return foundIndices;
}
function searchWithConstraints100(data, searchValues, columns, turn) {
  let foundIndices = [];
  let searchFromBottom = data.length - 1;
  let N1Position, N2Position, N3Position;
  do {
    for (const pair of searchValues) {
      for (let i = searchFromBottom; i >= 0; i--) {
        if (pair.name === "Number 1" && data[i][columns[0]] === pair.value) {
          N1Position = i;
          searchFromBottom = i - 1;
          break;
        } else if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
          N2Position = i;
          searchFromBottom = i - 1;
          break;
        } else if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
          searchFromBottom = i - 1;
          break;
        }
      }
    }
  } while (false);
  for (let temp = 0; temp < turn; temp++) {
    for (let pair of searchValues) {
      for (let i = N2Position - 1; i >= 0; --i) {
        if (pair.name === "Number 1") {
          break;
        } else if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
          N2Position = i;
          break;
        } else if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
          N3Position = i;
          break;
        }
      }
    }
  }
  foundIndices.push(N1Position);
  foundIndices.push(N2Position);
  foundIndices.push(N3Position);
  return foundIndices;
}
function searchWithConstraintsSkip(numberOfUpWeeks, numberOfDownWeeks, skipWhat, data, searchValues, columns, fixedDate) {
  let foundIndices = [];
  let searchFromBottom = data.length - 1;
  if (fixedDate != 0 && skipWhat != 1 && skipWhat != 2 && skipWhat != 3) {
    for (let pair of searchValues) {
      for (let i = searchFromBottom; i >= 0; --i) {
        if (pair.name === "Number 1" && data[i][columns[0]] === pair.value) {
          foundIndices.push(i);
          writeIntegerToFile(N1Pos, i);
          writeIntegerToFile(N1Date, i);
          searchFromBottom = i - 1;
          break;
        }
        if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
          foundIndices.push(i);
          writeIntegerToFile(N2Pos, i);
          writeIntegerToFile(N2Date, i);
          searchFromBottom = i - 1;
          break;
        }
        if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
          foundIndices.push(i);
          writeIntegerToFile(N3Pos, i);
          writeIntegerToFile(N3Date, i);
          searchFromBottom = i - 1;
          break;
        }
      }
    }
  }
  let temp = skipWhat;
  if (temp === 1 || temp === 2 || temp === 3) {
    foundIndices = [];
    if (temp === 1) {
      let readN1 = readIntegerFromFile(N1Pos);
      for (let pair of searchValues) {
        for (let i = readN1 - 1; i >= 0; --i) {
          if (pair.name === "Number 1" && data[i][columns[0]] === pair.value) {
            foundIndices.push(i);
            writeIntegerToFile(N1Pos, i);
            writeIntegerToFile(N1Date, i);
            readN1 = i - 1;
            break;
          }
          if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
            foundIndices.push(i);
            writeIntegerToFile(N2Pos, i);
            writeIntegerToFile(N2Date, i);
            readN1 = i - 1;
            break;
          }
          if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
            foundIndices.push(i);
            writeIntegerToFile(N3Pos, i);
            writeIntegerToFile(N3Date, i);
            readN1 = i - 1;
            break;
          }
        }
      }
    } else if (temp === 2) {
      let readN1 = readIntegerFromFile(N1Pos);
      let readN2 = readIntegerFromFile(N2Pos);
      for (let pair of searchValues) {
        for (let i = readN2 - 1; i >= 0; --i) {
          if (pair.name === "Number 1") {
            foundIndices.push(readN1);
            break;
          }
          if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
            foundIndices.push(i);
            writeIntegerToFile(N2Pos, i);
            writeIntegerToFile(N2Date, i);
            readN2 = i - 1;
            break;
          }
          if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
            foundIndices.push(i);
            writeIntegerToFile(N3Pos, i);
            writeIntegerToFile(N3Date, i);
            readN2 = i - 1;
            break;
          }
        }
      }
    } else if (temp === 3) {
      let readN1 = readIntegerFromFile(N1Pos);
      let readN2 = readIntegerFromFile(N2Pos);
      let readN3 = readIntegerFromFile(N3Pos);
      for (let pair of searchValues) {
        for (let i = readN3 - 1; i >= 0; --i) {
          if (pair.name === "Number 1") {
            foundIndices.push(readN1);
            break;
          }
          if (pair.name === "Number 2") {
            foundIndices.push(readN2);
            break;
          }
          if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
            foundIndices.push(i);
            writeIntegerToFile(N3Pos, i);
            writeIntegerToFile(N3Date, i);
            readN3 = i - 1;
            break;
          }
        }
      }
    }
    return foundIndices;
  }
  if (fixedDate == 0 && skipWhat != 1 && skipWhat != 2 && skipWhat != 3) {
    let readN1 = readIntegerFromFile(N1Date);
    let readN2 = readIntegerFromFile(N2Date);
    let readN3 = readIntegerFromFile(N3Date);
    let loopValue = readN1;
    for (let pair of searchValues) {
      for (let i = loopValue + 1; i < data.length - 1; i++) {
        if (pair.name === "Number 1" && data[i][columns[0]] === pair.value) {
          foundIndices.push(i);
          writeIntegerToFile(N1Pos, i);
          loopValue = readN2;
          break;
        }
        if (pair.name === "Number 2" && data[i][columns[1]] === pair.value) {
          foundIndices.push(i);
          writeIntegerToFile(N2Pos, i);
          loopValue = readN3;
          break;
        }
        if (pair.name === "Number 3" && data[i][columns[2]] === pair.value) {
          foundIndices.push(i);
          writeIntegerToFile(N3Pos, i);
          break;
        }
      }
    }
  }
  return foundIndices;
}
function searchWithdates(data, searchValues) {
  let foundIndices = []; // Store found values and their row indices
  let searchFromBottom = data.length - 1;
  let day, month, year;
  for (let i = 0; i < 3; i++) {
    day = parseInt(searchValues[i][0]);
    month = parseInt(searchValues[i][1]);
    year = parseInt(searchValues[i][2]);
    for (let row = searchFromBottom; row >= 0; row--) {
      if (data[row][0] === day && data[row][1] === month && data[row][2] === year) {
        foundIndices.push(row);
        searchFromBottom = row - 1;
        break;
      }
    }
  }
  return foundIndices; // Return the found indices
}
function searchWithConstraintsSkipLoop(data, searchValues, columns) {
  let foundIndices = [];
  let searchFromBottom = data.length - 1;
  for (let i = searchFromBottom; i >= 0; i--) {
    if (data[i][columns[0]] == searchValues) {
      foundIndices.push(i);
    }
  }
  return foundIndices;
}
function splitDigits(num) {
  const digits = num.toString().split("").map(Number);
  return digits;
}
function sortArray(arr) {
  return arr.sort((a, b) => {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
  });
}
function arrayExists(arr, subArray) {
  return arr.findIndex(innerArray => innerArray.length === subArray.length && innerArray.every((value, index) => value === subArray[index]));
}
function triPattern(num1, num2) {
  let temp1 = [],
    temp2 = [],
    temp3 = [],
    temp4 = [],
    temp5 = [],
    temp6 = [];
  let arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [],
    arr5 = [],
    arr6 = [];
  temp1[0] = cn3(num1[0], num2[0]);
  temp1[1] = cn3(num1[1], num2[1]);
  temp1[2] = cn3(num1[2], num2[2]);
  for (const pair of temp1) {
    arr1.push(pair[2].value);
  }
  temp2[0] = cn3(num1[0], num2[0]);
  temp2[1] = cn3(num1[1], num2[2]);
  temp2[2] = cn3(num1[2], num2[1]);
  for (const pair of temp2) {
    arr2.push(pair[2].value);
  }
  temp3[0] = cn3(num1[0], num2[1]);
  temp3[1] = cn3(num1[1], num2[0]);
  temp3[2] = cn3(num1[2], num2[2]);
  for (const pair of temp3) {
    arr3.push(pair[2].value);
  }
  temp4[0] = cn3(num1[0], num2[2]);
  temp4[1] = cn3(num1[1], num2[1]);
  temp4[2] = cn3(num1[2], num2[0]);
  for (const pair of temp4) {
    arr4.push(pair[2].value);
  }
  temp5[0] = cn3(num1[0], num2[1]);
  temp5[1] = cn3(num1[1], num2[2]);
  temp5[2] = cn3(num1[2], num2[0]);
  for (const pair of temp5) {
    arr5.push(pair[2].value);
  }
  temp6[0] = cn3(num1[0], num2[2]);
  temp6[1] = cn3(num1[1], num2[0]);
  temp6[2] = cn3(num1[2], num2[1]);
  for (const pair of temp6) {
    arr6.push(pair[2].value);
  }
  arr1 = sortArray(arr1);
  arr2 = sortArray(arr2);
  arr3 = sortArray(arr3);
  arr4 = sortArray(arr4);
  arr5 = sortArray(arr5);
  arr6 = sortArray(arr6);
  return [arr1, arr2, arr3, arr4, arr5, arr6];
  //return [arr1, arr2];
}
function writeAndMergeOccurrences(numbers, filePath = "output.txt") {
  const counts = Array(100).fill(0);
  numbers.forEach(num => {
    if (num >= 0 && num <= 99) {
      counts[num]++;
    }
  });
  if (_fs.default.existsSync(filePath)) {
    const previousData = _fs.default.readFileSync(filePath, "utf8").trim();
    if (previousData.length > 0) {
      const lines = previousData.split("\n").filter(Boolean);
      lines.forEach(line => {
        const match = line.match(/^(\d+)\((\d+)\)$/);
        if (match) {
          const num = parseInt(match[1], 10);
          const count = parseInt(match[2], 10);
          if (!isNaN(num) && num >= 0 && num <= 99) {
            counts[num] += count;
          }
        }
      });
    }
  }
  const output = counts.map((count, number) => count > 0 ? `${number}(${count})` : null).filter(Boolean).join("\n");
  _fs.default.writeFileSync(filePath, output);
}
function fillVectors(numberOfUpWeeks, numberOfDownWeeks, foundIndices, data) {
  let midRow = numberOfUpWeeks;
  let endRow = midRow + numberOfDownWeeks;
  let endRow_2 = endRow - 2;
  let vecN1 = Array.from({
    length: endRow + 1
  }, () => Array(maxColumns).fill(0));
  let vecN2 = Array.from({
    length: endRow + 1
  }, () => Array(maxColumns).fill(0));
  let vecN3 = Array.from({
    length: endRow + 1
  }, () => Array(maxColumns).fill(0));
  let matchedPositions1 = [];
  let matchedPositions2 = [];
  let matchedPositions3 = [];
  let OPPositions1 = [];
  let OPPositions2 = [];
  let OPPositions3 = [];
  let CPPositions1 = [];
  let CPPositions2 = [];
  let CPPositions3 = [];
  let expectedValues = [];
  for (let k = 0; k < foundIndices.length; k++) {
    let row = foundIndices[k];
    if (row >= 5 && row < data.length) {
      let vec = null;
      if (k === 0) {
        vec = vecN1;
      } else if (k === 1) {
        vec = vecN2;
      } else if (k === 2) {
        vec = vecN3;
      }
      if (vec) {
        for (let i = row - midRow; i <= row + numberOfDownWeeks; i++) {
          if (i < data.length) {
            for (let j = 0; j < maxColumns; j++) {
              vec[i - (row - midRow)][j] = data[i][j];
            }
          }
        }
      }
    }
  }

  // Process matching positions for each direction and condition
  for (let i = 0; i <= endRow; i++) {
    for (let j = 0; j < days; j++) {
      if (vecN1[i][calculateColumn("add", j)] === 303) {
        if (vecN3[i][calculateColumn("add", j)] !== 404 && vecN2[i][calculateColumn("add", j)] !== 404) {
          const temp = cn3(vecN3[i][calculateColumn("add", j)], vecN2[i][calculateColumn("add", j)]);
          expectedValues.push({
            first: temp[2].value,
            second: {
              first: i,
              second: calculateColumn("add", j)
            },
            third: "E"
          });
        }
        if (j > 1) {
          /////////////////// RIGHT
          if (vecN3[i][calculateColumn("add", j) - 6] !== 404 && vecN2[i][calculateColumn("add", j) - 3] !== 404) {
            const temp = cn3(vecN3[i][calculateColumn("add", j) - 6], vecN2[i][calculateColumn("add", j) - 3]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "R"
            });
          }
        }
        if (j < 4) {
          /////////////////// LEFT
          if (vecN3[i][calculateColumn("add", j) + 6] !== 404 && vecN2[i][calculateColumn("add", j) + 3] !== 404) {
            const temp = cn3(vecN3[i][calculateColumn("add", j) + 6], vecN2[i][calculateColumn("add", j) + 3]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "L"
            });
          }
        }
        if (i > 1) {
          /////////////////// DOWN
          if (vecN3[i - 2][calculateColumn("add", j)] !== 404 && vecN2[i - 1][calculateColumn("add", j)] !== 404) {
            const temp = cn3(vecN3[i - 2][calculateColumn("add", j)], vecN2[i - 1][calculateColumn("add", j)]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "D"
            });
          }
        }
        if (i < endRow_2) {
          /////////////////// UP
          if (vecN3[i + 2][calculateColumn("add", j)] !== 404 && vecN2[i + 1][calculateColumn("add", j)] !== 404) {
            const temp = cn3(vecN3[i + 2][calculateColumn("add", j)], vecN2[i + 1][calculateColumn("add", j)]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "U"
            });
          }
        }
        if (i > 1 && j > 1) {
          /////////////////// DOWN RIGHT
          if (vecN3[i - 2][calculateColumn("add", j) - 6] !== 404 && vecN2[i - 1][calculateColumn("add", j) - 3] !== 404) {
            const temp = cn3(vecN3[i - 2][calculateColumn("add", j) - 6], vecN2[i - 1][calculateColumn("add", j) - 3]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "DR"
            });
          }
        }
        if (i > 1 && j < 4) {
          /////////////////// DOWN LEFT
          if (vecN3[i - 2][calculateColumn("add", j) + 6] !== 404 && vecN2[i - 1][calculateColumn("add", j) + 3] !== 404) {
            const temp = cn3(vecN3[i - 2][calculateColumn("add", j) + 6], vecN2[i - 1][calculateColumn("add", j) + 3]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "DL"
            });
          }
        }
        if (i < endRow_2 && j > 1) {
          /////////////////// UP RIGHT
          if (vecN3[i + 2][calculateColumn("add", j) - 6] !== 404 && vecN2[i + 1][calculateColumn("add", j) - 3] !== 404) {
            const temp = cn3(vecN3[i + 2][calculateColumn("add", j) - 6], vecN2[i + 1][calculateColumn("add", j) - 3]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "UR"
            });
          }
        }
        if (i < endRow_2 && j < 4) {
          /////////////////// UP LEFT
          if (vecN3[i + 2][calculateColumn("add", j) + 6] !== 404 && vecN2[i + 1][calculateColumn("add", j) + 3] !== 404) {
            const temp = cn3(vecN3[i + 2][calculateColumn("add", j) + 6], vecN2[i + 1][calculateColumn("add", j) + 3]);
            expectedValues.push({
              first: temp[2].value,
              second: {
                first: i,
                second: calculateColumn("add", j)
              },
              third: "UL"
            });
          }
        }
      }

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // Exact match
      if (vecN3[i][calculateColumn("add", j)] !== 404 && vecN2[i][calculateColumn("add", j)] !== 404) {
        const temp = cn3(vecN3[i][calculateColumn("add", j)], vecN2[i][calculateColumn("add", j)]);
        for (const pair of temp) {
          if (pair.name === "Number 3" && vecN1[i][calculateColumn("add", j)] === pair.value) {
            matchedPositions1.push({
              first: 0,
              second: {
                first: i,
                second: calculateColumn("add", j)
              }
            });
            matchedPositions2.push({
              first: 0,
              second: {
                first: i,
                second: calculateColumn("add", j)
              }
            });
            matchedPositions3.push({
              first: 0,
              second: {
                first: i,
                second: calculateColumn("add", j)
              }
            });
            const open1 = splitDigits(vecN1[i][calculateColumn("add", j) - 1]);
            const open2 = splitDigits(vecN2[i][calculateColumn("add", j) - 1]);
            const open3 = splitDigits(vecN3[i][calculateColumn("add", j) - 1]);
            let tempO = triPattern(open3, open2);
            if (arrayExists(tempO, open1) != -1) {
              OPPositions1.push({
                first: 0,
                second: {
                  first: i,
                  second: calculateColumn("add", j) - 1
                }
              });
              OPPositions2.push({
                first: 0,
                second: {
                  first: i,
                  second: calculateColumn("add", j) - 1
                }
              });
              OPPositions3.push({
                first: 0,
                second: {
                  first: i,
                  second: calculateColumn("add", j) - 1
                }
              });
            }
            const close1 = splitDigits(vecN1[i][calculateColumn("add", j) + 1]);
            const close2 = splitDigits(vecN2[i][calculateColumn("add", j) + 1]);
            const close3 = splitDigits(vecN3[i][calculateColumn("add", j) + 1]);
            let tempC = triPattern(close3, close2);
            if (arrayExists(tempC, close1) != -1) {
              CPPositions1.push({
                first: 0,
                second: {
                  first: i,
                  second: calculateColumn("add", j) + 1
                }
              });
              CPPositions2.push({
                first: 0,
                second: {
                  first: i,
                  second: calculateColumn("add", j) + 1
                }
              });
              CPPositions3.push({
                first: 0,
                second: {
                  first: i,
                  second: calculateColumn("add", j) + 1
                }
              });
            }
          }
        }
      }

      // Towards right
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow; k++) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k][calculateColumn("add", l) + 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k][calculateColumn("add", l) + 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k][calculateColumn("add", l) + 6] === pair.value) {
                  matchedPositions1.push({
                    first: 1,
                    second: {
                      first: k,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions2.push({
                    first: 1,
                    second: {
                      first: k,
                      second: calculateColumn("add", l) + 3
                    }
                  });
                  matchedPositions3.push({
                    first: 1,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k][calculateColumn("add", l) + 6 - 1]);
                  const open2 = splitDigits(vecN2[k][calculateColumn("add", l) + 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 1,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 1,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 1,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k][calculateColumn("add", l) + 6 + 1]);
                  const close2 = splitDigits(vecN2[k][calculateColumn("add", l) + 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 1,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 1,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 1,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards left
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow; k++) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k][calculateColumn("minus", l) - 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k][calculateColumn("minus", l) - 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k][calculateColumn("minus", l) - 6] === pair.value) {
                  matchedPositions1.push({
                    first: 2,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions2.push({
                    first: 2,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l) - 3
                    }
                  });
                  matchedPositions3.push({
                    first: 2,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k][calculateColumn("minus", l) - 6 - 1]);
                  const open2 = splitDigits(vecN2[k][calculateColumn("minus", l) - 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 2,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 2,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 2,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k][calculateColumn("minus", l) - 6 + 1]);
                  const close2 = splitDigits(vecN2[k][calculateColumn("minus", l) - 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 2,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 2,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 2,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2; k++) {
          for (let l = 0; l < days; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k + 1][calculateColumn("add", l)] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k + 1][calculateColumn("add", l)]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 2][calculateColumn("add", l)] === pair.value) {
                  matchedPositions1.push({
                    first: 3,
                    second: {
                      first: k + 2,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions2.push({
                    first: 3,
                    second: {
                      first: k + 1,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions3.push({
                    first: 3,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 2][calculateColumn("add", l) - 1]);
                  const open2 = splitDigits(vecN2[k + 1][calculateColumn("add", l) - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 3,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions2.push({
                      first: 3,
                      second: {
                        first: k + 1,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions3.push({
                      first: 3,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 2][calculateColumn("add", l) + 1]);
                  const close2 = splitDigits(vecN2[k + 1][calculateColumn("add", l) + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 3,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions2.push({
                      first: 3,
                      second: {
                        first: k + 1,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions3.push({
                      first: 3,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 1; k--) {
          for (let l = 0; l < days; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k - 1][calculateColumn("add", l)] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k - 1][calculateColumn("add", l)]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 2][calculateColumn("add", l)] === pair.value) {
                  matchedPositions1.push({
                    first: 4,
                    second: {
                      first: k - 2,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions2.push({
                    first: 4,
                    second: {
                      first: k - 1,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions3.push({
                    first: 4,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 2][calculateColumn("add", l) - 1]);
                  const open2 = splitDigits(vecN2[k - 1][calculateColumn("add", l) - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 4,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions2.push({
                      first: 4,
                      second: {
                        first: k - 1,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions3.push({
                      first: 4,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 2][calculateColumn("add", l) + 1]);
                  const close2 = splitDigits(vecN2[k - 1][calculateColumn("add", l) + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 4,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions2.push({
                      first: 4,
                      second: {
                        first: k - 1,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions3.push({
                      first: 4,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down right
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2; k++) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k + 1][calculateColumn("add", l) + 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k + 1][calculateColumn("add", l) + 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 2][calculateColumn("add", l) + 6] === pair.value) {
                  matchedPositions1.push({
                    first: 5,
                    second: {
                      first: k + 2,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions2.push({
                    first: 5,
                    second: {
                      first: k + 1,
                      second: calculateColumn("add", l) + 3
                    }
                  });
                  matchedPositions3.push({
                    first: 5,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 2][calculateColumn("add", l) + 6 - 1]);
                  const open2 = splitDigits(vecN2[k + 1][calculateColumn("add", l) + 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 5,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 5,
                      second: {
                        first: k + 1,
                        second: calculateColumn("add", l) + 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 5,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 2][calculateColumn("add", l) + 6 + 1]);
                  const close2 = splitDigits(vecN2[k + 1][calculateColumn("add", l) + 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 5,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 5,
                      second: {
                        first: k + 1,
                        second: calculateColumn("add", l) + 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 5,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down left
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2; k++) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k + 1][calculateColumn("minus", l) - 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k + 1][calculateColumn("minus", l) - 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 2][calculateColumn("minus", l) - 6] === pair.value) {
                  matchedPositions1.push({
                    first: 6,
                    second: {
                      first: k + 2,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions2.push({
                    first: 6,
                    second: {
                      first: k + 1,
                      second: calculateColumn("minus", l) - 3
                    }
                  });
                  matchedPositions3.push({
                    first: 6,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 2][calculateColumn("minus", l) - 6 - 1]);
                  const open2 = splitDigits(vecN2[k + 1][calculateColumn("minus", l) - 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 6,
                      second: {
                        first: k + 2,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 6,
                      second: {
                        first: k + 1,
                        second: calculateColumn("minus", l) - 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 6,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 2][calculateColumn("minus", l) - 6 + 1]);
                  const close2 = splitDigits(vecN2[k + 1][calculateColumn("minus", l) - 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 6,
                      second: {
                        first: k + 2,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 6,
                      second: {
                        first: k + 1,
                        second: calculateColumn("minus", l) - 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 6,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up right
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 1; k--) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k - 1][calculateColumn("add", l) + 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k - 1][calculateColumn("add", l) + 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 2][calculateColumn("add", l) + 6] === pair.value) {
                  matchedPositions1.push({
                    first: 7,
                    second: {
                      first: k - 2,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions2.push({
                    first: 7,
                    second: {
                      first: k - 1,
                      second: calculateColumn("add", l) + 3
                    }
                  });
                  matchedPositions3.push({
                    first: 7,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 2][calculateColumn("add", l) + 6 - 1]);
                  const open2 = splitDigits(vecN2[k - 1][calculateColumn("add", l) + 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 7,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 7,
                      second: {
                        first: k - 1,
                        second: calculateColumn("add", l) + 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 7,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 2][calculateColumn("add", l) + 6 + 1]);
                  const close2 = splitDigits(vecN2[k - 1][calculateColumn("add", l) + 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 7,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 7,
                      second: {
                        first: k - 1,
                        second: calculateColumn("add", l) + 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 7,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up left
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 1; k--) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k - 1][calculateColumn("minus", l) - 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k - 1][calculateColumn("minus", l) - 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 2][calculateColumn("minus", l) - 6] === pair.value) {
                  matchedPositions1.push({
                    first: 8,
                    second: {
                      first: k - 2,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions2.push({
                    first: 8,
                    second: {
                      first: k - 1,
                      second: calculateColumn("minus", l) - 3
                    }
                  });
                  matchedPositions3.push({
                    first: 8,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 2][calculateColumn("minus", l) - 6 - 1]);
                  const open2 = splitDigits(vecN2[k - 1][calculateColumn("minus", l) - 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 8,
                      second: {
                        first: k - 2,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 8,
                      second: {
                        first: k - 1,
                        second: calculateColumn("minus", l) - 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 8,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 2][calculateColumn("minus", l) - 6 + 1]);
                  const close2 = splitDigits(vecN2[k - 1][calculateColumn("minus", l) - 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 8,
                      second: {
                        first: k - 2,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 8,
                      second: {
                        first: k - 1,
                        second: calculateColumn("minus", l) - 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 8,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards right with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow; k++) {
          for (let l = 0; l < days - 4; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k][calculateColumn("add", l) + 6] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k][calculateColumn("add", l) + 6]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k][calculateColumn("add", l) + 12] === pair.value) {
                  matchedPositions1.push({
                    first: 9,
                    second: {
                      first: k,
                      second: calculateColumn("add", l) + 12
                    }
                  });
                  matchedPositions2.push({
                    first: 9,
                    second: {
                      first: k,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions3.push({
                    first: 9,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k][calculateColumn("add", l) + 12 - 1]);
                  const open2 = splitDigits(vecN2[k][calculateColumn("add", l) + 6 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 9,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 12 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 9,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 9,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k][calculateColumn("add", l) + 12 + 1]);
                  const close2 = splitDigits(vecN2[k][calculateColumn("add", l) + 6 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 9,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 12 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 9,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 9,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards left with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow; k++) {
          for (let l = 0; l < days - 4; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k][calculateColumn("minus", l) - 6] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k][calculateColumn("minus", l) - 6]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k][calculateColumn("minus", l) - 12] === pair.value) {
                  matchedPositions1.push({
                    first: 10,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l) - 12
                    }
                  });
                  matchedPositions2.push({
                    first: 10,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions3.push({
                    first: 10,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k][calculateColumn("minus", l) - 12 - 1]);
                  const open2 = splitDigits(vecN2[k][calculateColumn("minus", l) - 6 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 10,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 12 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 10,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 10,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k][calculateColumn("minus", l) - 12 + 1]);
                  const close2 = splitDigits(vecN2[k][calculateColumn("minus", l) - 6 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 10,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 12 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 10,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 10,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2 - 2; k++) {
          for (let l = 0; l < days; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k + 2][calculateColumn("add", l)] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k + 2][calculateColumn("add", l)]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 4][calculateColumn("add", l)] === pair.value) {
                  matchedPositions1.push({
                    first: 11,
                    second: {
                      first: k + 4,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions2.push({
                    first: 11,
                    second: {
                      first: k + 2,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions3.push({
                    first: 11,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 4][calculateColumn("add", l) - 1]);
                  const open2 = splitDigits(vecN2[k + 2][calculateColumn("add", l) - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 11,
                      second: {
                        first: k + 4,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions2.push({
                      first: 11,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions3.push({
                      first: 11,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 4][calculateColumn("add", l) + 1]);
                  const close2 = splitDigits(vecN2[k + 2][calculateColumn("add", l) + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 11,
                      second: {
                        first: k + 4,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions2.push({
                      first: 11,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions3.push({
                      first: 11,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up with one skip
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 3; k--) {
          for (let l = 0; l < days; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k - 2][calculateColumn("add", l)] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k - 2][calculateColumn("add", l)]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 4][calculateColumn("add", l)] === pair.value) {
                  matchedPositions1.push({
                    first: 12,
                    second: {
                      first: k - 4,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions2.push({
                    first: 12,
                    second: {
                      first: k - 2,
                      second: calculateColumn("add", l)
                    }
                  });
                  matchedPositions3.push({
                    first: 12,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 4][calculateColumn("add", l) - 1]);
                  const open2 = splitDigits(vecN2[k - 2][calculateColumn("add", l) - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 12,
                      second: {
                        first: k - 4,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions2.push({
                      first: 12,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                    OPPositions3.push({
                      first: 12,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 4][calculateColumn("add", l) + 1]);
                  const close2 = splitDigits(vecN2[k - 2][calculateColumn("add", l) + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 12,
                      second: {
                        first: k - 4,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions2.push({
                      first: 12,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                    CPPositions3.push({
                      first: 12,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down right with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2 - 2; k++) {
          for (let l = 0; l < days - 4; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k + 2][calculateColumn("add", l) + 6] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k + 2][calculateColumn("add", l) + 6]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 4][calculateColumn("add", l) + 12] === pair.value) {
                  matchedPositions1.push({
                    first: 13,
                    second: {
                      first: k + 4,
                      second: calculateColumn("add", l) + 12
                    }
                  });
                  matchedPositions2.push({
                    first: 13,
                    second: {
                      first: k + 2,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions3.push({
                    first: 13,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 4][calculateColumn("add", l) + 12 - 1]);
                  const open2 = splitDigits(vecN2[k + 2][calculateColumn("add", l) + 6 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 13,
                      second: {
                        first: k + 4,
                        second: calculateColumn("add", l) + 12 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 13,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 13,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 4][calculateColumn("add", l) + 12 + 1]);
                  const close2 = splitDigits(vecN2[k + 2][calculateColumn("add", l) + 6 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 13,
                      second: {
                        first: k + 4,
                        second: calculateColumn("add", l) + 12 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 13,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 13,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down left with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2 - 2; k++) {
          for (let l = 0; l < days - 4; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k + 2][calculateColumn("minus", l) - 6] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k + 2][calculateColumn("minus", l) - 6]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 4][calculateColumn("minus", l) - 12] === pair.value) {
                  matchedPositions1.push({
                    first: 14,
                    second: {
                      first: k + 4,
                      second: calculateColumn("minus", l) - 12
                    }
                  });
                  matchedPositions2.push({
                    first: 14,
                    second: {
                      first: k + 2,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions3.push({
                    first: 14,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 4][calculateColumn("minus", l) - 12 - 1]);
                  const open2 = splitDigits(vecN2[k + 2][calculateColumn("minus", l) - 6 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 14,
                      second: {
                        first: k + 4,
                        second: calculateColumn("minus", l) - 12 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 14,
                      second: {
                        first: k + 2,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 14,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 4][calculateColumn("minus", l) - 12 + 1]);
                  const close2 = splitDigits(vecN2[k + 2][calculateColumn("minus", l) - 6 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 14,
                      second: {
                        first: k + 4,
                        second: calculateColumn("minus", l) - 12 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 14,
                      second: {
                        first: k + 2,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 14,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up right with one skip
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 3; k--) {
          for (let l = 0; l < days - 4; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k - 2][calculateColumn("add", l) + 6] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k - 2][calculateColumn("add", l) + 6]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 4][calculateColumn("add", l) + 12] === pair.value) {
                  matchedPositions1.push({
                    first: 15,
                    second: {
                      first: k - 4,
                      second: calculateColumn("add", l) + 12
                    }
                  });
                  matchedPositions2.push({
                    first: 15,
                    second: {
                      first: k - 2,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions3.push({
                    first: 15,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 4][calculateColumn("add", l) + 12 - 1]);
                  const open2 = splitDigits(vecN2[k - 2][calculateColumn("add", l) + 6 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 15,
                      second: {
                        first: k - 4,
                        second: calculateColumn("add", l) + 12 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 15,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 15,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 4][calculateColumn("add", l) + 12 + 1]);
                  const close2 = splitDigits(vecN2[k - 2][calculateColumn("add", l) + 6 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 15,
                      second: {
                        first: k - 4,
                        second: calculateColumn("add", l) + 12 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 15,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 15,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up left with one skip
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 3; k--) {
          for (let l = 0; l < days - 4; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k - 2][calculateColumn("minus", l) - 6] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k - 2][calculateColumn("minus", l) - 6]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 4][calculateColumn("minus", l) - 12] === pair.value) {
                  matchedPositions1.push({
                    first: 16,
                    second: {
                      first: k - 4,
                      second: calculateColumn("minus", l) - 12
                    }
                  });
                  matchedPositions2.push({
                    first: 16,
                    second: {
                      first: k - 2,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions3.push({
                    first: 16,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 4][calculateColumn("minus", l) - 12 - 1]);
                  const open2 = splitDigits(vecN2[k - 2][calculateColumn("minus", l) - 6 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 16,
                      second: {
                        first: k - 4,
                        second: calculateColumn("minus", l) - 12 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 16,
                      second: {
                        first: k - 2,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 16,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 4][calculateColumn("minus", l) - 12 + 1]);
                  const close2 = splitDigits(vecN2[k - 2][calculateColumn("minus", l) - 6 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 16,
                      second: {
                        first: k - 4,
                        second: calculateColumn("minus", l) - 12 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 16,
                      second: {
                        first: k - 2,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 16,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // Towards down right with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2 - 2; k++) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k + 2][calculateColumn("add", l) + 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k + 2][calculateColumn("add", l) + 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 4][calculateColumn("add", l) + 6] === pair.value) {
                  matchedPositions1.push({
                    first: 17,
                    second: {
                      first: k + 4,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions2.push({
                    first: 17,
                    second: {
                      first: k + 2,
                      second: calculateColumn("add", l) + 3
                    }
                  });
                  matchedPositions3.push({
                    first: 17,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 4][calculateColumn("add", l) + 6 - 1]);
                  const open2 = splitDigits(vecN2[k + 2][calculateColumn("add", l) + 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 17,
                      second: {
                        first: k + 4,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 17,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 17,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 4][calculateColumn("add", l) + 6 + 1]);
                  const close2 = splitDigits(vecN2[k + 2][calculateColumn("add", l) + 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 17,
                      second: {
                        first: k + 4,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 17,
                      second: {
                        first: k + 2,
                        second: calculateColumn("add", l) + 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 17,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards down left with one skip
      if (i === endRow && j === days - 5) {
        for (let k = 0; k <= endRow_2 - 2; k++) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k + 2][calculateColumn("minus", l) - 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k + 2][calculateColumn("minus", l) - 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k + 4][calculateColumn("minus", l) - 6] === pair.value) {
                  matchedPositions1.push({
                    first: 18,
                    second: {
                      first: k + 4,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions2.push({
                    first: 18,
                    second: {
                      first: k + 2,
                      second: calculateColumn("minus", l) - 3
                    }
                  });
                  matchedPositions3.push({
                    first: 18,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k + 4][calculateColumn("minus", l) - 6 - 1]);
                  const open2 = splitDigits(vecN2[k + 2][calculateColumn("minus", l) - 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 18,
                      second: {
                        first: k + 4,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 18,
                      second: {
                        first: k + 2,
                        second: calculateColumn("minus", l) - 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 18,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k + 4][calculateColumn("minus", l) - 6 + 1]);
                  const close2 = splitDigits(vecN2[k + 2][calculateColumn("minus", l) - 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 18,
                      second: {
                        first: k + 4,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 18,
                      second: {
                        first: k + 2,
                        second: calculateColumn("minus", l) - 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 18,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up right with one skip
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 3; k--) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("add", l)] !== 404 && vecN2[k - 2][calculateColumn("add", l) + 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("add", l)], vecN2[k - 2][calculateColumn("add", l) + 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 4][calculateColumn("add", l) + 6] === pair.value) {
                  matchedPositions1.push({
                    first: 19,
                    second: {
                      first: k - 4,
                      second: calculateColumn("add", l) + 6
                    }
                  });
                  matchedPositions2.push({
                    first: 19,
                    second: {
                      first: k - 2,
                      second: calculateColumn("add", l) + 3
                    }
                  });
                  matchedPositions3.push({
                    first: 19,
                    second: {
                      first: k,
                      second: calculateColumn("add", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 4][calculateColumn("add", l) + 6 - 1]);
                  const open2 = splitDigits(vecN2[k - 2][calculateColumn("add", l) + 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("add", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 19,
                      second: {
                        first: k - 4,
                        second: calculateColumn("add", l) + 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 19,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 19,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 4][calculateColumn("add", l) + 6 + 1]);
                  const close2 = splitDigits(vecN2[k - 2][calculateColumn("add", l) + 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("add", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 19,
                      second: {
                        first: k - 4,
                        second: calculateColumn("add", l) + 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 19,
                      second: {
                        first: k - 2,
                        second: calculateColumn("add", l) + 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 19,
                      second: {
                        first: k,
                        second: calculateColumn("add", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }

      // Towards up left with one skip
      if (i === endRow && j === days - 5) {
        for (let k = endRow; k > 3; k--) {
          for (let l = 0; l < days - 2; l++) {
            if (vecN3[k][calculateColumn("minus", l)] !== 404 && vecN2[k - 2][calculateColumn("minus", l) - 3] !== 404) {
              const temp = cn3(vecN3[k][calculateColumn("minus", l)], vecN2[k - 2][calculateColumn("minus", l) - 3]);
              for (const pair of temp) {
                if (pair.name === "Number 3" && vecN1[k - 4][calculateColumn("minus", l) - 6] === pair.value) {
                  matchedPositions1.push({
                    first: 20,
                    second: {
                      first: k - 4,
                      second: calculateColumn("minus", l) - 6
                    }
                  });
                  matchedPositions2.push({
                    first: 20,
                    second: {
                      first: k - 2,
                      second: calculateColumn("minus", l) - 3
                    }
                  });
                  matchedPositions3.push({
                    first: 20,
                    second: {
                      first: k,
                      second: calculateColumn("minus", l)
                    }
                  });
                  const open1 = splitDigits(vecN1[k - 4][calculateColumn("minus", l) - 6 - 1]);
                  const open2 = splitDigits(vecN2[k - 2][calculateColumn("minus", l) - 3 - 1]);
                  const open3 = splitDigits(vecN3[k][calculateColumn("minus", l) - 1]);
                  let tempO = triPattern(open3, open2);
                  if (arrayExists(tempO, open1) != -1) {
                    OPPositions1.push({
                      first: 20,
                      second: {
                        first: k - 4,
                        second: calculateColumn("minus", l) - 6 - 1
                      }
                    });
                    OPPositions2.push({
                      first: 20,
                      second: {
                        first: k - 2,
                        second: calculateColumn("minus", l) - 3 - 1
                      }
                    });
                    OPPositions3.push({
                      first: 20,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) - 1
                      }
                    });
                  }
                  const close1 = splitDigits(vecN1[k - 4][calculateColumn("minus", l) - 6 + 1]);
                  const close2 = splitDigits(vecN2[k - 2][calculateColumn("minus", l) - 3 + 1]);
                  const close3 = splitDigits(vecN3[k][calculateColumn("minus", l) + 1]);
                  let tempC = triPattern(close3, close2);
                  if (arrayExists(tempC, close1) != -1) {
                    CPPositions1.push({
                      first: 20,
                      second: {
                        first: k - 4,
                        second: calculateColumn("minus", l) - 6 + 1
                      }
                    });
                    CPPositions2.push({
                      first: 20,
                      second: {
                        first: k - 2,
                        second: calculateColumn("minus", l) - 3 + 1
                      }
                    });
                    CPPositions3.push({
                      first: 20,
                      second: {
                        first: k,
                        second: calculateColumn("minus", l) + 1
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (searchType == 4 && matches == 1 && expectedValues.length != 0) {
    let tempArray = [];
    const {
      first: row,
      second: col
    } = expectedValues[0].second;
    expectedValues.forEach(element => {
      if (element.second.first == row && element.second.second == col && element.third == "E") {
        tempArray.push(element.first);
      }
    });
    writeAndMergeOccurrences(tempArray);
  }
  return [vecN1,
  //0
  vecN2,
  //1
  vecN3,
  //2
  matchedPositions1,
  //3
  matchedPositions2,
  //4
  matchedPositions3,
  //5
  expectedValues,
  //6
  OPPositions1,
  //7
  OPPositions2,
  //8
  OPPositions3,
  //9
  CPPositions1,
  //10
  CPPositions2,
  //11
  CPPositions3 //12
  ];
}
function selectDay(selectedSearchDay) {
  let column;
  switch (selectedSearchDay) {
    case 0:
      column = 4;
      break;
    case 1:
      column = 7;
      break;
    case 2:
      column = 10;
      break;
    case 3:
      column = 13;
      break;
    case 4:
      column = 16;
      break;
    case 5:
      column = 19;
      break;
    case 6:
      column = 22;
      break;
    default:
      return 1;
  }
  return column;
}
function selectFileName(selectedVersion) {
  let filename;
  switch (selectedVersion) {
    case 0:
      filename = "./csvFiles/Kalyan.csv";
      break;
    case 1:
      filename = "./csvFiles/MainBazar.csv";
      break;
    case 2:
      filename = "./csvFiles/KalyanNight.csv";
      break;
    case 3:
      filename = "./csvFiles/TimeBazar.csv";
      break;
    case 4:
      filename = "./csvFiles/MilanDay.csv";
      break;
    case 5:
      filename = "./csvFiles/MilanNight.csv";
      break;
    case 6:
      filename = "./csvFiles/RajdhaniDay.csv";
      break;
    case 7:
      filename = "./csvFiles/RajdhaniNight.csv";
      break;
    default:
      return "";
  }
  if (selectedVersion == 1 || selectedVersion == 2 || selectedVersion == 7) {
    // 5
    days = 5;
    maxColumns = 18;
  } else if (selectedVersion == 0 || selectedVersion == 5 || selectedVersion == 6) {
    // 6
    days = 6;
    maxColumns = 21;
  } else if (selectedVersion == 3 || selectedVersion == 4) {
    // 7
    days = 7;
    maxColumns = 24;
  }
  return filename;
}
function split(str, delimiter) {
  let result = [];
  let start = 0;
  let end = str.indexOf(delimiter);
  while (end !== -1) {
    result.push(str.substring(start, end));
    start = end + 1;
    end = str.indexOf(delimiter, start);
  }
  result.push(str.substring(start)); // Add the last part

  return result;
}
function searchAll(numberOfUpWeeks, numberOfDownWeeks, selectedVersion, selectedSearchDay, valueOfNumber1, valueOfNumber2) {
  const filename = selectFileName(selectedVersion);
  const data = readCSV(filename);
  const searchValues = cn3(valueOfNumber1, valueOfNumber2);
  const column0 = selectDay(selectedSearchDay[0]);
  const column1 = selectDay(selectedSearchDay[1]);
  const column2 = selectDay(selectedSearchDay[2]);
  const columns = [column0, column1, column2];
  const foundIndices = searchWithConstraints(data, searchValues, columns);
  return fillVectors(numberOfUpWeeks, numberOfDownWeeks, foundIndices, data);
}
function searchAll100(numberOfUpWeeks, numberOfDownWeeks, selectedVersion, selectedSearchDay, valueOfNumber1, Not100, turn, matches) {
  let result = [];
  let searchValues;
  const filename = selectFileName(selectedVersion);
  const data = readCSV(filename);
  const column0 = selectDay(selectedSearchDay[0]);
  const column1 = selectDay(selectedSearchDay[1]);
  const column2 = selectDay(selectedSearchDay[2]);
  const columns = [column0, column1, column2];
  if (turn === 0) {
    for (let index = 0; index < 100; index++) {
      searchValues = cn3(valueOfNumber1, index);
      result.push(fillVectors(numberOfUpWeeks, numberOfDownWeeks, searchWithConstraints(data, searchValues, columns), data));
    }
  } else {
    for (let index = 0; index < 100; index++) {
      searchValues = cn3(valueOfNumber1, index);
      result.push(fillVectors(numberOfUpWeeks, numberOfDownWeeks, searchWithConstraints100(data, searchValues, columns, turn), data));
    }
  }
  if (Not100 === 0) {
    let filteredResult = result.filter(subArray => {
      if (subArray && Array.isArray(subArray[3])) {
        let count = subArray[3].filter(item => item.first === 0).length;
        if (matches === 2) {
          return count == matches;
        } else {
          return count >= matches;
        }
      }
      return false;
    });
    result = filteredResult;
  }
  return result;
}
function searchAllSkip(numberOfUpWeeks, numberOfDownWeeks, skipWhat, selectedVersion, selectedSearchDay, valueOfNumber1, valueOfNumber2, fixedDate) {
  const filename = selectFileName(selectedVersion);
  const data = readCSV(filename);
  const searchValues = cn3(valueOfNumber1, valueOfNumber2);
  const column0 = selectDay(selectedSearchDay[0]);
  const column1 = selectDay(selectedSearchDay[1]);
  const column2 = selectDay(selectedSearchDay[2]);
  const columns = [column0, column1, column2];
  const foundIndices = searchWithConstraintsSkip(numberOfUpWeeks, numberOfDownWeeks, skipWhat, data, searchValues, columns, fixedDate);
  return fillVectors(numberOfUpWeeks, numberOfDownWeeks, foundIndices, data);
}
function searchAllDates(numberOfUpWeeks, numberOfDownWeeks, selectedVersion, selectedSearchDay, valueOfNumber1, valueOfNumber2, valueOfNumber3) {
  const filename = selectFileName(selectedVersion);
  const data = readCSV(filename);
  const column = selectDay(selectedSearchDay);
  let result1 = split(valueOfNumber1, "/");
  let result2 = split(valueOfNumber2, "/");
  let result3 = split(valueOfNumber3, "/");
  let searchValues = [result1, result2, result3];
  const foundIndices = searchWithdates(data, searchValues);
  return fillVectors(numberOfUpWeeks, numberOfDownWeeks, foundIndices, data);
}
function searchAllSkipLoop(numberOfUpWeeks, numberOfDownWeeks, selectedVersion, selectedSearchDay, valueOfNumber1) {
  let result = [];
  const filename = selectFileName(selectedVersion);
  const data = readCSV(filename);
  //const searchValues = cn3(valueOfNumber1, valueOfNumber1);
  const column0 = selectDay(selectedSearchDay[0]);
  const column1 = selectDay(selectedSearchDay[1]);
  const column2 = selectDay(selectedSearchDay[2]);
  const columns = [column0, column1, column2];
  const foundIndices = searchWithConstraintsSkipLoop(data, valueOfNumber1, columns);
  let temp = [];
  let tempNum1 = foundIndices[0];
  for (let i = 1; i < foundIndices.length; i++) {
    for (let j = 2; j < foundIndices.length; j++) {
      temp = [tempNum1, i, j];
      result.push(fillVectors(numberOfUpWeeks, numberOfDownWeeks, temp, data));
    }
  }
  return result;
}
let args = process.argv.slice(2);
if (args.length < 16) {
  // console.log(args.length);
  process.exit(1);
}
let [searchType, numberOfUpWeeks, numberOfDownWeeks, skipWhat, value1, value20, value21, value22, value3, value4, dateInput1, dateInput2, dateInput3, fixedDate, turn, matches] = args;
function main(searchType, numberOfUpWeeks, numberOfDownWeeks, skipWhat, value1, value20, value21, value22, value3, value4, dateInput1, dateInput2, dateInput3, fixedDate, turn, matches) {
  searchType = isNaN(searchType) || searchType == null ? 0 : parseInt(searchType, 10);
  numberOfUpWeeks = isNaN(numberOfUpWeeks) || numberOfUpWeeks == null ? 5 : parseInt(numberOfUpWeeks, 10);
  numberOfDownWeeks = isNaN(numberOfDownWeeks) || numberOfDownWeeks == null ? 5 : parseInt(numberOfDownWeeks, 10);
  skipWhat = isNaN(skipWhat) || skipWhat == null ? 0 : parseInt(skipWhat, 10);
  value1 = isNaN(value1) || value1 == null ? 0 : parseInt(value1, 10); // market selectedVersion
  value20 = value20 == null || value20 === "" ? "0" : parseInt(value20, 10);
  value21 = value21 == null || value21 === "" ? "0" : parseInt(value21, 10);
  value22 = value22 == null || value22 === "" ? "0" : parseInt(value22, 10);
  const value2 = [value20, value21, value22]; // day selectedSearchDay
  value3 = isNaN(value3) || value3 == null ? 0 : parseInt(value3, 10); // N1
  value4 = isNaN(value4) || value4 == null ? 0 : parseInt(value4, 10); // N2
  dateInput1 = dateInput1 == null || dateInput1 === "" ? "00/00/00" : dateInput1;
  dateInput2 = dateInput2 == null || dateInput2 === "" ? "00/00/00" : dateInput2;
  dateInput3 = dateInput3 == null || dateInput3 === "" ? "00/00/00" : dateInput3;
  fixedDate = isNaN(fixedDate) || fixedDate == null ? 1 : parseInt(fixedDate, 10);
  turn = isNaN(turn) || turn == null ? 0 : parseInt(turn, 10);
  matches = isNaN(matches) || matches == null ? 3 : parseInt(matches, 10);
  let response;
  switch (searchType) {
    case 0:
      response = searchAll(numberOfUpWeeks, numberOfDownWeeks, value1, value2, value3, value4);
      break;
    case 1:
      response = searchAll100(numberOfUpWeeks, numberOfDownWeeks, value1, value2, value3, 1,
      // Not100
      0,
      // turn
      matches);
      break;
    case 2:
      response = searchAllSkip(numberOfUpWeeks, numberOfDownWeeks, skipWhat, value1, value2, value3, value4, fixedDate);
      break;
    case 3:
      response = searchAllDates(numberOfUpWeeks, numberOfDownWeeks, value1, value2, dateInput1, dateInput2, dateInput3);
      break;
    case 4:
      response = searchAll100(numberOfUpWeeks, numberOfDownWeeks, value1, value2, value3, 0,
      // Not100
      turn, matches);
      break;
    case 5:
      response = searchAllSkipLoop(numberOfUpWeeks, numberOfDownWeeks, value1, value2, value3);
      break;
  }
  process.stdout.write(JSON.stringify(response));
}
main(searchType, numberOfUpWeeks, numberOfDownWeeks, skipWhat, value1, value20, value21, value22, value3, value4, dateInput1, dateInput2, dateInput3, fixedDate, turn, matches);
