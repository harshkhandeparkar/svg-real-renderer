import { RealExport } from '../types/RealRendererTypes';

/**
 * Renders a preview of the given data to a given separate SVG element.
 * @param data Data to be rendered (exported by using .export()).
 * @param renderTo SVG Element to render to.
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
