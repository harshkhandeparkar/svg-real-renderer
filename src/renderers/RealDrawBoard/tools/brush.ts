import { RealDrawBoard } from '../RealDrawBoard';
import { Tool } from './_tool';

import { Color, Coordinate } from '../../../types/RealRendererTypes';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';

import { getRadiusFromThickness } from './util/getRadiusFromThickness';

export const name = 'brush';

export interface IBrushSettings {
  brushColor: Color;
  brushSize: number;
}

export type BrushOptions = IBrushSettings | {};

export const BrushDefaults: IBrushSettings = {
  brushColor: [1, 1, 1],
  brushSize: 1
}

export class Brush extends Tool {
  public _startStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    this.RDB._doPreview = false;

    const brushPath = new Path('', 'strokes');
    brushPath.setStroke(getRGBColorString(this.RDB.toolSettings.brushColor));
    brushPath.setStrokeWidth(this.RDB.toolSettings.brushSize);

    this.RDB._addStroke([brushPath]);
    this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);

    this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(
      getCircleNode(
        coords,
        getRadiusFromThickness(this.RDB.toolSettings.brushSize),
        this.RDB.toolSettings.brushColor,
        'strokes'
      )
    )
  }

  public _endStroke(
    endCoords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(
      getCircleNode(
        endCoords,
        getRadiusFromThickness(this.RDB.toolSettings.brushSize),
        this.RDB.toolSettings.brushColor,
        'strokes'
      )
    )

    this.RDB._strokeIdentifierMap.delete(identifier);
    this.RDB._doPreview = true;
  }

  public _doStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(
      getCircleNode(
        coords,
        getRadiusFromThickness(this.RDB.toolSettings.brushSize),
        this.RDB.toolSettings.brushColor,
        'strokes'
      )
    );

    (<Path>this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)][0]).appendPath(
      getLinePathCommand(
        this.RDB._lastCoords.get(identifier),
        coords
      )
    )
  }

  public _toolPreview(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    if (!this.RDB._previewStroke.has(identifier)) this.RDB._previewStroke.set(identifier, []);

    if (this.RDB._previewStroke.get(identifier).length == 0) {
      const circleNode = getCircleNode(
        coords,
        getRadiusFromThickness(this.RDB.toolSettings.brushSize),
        this.RDB.toolSettings.brushColor,
        'overlay'
      )

      circleNode.setFill(getRGBColorString(this.RDB.toolSettings.brushColor));
      circleNode.setStroke(getRGBColorString(this.RDB.toolSettings.brushColor));

      this.RDB._previewStroke.get(identifier).push(circleNode);
    }
    else {
      const circleNode = <Circle>this.RDB._previewStroke.get(identifier)[0];
      circleNode.updateCenter(coords);
      circleNode.updateRadius(getRadiusFromThickness(this.RDB.toolSettings.brushSize));
      circleNode.setFill(getRGBColorString(this.RDB.toolSettings.brushColor));
      circleNode.setStroke(getRGBColorString(this.RDB.toolSettings.brushColor));
    }
  }

  public _onScroll(
    scrollDelta: number,
    coords: Coordinate,
    identifier: string
  ) {
    this.RDB.changeToolSetting('brushSize', Math.max(1, this.RDB.toolSettings.brushSize - scrollDelta));

    if (this.RDB._previewStroke.get(identifier) && this.RDB._previewStroke.get(identifier).length !== 0) {
      (this.RDB._previewStroke.get(identifier)[0] as Circle).updateRadius(getRadiusFromThickness(this.RDB.toolSettings.brushSize));
      this.RDB._display(this.RDB._previewStroke.get(identifier));
    }
  }
}
