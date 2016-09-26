module.exports = fibonacci

function fibonacci (nb) {
  if (nb === 0) {
    return 0
  }
  return (nb <= 2)
    ? 1
    : fibonacci(nb - 2) + fibonacci(nb - 1)
}
