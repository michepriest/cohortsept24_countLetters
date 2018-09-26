// return all the indices

function countLetters(string) {
  let noSpaces = string.split(" ").join("");
  let counted = {};

  for(let i = 0; i < noSpaces.length; i++) {
    let key = noSpaces[i];
    if (!counted[key]) {
      counted[key] = [i]
    } else {
      counted[key].push(i);
    }
  }
  return counted;
} 
console.log(countLetters("lighthouse in the house"));