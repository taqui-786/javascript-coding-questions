// 2. implement Array.prototype.flat()
// Question ⭐
// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)
// [1, 2, 3, 4]

// Try to solve this make your own custom Array.flat() method in javascript its an medium level question, So give you best.

// ------------------------------------- Solution of this ✅ ------------------------------------------------------------------
function flat(arr, indept = 1) {
    const result = [];
    arr.map((array) => {
      if (Array.isArray(array)) {
        loopAndSet(array);
      } else {
        result.push(array);
      }
    });
    function loopAndSet(takeArr, count = 0) {
      takeArr.map((itm) => {
        if (Array.isArray(itm)) {
          if (count < indept) {
            loopAndSet(itm, count);
          } else {
            result.push(itm);
          }
        } else {
          result.push(itm);
          count++;
        }
      });
    }
    return result;
  }
// -------------------------------------------------------------------------------------------------------------------------