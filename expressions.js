const mul = (a, b) => {
  return a * b;
};

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const operations = {
  multiply: mul,
  addition: add,
  subtraction: sub,
  division: div,
};

const calculate = (a, b, calculateFunction) => {
  return calculateFunction(a, b);
};

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));
