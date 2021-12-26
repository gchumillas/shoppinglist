/**
 * @param {{ from?: number, to: number }} params
 * @returns number[]
 */
export const range = ({ from = 0, to }) => {
  return Array.from(Array(to - from + 1).keys()).map(i => i + from)
}
