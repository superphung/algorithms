import test from 'ava'
import quickSort from './quick'

test('quick sort', t => {
  const nums = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5]
  const sorted = quickSort(nums)
  t.deepEqual(sorted, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
