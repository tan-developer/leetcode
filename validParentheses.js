var isValid = function (s) {
  const stack = [];

  for (let c of s) {
    if (c === "[" || c === "(" || c === "{") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const last = stack.pop();

      if (
        (c === "]" && last !== "[") ||
        (c === "}" && last !== "{") ||
        (c === ")" && last !== "(")
      ) {
        return false
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(){}[]())"));
