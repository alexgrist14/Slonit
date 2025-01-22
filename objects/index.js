const sumNumericFields = (obj) => {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }

  return sum;
}

const getSortedNumericFields = (obj) => {
  const numericFields = Object.entries(obj).filter(
    ([key, value]) => typeof value === "number"
  );

  numericFields.sort(([, a], [, b]) => a - b);

  return numericFields.map(([key]) => key);
}

const data = { name: "Vasya", friends: 5, likes: 19, projects: 7 };

console.log(sumNumericFields(data));

console.log(getSortedNumericFields(data));
