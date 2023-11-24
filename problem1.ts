function simpleEquations(A: number, B: number, C: number) {
  for (let x = 1; x <= 10000; x++) {
    for (let y = 1; y <= 10000; y++) {
      const z = A - x - y
      if (x * y * z === B && x ** 2 + y ** 2 + z ** 2 === C) {
        return `${x} ${y} ${z}`
      }
    }
  }
  return "No solution"
}

console.log(simpleEquations(1, 2, 3))
console.log(simpleEquations(6, 6, 14))
