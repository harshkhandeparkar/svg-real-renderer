/**
 * Clamps a given number between two bounds.
 * @param input The number to be clamped.
 * @param min Lower bound.
 * @param max Upper bound.
 */
export function clamp(input: number, min: number, max: number): number {
  return Math.min(Math.max(input, min), max);
}
