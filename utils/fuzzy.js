/**
 * @typedef {Object} Match
 * @property {Number} [idx] The index of the match into the search array.
 * @property {String} rendered The rendered string from the match.
 * @property {Number} score The score of the match.
 * @property {String} [original] The original string before render.
 */

/**
 * Fuzzy match an input needle in a given string. This match can be sensitive or not.
 * @param {String} needle The needle to look for.
 * @param {String} str The input string.
 * @param {Boolean} sensitive Is the match sensitive or not?
 * @returns {Match}
 */
export function match (needle, str, sensitive = false) {
  const result = []
  const input = !sensitive ? str.toLowerCase() : str
  const pattern = !sensitive ? needle.toLowerCase() : needle

  let score = 0
  let currentScore = 0
  let idx = 0

  for (let i = 0; i < str.length; ++i) {
    if (input[i] === pattern[idx]) {
      ++idx
      currentScore += 1 + currentScore
    } else {
      currentScore = 0
    }

    score += currentScore
    result.push(input[i])
  }

  if (idx < pattern.length) {
    return null
  }

  return {
    rendered: result.join(''),
    score: input === pattern ? Infinity : score
  }
}

/**
 * 
 * @param {String} needle 
 * @param {Array.<String>} input 
 * @param {Boolean} sensitive 
 */
export function filter (needle, input, sensitive = false) {
  if (typeof needle !== 'string') {
    throw new TypeError('Needle should be a string')
  }

  if (!input || input.length === 0) {
    throw new TypeError('Input array shall be provided and not be empty')
  }

  return input
    .reduce((output, str, idx) => {
      const search = match(needle, str, sensitive)
      if (!search) {
        return output
      }

      output.push({
        idx,
        ...search,
        original: str
      })
      return output
    }, [])
    .sort((a, b) => a.score - b.score)
}
