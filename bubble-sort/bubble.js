module.exports = bubble

function bubble (xs) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < xs.length; i++) {
      if (xs[i] > xs[i + 1]) {
        const tmp = xs[i]
        xs[i] = xs[i + 1]
        xs[i + 1] = tmp
        swapped = true
      }
    }
  } while (swapped)
}
