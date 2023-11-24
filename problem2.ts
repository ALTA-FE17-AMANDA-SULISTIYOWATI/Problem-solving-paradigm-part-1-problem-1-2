function dragonOfLoowater(
  dragonHead: number[],
  knightHeight: number[]
): number | string {
  dragonHead.sort((a, b) => a - b)
  knightHeight.sort((a, b) => a - b)

  let totalHeight = 0
  let dragonIndex = 0

  for (let i = 0; i < knightHeight.length; i++) {
    if (
      dragonIndex < dragonHead.length &&
      dragonHead[dragonIndex] <= knightHeight[i]
    ) {
      totalHeight += knightHeight[i]
      dragonIndex++
    }
  }

  return dragonIndex === dragonHead.length ? totalHeight : "knight fall"
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4]))
console.log(dragonOfLoowater([5, 10], [5]))
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2]))
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5]))
