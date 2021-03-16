import { Color } from "../types/RealRendererTypes";

export function getRGBColorString(color: Color) {
  return `rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`
}
