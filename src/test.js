import { capitalize, reverseString, calculator } from "."

test("capitalize('tERmInal') returns 'Terminal'.", () => {
  expect(capitalize("tERmInal")).toBe("Terminal")
})

test("revereString('palindromes') returns 'semordnilap'.", () => {
  expect(reverseString("palindromes")).toBe("semordnilap")
})

const [a, b] = [4, 2]
const driver = [
  {name: "add", return: a + b}, 
  {name: "subtract", return: a - b}, 
  {name: "multiply", return: a * b}, 
  {name: "divide", return: a / b},
]

for (const func of driver) {
  test(`calculator.${func.name}(${a}, ${b}) returns ${func.return}`, () => {
    expect(calculator[func.name](a, b)).toBe(func.return)
  })
}