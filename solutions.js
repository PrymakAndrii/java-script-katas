//Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Return Negative
function makeNegative(num) {
  if (num >= 0) {
    return num * -1;
  } else {
    return num;
  }
}

//Terminal game move function
function move(position, roll) {
  return position + 2 * roll;
}

//Personalized Message
function greet(name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//Keep Hydrated
function litres(time) {
  return Math.floor(time * 0.5);
}

//Opposites Attract
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

//Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//Find Maximum and Minimum Values of a List
function max(arr) {
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

function min(arr) {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}


