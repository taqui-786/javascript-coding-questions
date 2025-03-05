// 4. can you shuffle() an array?


// How would you implement a shuffle() ?

// When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.

// for an array like this:

// const arr = [1, 2, 3, 4]
// there would be possibly 4! = 24 permutations

// [1, 2, 3, 4]
// [1, 2, 4, 3]
// [1, 3, 2, 4]
// [1, 3, 4, 2]
// [1, 4, 2, 3]
// [1, 4, 3, 2]
// [2, 1, 3, 4]
// [2, 1, 4, 3]
// [2, 3, 1, 4]
// [2, 3, 4, 1]
// [2, 4, 1, 3]
// [2, 4, 3, 1]
// [3, 1, 2, 4]
// [3, 1, 4, 2]
// [3, 2, 1, 4]
// [3, 2, 4, 1]
// [3, 4, 1, 2]
// [3, 4, 2, 1]
// [4, 1, 2, 3]
// [4, 1, 3, 2]
// [4, 2, 1, 3]
// [4, 2, 3, 1]
// [4, 3, 1, 2]
// [4, 3, 2, 1]
// your shuffle() should transform the array in one of the above array, at the same 1/24 probability.

// notes

// Your shuffle() will be called multiple times, to calculate the probability on each possible result, and test again standard deviation

// Try to solve this make your own  Array.shuffle() function in javascript its an easy level question, So give you best.

// ------------------------------------- Solution of this ✅ ------------------------------------------------------------------
function shuffle(arr) {
    console.log("Initial array:", arr);
  
    for (let i = arr.length - 1; i > 0; i--) {
      const randIdx = Math.floor(Math.random() * (i + 1));
      console.log(`\nStep ${arr.length - i}: Swapping index ${i} and ${randIdx}`);
  
      const storedItem = arr[i];  // Store current value at i
      arr[i] = arr[randIdx];      // Swap with random index
      arr[randIdx] = storedItem;  // Place stored value in randIdx
  
      console.log("Array after swap:", arr);
    }
  
    console.log("\nFinal shuffled array:", arr);
    return arr;
  }
  
  // Example usage:
  shuffle([1, 2, 3, 4, 5]);

  // -------------------------------------------------------------------------------------------------------------------------