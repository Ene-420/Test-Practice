export let operations = {
  reverseString(item) {
    return item.split("").reverse().join("");
  },

  capitalize(item) {
    const searchRegexp = /\p{P}|\d|\s/gu;
    if (searchRegexp.test(item[0])) return null;
    else return item.replace(item[0], item[0].toUpperCase());
  },
};

export let Calcuator = {
    
  add(...a) {
    if (checkInt(a[0], a[1]) && checkLength(...a)) return a[0] + a[1];

    return null;
  },

  divide(...a) {
    if (checkInt(a[0], a[1])&& checkLength(...a)) return a[0] / a[1];

    return null;
  },

  multiply(...a) {
    if (checkInt(a[0], a[1]) && checkLength(...a)) return a[0] * a[1];
    return null;
  },
};

function checkInt(a, b) {
  if (typeof a == "number" && typeof b == "number") return true;

  return false;
}
export function caesarCipher(string, key) {
    const searchRegexp = /\p{P}|\d|\s|[A-Z]/gu;
  if (key !== 0 && !searchRegexp.test(string)) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      newString += String.fromCharCode(string.charCodeAt(i) + key);
    }
    return newString;
  }

  return null;
}

export function analyzeArray(array) {
  if (Array.isArray(array) && checkForString(array)) {
    return {
      average: average(array),
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length,
    };
  }
  return null;
}

function average(array) {
  let total = array.reduce((prev, cur) => prev + cur, 0);
  return total / array.length;
}

function checkForString(array) {
  let noStrFound = true;
  array.forEach((item) => {
    if (typeof item !== "number") noStrFound = false;
  });

  return noStrFound;
}

function checkLength(...items) {
    if (items.length == 2) return true
    //return items.length;
    return false
} 
