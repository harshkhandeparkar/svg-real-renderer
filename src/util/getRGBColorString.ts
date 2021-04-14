import { Color } from "../types/RealRendererTypes";

/**
 *
 * @param color Converts a color array to rgb() css color format.
 * @returns
 */
export function getRGBColorString(color: Color) {
  return `rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`;
}
