function indexOf(arr, target) {
  //create a for loop to loop through the array
  for(let i = 0; i < arr.length; i++) {
    //if the array is equal to the target, return the index of the first value
    if(arr[i] === target) {
      return i
    }
  }
  //otherwise, return -1 if there is no target match
  return -1
}

console.log(indexOf([1, 2, 3, 4, 5, 6], 5))

function evens(arr) {
  //create an empty array for results
  let results = []
  //create a for loop to loop through the array
  for(let i = 0; i < arr.length; i++) {
    //if the index has the reminder of zero, push the even numbers into the array
    if(arr[i] % 2 === 0) {
      results.push(arr[i])
    }
  }
  //return the results array
  return results
}

console.log(evens([1, 2, 3, 4, 5, 6]))

function sum(arr) {
  //make a total variable
  let totalSum = 0
  //create a for loop to loop through the array
  for(let i = 0; i < arr.length; i++) {
    //add the total variable to the array
    totalSum += arr[i]
  }
  //return the sum of the array
  return totalSum
}

console.log(sum([1, 2, 3, 4, 5]))

function mergeSort(arr1, arr2) {
  const total = arr1.length + arr2.length
  let result = []
  let i = 0
  let j = 0
  while(i + j < total) {
    if(j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  return result
}

console.log(mergeSort([1, 3, 9], [2, 4, 8]))