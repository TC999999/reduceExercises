//Exercise 1: extractValue
function extractValue(objArr, key) {
  return objArr.reduce(function (newArr, curObj) {
    if (curObj.hasOwnProperty(key)) {
      newArr.push(curObj[key]);
      return newArr;
    }
  }, []);
}

//Exercise 2: vowelCount
function vowelCount(str) {
  str = str.toLowerCase();
  str = str.split("");
  vowelStr = "aeiou";
  return str.reduce(function (vowelObj, letter) {
    if (vowelStr.indexOf(letter) !== -1) {
      if (vowelObj[letter] == null) {
        vowelObj[letter] = 1;
      } else {
        vowelObj[letter] += 1;
      }
    }
    return vowelObj;
  }, {});
}

//Exercise 3: addKeyAndValue
function addKeyAndValue(objArr, key, value) {
  return objArr.reduce(function (newArr, curObj) {
    curObj = { [key]: value, ...curObj };
    newArr.push(curObj);
    return newArr;
  }, []);
}

//Exercise 4: partition
function partition(arr, callback) {
  let notTrue = [];
  let isTrue = arr.reduce(function (newArr, cur) {
    if (callback(cur) === true) {
      newArr.push(cur);
      return newArr;
    } else {
      notTrue.push(cur);
      return newArr;
    }
  }, []);
  return [isTrue, notTrue];
}
