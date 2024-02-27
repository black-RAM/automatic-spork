import { capitalize } from "."

test("capitalize('tERmInal') returns 'Terminal'.", () => {
  expect(capitalize("tERmInal")).toBe("Terminal")
})