module.exports = mergeSort

function merge (part1, part2) {
  const xs = []
  while (part1.length && part2.length) {
    part1[0] <= part2[0]
     ? xs.push(part1.shift())
     : xs.push(part2.shift())
  }
  return [...xs, ...part1, ...part2]
}

function mergeSort (nums) {
  if (nums.length === 1) {
    return nums
  }
  const length = Math.round(nums.length / 2)
  const part1 = nums.slice(0, length)
  const part2 = nums.slice(length)
  return merge(mergeSort(part1), mergeSort(part2))
}
