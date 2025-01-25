Array.prototype.myFilter = function (fn) {
  let filteredArray = [];
  for (let i = 0; i < this.length; ++i) {
    if (fn(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = numbers.myFilter(function (num) {
  // Не стрелочная функция, для примера
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = numbers.myFilter(function (num) {
  // Не стрелочная функция, для примера
  return num > 3;
});
console.log(greaterThanThree); // [4, 5]
