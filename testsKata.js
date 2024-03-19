function duplicateCount(text) {
  // char conversion in lowcase
  text = text.toLowerCase();

  // char stock
  const charCount = {};

  // Itirate each char
  for (let char of text) {
    // Check if char is alphabetic or numeric
    if (/[a-z0-9]/.test(char)) {
      // Update count if char is already appeared previously
      if (charCount[char]) {
        charCount[char]++;
      } else {
        // if not set to 1
        charCount[char] = 1;
      }
    }
  }

  // count duplicates
  let duplicatesCount = 0;
  for (let char in charCount) {
    if (charCount[char] > 1) {
      duplicatesCount++;
    }
  }

  // return duplicates
  return duplicatesCount;
}

console.log(duplicateCount("TEXET"));
