export const chunk = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(arr.slice(i, i + size))
    }
    return acc
  }, [])
}
