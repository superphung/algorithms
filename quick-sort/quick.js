module.exports = quickSort

function quickSort (nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums
  }
  const pivot = nums.pop()
  const left = []
  const right = []
  while (nums.length) {
    nums[nums.length - 1] <= pivot
     ? left.push(nums.pop())
     : right.push(nums.pop())
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
