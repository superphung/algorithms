import test from 'ava'
import factorial from './factorial'

test('recursive factorial', t => {
  t.is(factorial(1), 1)
  t.is(factorial(2), 2)
  t.is(factorial(3), 6)
  t.is(factorial(10), 3628800)
})
