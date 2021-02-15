function spinWords(words) {
    // Create an arr of words
    let arr = words.split(" ");

    // Loop through the arr
    for (let i = 0; i < arr.length; i++) {
      // If the word > 4 letters long, turn the word into an array, reverse it 
      // and turn it back into a string in place
      if (arr[i].length > 4) arr[i] = arr[i].split("").reverse().join("");
    }; 

    // Return the mutated arr joined back into a string
    return arr.join(" ");
};