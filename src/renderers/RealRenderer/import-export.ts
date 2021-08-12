import { IRealExportV2, RealExport, StrokeExportV2 } from '../../types/RealRendererTypes';
import { RealRenderer } from './RealRenderer';
import { Circle } from './strokeNodes/_circle';
import { GroupNode } from './strokeNodes/_group';
import { Path } from './strokeNodes/_path';
import { Polygon } from './strokeNodes/_polygon';
import { Text } from './strokeNodes/_text/_text';

/**
 * Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().
 * @returns Data of the graph in a storable and loadable format.
 */
export function exportData(this: RealRenderer): IRealExportV2 {
  this._beforeExport();

  const strokeExport: StrokeExportV2[] = [];

  this.strokes.forEach((stroke) => {
    strokeExport.push(
      stroke.map((node) => node.export())
    )
  })

  return {
    version: 2,
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
  this.bgType = data.bgType ?? this.bgType;

  this.strokes = [];

  if ('version' in data) {
    if (data.version === 2) {
      data.exportData.forEach((strokeExport) => {
        this.strokes.push(
          strokeExport.map((strokeNodeData) => {
            switch(strokeNodeData.type) {
              case 'circle':
                const circ = new Circle([0, 0], 0, strokeNodeData.section ?? 'strokes');
                circ.import(strokeNodeData);
                return circ;

              case 'path':
                const path = new Path('', strokeNodeData.section ?? 'strokes');
                path.import(strokeNodeData);
                return path;

              case 'text':
                const text = new Text([0, 0], '', strokeNodeData.section ?? 'strokes');
                text.import(strokeNodeData);
                return text;

              case 'group':
                const group = new GroupNode(strokeNodeData.section ?? 'strokes', []);
                group.import(strokeNodeData);
                return group;

              case 'polygon':
                const polygon = new Polygon([], strokeNodeData.section ?? 'strokes');
                polygon.import(strokeNodeData);
                return polygon;
            }
          })
        )
      })
    }
  }
  else {
    // legacy deprecated unsafe
    data.exportData.forEach((strokeExport) => {
      this.strokes.push(
        strokeExport.map((strokeNodeData) => {
          switch(strokeNodeData.type) {
            case 'circle':
              const circ = new Circle([0, 0], 0, strokeNodeData.section ?? 'strokes');
              circ.importV1(strokeNodeData.data);
              return circ;

            case 'path':
              const path = new Path('', strokeNodeData.section ?? 'strokes');
              path.importV1(strokeNodeData.data);
              return path;

            case 'text':
              const text = new Text([0, 0], '', strokeNodeData.section ?? 'strokes');
              text.importV1(strokeNodeData.data);
              return text;

            case 'group':
              const group = new GroupNode(strokeNodeData.section ?? 'strokes', []);
              group.importV1(strokeNodeData.data);
              return group;

            case 'polygon':
              const polygon = new Polygon([], strokeNodeData.section ?? 'strokes');
              polygon.importV1(strokeNodeData.data);
              return polygon;
          }
        })
      )
    })
  }

  this._strokeIndex = data.strokeIndex;
  for (let i = 0; i <= this._strokeIndex; i++) {
    this._display(this.strokes[i]);
  }

  this.emit('import', {
    import: data
  })

  return this;
}

export function getExportVersion(data: RealExport) {
  if ('version' in data) return data.version;
  else return 1;
}
