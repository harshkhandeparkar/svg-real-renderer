import { getCircleNode } from '../../../pathMakers/circle';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Color, Coordinate } from '../../../types/RealRendererTypes';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { RealDrawBoard } from '../RealDrawBoard';
import { getRadiusFromThickness } from './util/getRadiusFromThickness';
import { Tool } from './_tool';

export const name = 'eraser';

export interface IEraserSettings {
  eraserSize: number;
}

export type EraserOptions = IEraserSettings | {};

export const EraserDefaults: IEraserSettings = {
  eraserSize: 2
}

export class Eraser extends Tool {
  public _startStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    const brushPath = new Path('', 'strokes');
    brushPath.setStroke(getRGBColorString(this.RDB.bgColor));
    brushPath.setStrokeWidth(this.RDB.toolSettings.eraserSize);

    this.RDB._addStroke([brushPath]);
    this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);

    this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)].push(
      getCircleNode(
        coords,
        getRadiusFromThickness(this.RDB.toolSettings.eraserSize),
        this.RDB.bgColor,
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
        getRadiusFromThickness(this.RDB.toolSettings.eraserSize),
        this.RDB.bgColor,
        'strokes'
      )
    )

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
        getRadiusFromThickness(this.RDB.toolSettings.eraserSize),
        this.RDB.bgColor,
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
    if (this.RDB._previewStroke.get(identifier).length == 0) {
      const circleNode = getCircleNode(
        coords,
        getRadiusFromThickness(this.RDB.toolSettings.eraserSize),
        this.RDB.bgColor,
        'overlay'
      )

      circleNode.setFill(getRGBColorString(this.RDB.bgColor));
      circleNode.setStroke(getRGBColorString(this.RDB.bgColor));
      circleNode.setDashed(getRGBColorString(this.RDB.bgColor.map((c) => 1 - c) as Color));

      this.RDB._previewStroke.get(identifier).push(circleNode);
    }
    else {
      const circleNode = <Circle>this.RDB._previewStroke.get(identifier)[0]
      circleNode.updateCenter(coords);
      circleNode.updateRadius(getRadiusFromThickness(this.RDB.toolSettings.eraserSize));
    }
  }

  public _onScroll(
    scrollDelta: number,
    coords: Coordinate,
    identifier: string
  ) {
    this.RDB.changeToolSetting('eraserSize', Math.max(1, this.RDB.toolSettings.eraserSize - scrollDelta));

    if (this.RDB._previewStroke.get(identifier) != null && this.RDB._previewStroke.get(identifier).length !== 0) {
      (this.RDB._previewStroke.get(identifier)[0] as Circle).updateRadius(getRadiusFromThickness(this.RDB.toolSettings.eraserSize));
      this.RDB._display(this.RDB._previewStroke.get(identifier));
    }
  }
}
