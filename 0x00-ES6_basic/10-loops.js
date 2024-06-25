export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const value of array) {
    // const idx = array.indexOf(value);
    newArray.push(appendString + value);
  }

  return newArray;
}
