// problem 1

type User = {
  id: number;
  name: string;
};

const users: Array<User> = [
  { id: 12, name: "rakib" },
  { id: 13, name: "sakib" },
  { id: 14, name: "takib" },
  { id: 15, name: "uakib" },
];

function getPropertyFromArray<T, K extends keyof T>(
  array: T[],
  key: K
): T[K][] {
  return array.map((obj) => obj[key]);
}

console.log("LExtarted names: ", getPropertyFromArray(users, "id"));
