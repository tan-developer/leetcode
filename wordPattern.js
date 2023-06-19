/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (c, string) {
  let s = string.split(" ");

  if (c.length !== s.length) {
    return false;
  }
  let mapCharacter = new Map();
  let mapString = new Map();

  for (let i = 0; i < c.length; i++) {
    if (mapCharacter.get(c[i]) != mapString.get(s[i])) {
      return false;
    }

    mapString.set((s[i]) , i)
    mapCharacter.set((c[i]) , i)
  }

  return true;
};

console.log(wordPattern("abba", "dog constructor constructor dog"));
