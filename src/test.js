import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "."

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

test("caesarCipher('the quick brown fox jumps over the lazy dog') correctly rotates all characters.", () => {
  expect(caesarCipher("the quick brown fox jumps over the lazy dog")).toMatch(/gur dhvpx oebja sbk whzcf bire gur ynml qbt/)
})

test("ceaserCipher('Hello, World!') maintains the casing and punctuation.", () => {
  expect(caesarCipher("Hello, World!")).toMatch(/Uryyb, Jbeyq!/)
})

test("analyseArray() returns the correct length, mean, min and max.", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})