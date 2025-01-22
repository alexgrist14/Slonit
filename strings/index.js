const upFL = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
};

console.log(upFL("строка с маленькой буквы"));

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }

  const punctuation = /[,.!?:;\s]/;
  let truncated = str.slice(0, maxLength);

  let lastBreak = -1;
  for (let i = truncated.length - 1; i >= 0; i--) {
    if (punctuation.test(truncated[i])) {
      lastBreak = i;
      break;
    }
  }

  if (lastBreak !== -1) {
    truncated = truncated.slice(0, lastBreak);
  }

  return truncated + "...";
};
console.log(
  truncateString(
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    40
  )
);
console.log(truncateString("short.", 40));
console.log(truncateString("some string-strssss-ssssssssssssssss.", 20));

const isSubstring = (str1, str2) => {
  return str1.includes(str2) || str2.includes(str1);
};
console.log(isSubstring("hello", "ell"));
