function capitalize(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

function caesarCipher(input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const shift = 13
  
  let output = ""
  for (let char of input) {
    const index = alphabet.indexOf(char.toLowerCase())
    const upperCase = char == char.toUpperCase()

    if(index > -1) {
      const pos = (index + shift) % alphabet.length
      char = alphabet[pos]
    }

    if(upperCase) char = char.toUpperCase()
    output += char
  }

  return output
}

function analyzeArray(arr) {
  const length = arr.length
  const average = arr.reduce((sum, current) => sum + current) / length
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return {average, min, max, length }
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

export {capitalize, reverseString, caesarCipher, analyzeArray, calculator}