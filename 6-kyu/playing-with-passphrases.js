// Playing with passphrases

function playPass(s, n) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = s.split("")  
    
    // *This loop does nothing to elements that are non-alpha or non-digit
    for (let i = 0; i < arr.length; i++) {
      
      // See if element is a letter in the alphabet and get its index
      const letterIndex = alpha.indexOf(arr[i].toLowerCase());
      
      // Shift each letter by a given number but the transformed letter must be a letter (circular shift)
      if (letterIndex > -1) {
        if (letterIndex + n > alpha.length - 1) {
          let index = alpha.length - letterIndex
          arr[i] = alpha[n - index]
        } else {
          arr[i] = alpha[letterIndex + n]
        }
      };
        
      // Downcase each letter in odd position, upcase each letter in even position
      arr[i] = i % 2 === 0 && letterIndex > -1 ? arr[i].toUpperCase() : arr[i].toLowerCase();
        
      // Replace each digit by its complement to 9
      if (Number(arr[i]) > - 1 && arr[i] !== ' ') arr[i] = (9 - arr[i]).toString();
    }
    
    // Reverse the result
    const reversed = arr.reverse().join("");
    return reversed;
};