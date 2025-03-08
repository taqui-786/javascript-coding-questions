// 7. Reorder array with new indexes

// Suppose we have an array of items - A, and another array of indexes in numbers - B

const A = ["A", "B", "C", "D", "E", "F"];
const B = [1, 5, 4, 3, 2, 0][
  // You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

  // For above example A should be modified inline to following

  ("F", "A", "E", "D", "C", "B")
];
// The input are always valid.

// follow-up

// It is fairly easy to do this by using extra O(n) space, could you solve it with O(1) space?




// ------------------------------------- Solution of this ✅ ------------------------------------------------------------------
function sort(items, newOrder) {
    let result = new Array(items.length);
    newOrder.forEach((order, indx) => {
        result[order] = items[indx];
    });
    items.length = 0;
    items.push(...result);
    return items;
}
// ----------------------------------------------------------------------------------------------------------------------------
