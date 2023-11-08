// problem 2

const keyValueArray: [string, any][] = [
  ["id", 23],
  ["name", "rakib"],
  ["isMarid", false],
];

function arrayToOvj<T extends string, U>(array: [T, U][]): Record<T, U> {
  const transformdObject = array.reduce((finalObj, [key, value]) => {
    finalObj[key] = value;
    return finalObj;
  }, {} as Record<T, U>);

  return transformdObject;
}

console.log(arrayToOvj(keyValueArray));
