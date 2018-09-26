function countLetters(string) {
  let noSpaces = string.split(" ").join("");
  let counted = {};

  for(let i = 0; i < noSpaces.length; i++) {
    let key = noSpaces[i];
    // if new letter exists add 1 to value
    if (!counted[key]) {
      counted[key] = 1
    } else {
      counted[key]++
    }
  }
  return counted;
} 
console.log(countLetters("lighthouse in the house"));