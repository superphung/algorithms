import test from 'ava'
import mergeSort from './merge'

test('merge sort', t => {
  var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  var sorted = mergeSort(nums)
  t.deepEqual(sorted, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
