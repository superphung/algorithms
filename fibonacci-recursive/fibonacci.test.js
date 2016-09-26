import test from 'ava'
import fibonacci from './fibonacci'

test('recursive fibonacci', t => {
  t.is(fibonacci(0), 0)
  t.is(fibonacci(1), 1)
  t.is(fibonacci(2), 1)
  t.is(fibonacci(3), 2)
  t.is(fibonacci(13), 233)
})
