import { RealExport, StrokeExport } from '../../types/RealRendererTypes';
import { RealRenderer } from './RealRenderer';
import { Circle } from './strokeNodes/_circle';
import { Path } from './strokeNodes/_path';
import { Text } from './strokeNodes/_text/_text';
import { GroupNode } from './strokeNodes/_group';
import { Polygon } from './strokeNodes/_polygon';

/**
 * Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().
 * @returns Data of the graph in a storable and loadable format.
 */
export function exportData(this: RealRenderer): RealExport {
  const strokeExport: StrokeExport[] = [];
  this.strokes.forEach((stroke) => {
    strokeExport.push(
      stroke.map((node) => node.export())
    )
  })

  return {
    exportData: strokeExport,
    strokeIndex: this._strokeIndex,
    dimensions: this.dimensions,
    bgType: this.bgType
  }
}

/**
 * Import the data exported by .export() method.
 * @param data Data exported by .export()
 * @returns Self for chaining.
 */
export function importData(
  this: RealRenderer,
  data: RealExport
) {
  this.strokes.forEach((stroke) => {
    stroke.forEach((node) => node.delete());
  })

  this.svg.setAttribute('viewBox', `0 0 ${this.dimensions[0]} ${this.dimensions[1]}`);
  if (data.bgType) this.bgType = data.bgType;

  this.strokes = [];

  data.exportData.forEach((strokeExport) => {
    this.strokes.push(
      strokeExport.map((strokeNodeData) => {
        switch(strokeNodeData.type) {
          case 'circle':
            const circ = new Circle([0, 0], 0, strokeNodeData.section ? strokeNodeData.section : 'strokes');
            circ.import(strokeNodeData.data);
            return circ;

          case 'path':
            const path = new Path('', strokeNodeData.section ? strokeNodeData.section : 'strokes');
            path.import(strokeNodeData.data);
            return path;

          case 'text':
            const text = new Text([0, 0], '', strokeNodeData.section ? strokeNodeData.section : 'strokes');
            text.import(strokeNodeData.data);
            return text;

          case 'group':
            const group = new GroupNode(strokeNodeData.section ? strokeNodeData.section : 'strokes', []);
            group.import(strokeNodeData.data);
            return group;

          case 'polygon':
            const polygon = new Polygon([], strokeNodeData.section ? strokeNodeData.section : 'strokes');
            polygon.import(strokeNodeData.data);
            return polygon;
        }
      })
    )
  })

  this._strokeIndex = data.strokeIndex;
  for (let i = 0; i <= this._strokeIndex; i++) {
    this._display(this.strokes[i]);
  }

  this.emit('import', {
    import: data
  })

  return this;
}
