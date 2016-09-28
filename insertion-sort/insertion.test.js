import test from 'ava'
import insertionSort from './insertion'

test('insertion sort', t => {
  var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  insertionSort(nums)
  t.deepEqual(nums, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
