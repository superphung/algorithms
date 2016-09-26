module.exports = factorial

function factorial (nb) {
  return nb === 1
    ? nb
    : nb * factorial(nb - 1)
}
