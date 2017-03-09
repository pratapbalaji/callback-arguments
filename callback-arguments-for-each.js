// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach( function(i, index) {
    if (i === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(indexValue) {
  console.log("Found him at index " + indexValue + "!");
}



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);