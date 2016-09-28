module.exports = insertionSort

function insertionSort (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
}
