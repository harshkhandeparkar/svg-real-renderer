import { GraphDimensions, RealExport, StrokeExport } from '../types/RealRendererTypes';

/**
 * Renders a preview of given data.
 * @param data Export Data
 * @param renderTo SVG Element to render to
 */
export function renderPreview(
  data: RealExport,
  renderTo: SVGSVGElement
) {
  const { exportData, dimensions } = data;
  renderTo.setAttribute('viewBox', `0 0 ${dimensions[0]} ${dimensions[1]}`);

  exportData.forEach((strokeExport) => {
    strokeExport.forEach((strokeNodeData) => {
      renderTo.innerHTML += strokeNodeData.data;
    })
  })
}
