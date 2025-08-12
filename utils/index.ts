export const mockify = (input: string): string => {
  const chars = input.split("");

  let mockifiedChars = [] as string[];
  let capitalized = false;
  chars.forEach((c, i) => {
    // if the character is a space, capitalization is set to true
    if (c === " ") {
      capitalized = true;
      mockifiedChars.push(c);
      return;
    }

    // whenever there is a letter from a-z or A-Z, the capitalization is toggled
    if (c.match(/[a-zA-Z]/)) {
      capitalized = !capitalized;
    }
    mockifiedChars.push(capitalized ? c.toUpperCase() : c.toLowerCase());
  });

  return mockifiedChars.join("");
};
