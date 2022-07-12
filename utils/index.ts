export const mockify = (input: string): string => {
  const chars = input.split('')
  const mockifiedChars = chars.map((c, i) => {
    if (i % 2 === 0) {
      return c.toLowerCase()
    } else {
      return c.toUpperCase()
    }
  })

  return mockifiedChars.join('')
}
