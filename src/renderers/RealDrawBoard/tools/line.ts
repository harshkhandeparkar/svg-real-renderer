import { RealDrawBoard } from '../RealDrawBoard';
import { Color, Coordinate } from '../../../types/RealRendererTypes';
import { getCircleNode } from '../../../pathMakers/circle';
import { getRGBColorString } from '../../../util/getRGBColorString';
import { Path } from '../../RealRenderer/strokeNodes/_path';
import { getLinePathCommand } from '../../../pathMakers/line';
import { Circle } from '../../RealRenderer/strokeNodes/_circle';
import { GroupNode } from '../../RealRenderer/strokeNodes/_group';

import { getRadiusFromThickness } from './util/getRadiusFromThickness';
import { Tool } from './_tool';

export const name = 'line';

export interface ILineSettings {
  lineThickness: number;
  lineColor: Color;
}

export type LineOptions = ILineSettings | {};

export const LineDefaults: ILineSettings = {
  lineThickness: 1,
  lineColor: [1, 1, 1]
}

export class Line extends Tool {
  /** key -> identifier, value -> coordinate
   *  For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier
   */
  private _startCoords: Map<string, [number, number]> = new Map(); /* key -> identifier, value -> coordinate*/

  public _startStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    this.RDB._doPreview = false;
    if (this.RDB._previewStroke.has(identifier)) {
      this.RDB._previewStroke.get(identifier).forEach((strokeNode) => {
        strokeNode.delete();
      })
    }

    const linePath = new Path('', 'strokes');
    linePath.setStroke(getRGBColorString(this.RDB.toolSettings.lineColor));
    linePath.setStrokeWidth(this.RDB.toolSettings.lineThickness);

    const startCircle = getCircleNode(
      coords,
      getRadiusFromThickness(this.RDB.toolSettings.lineThickness),
      this.RDB.toolSettings.lineColor,
      'strokes'
    )

    const endCircle = getCircleNode(
      coords,
      getRadiusFromThickness(this.RDB.toolSettings.lineThickness),
      this.RDB.toolSettings.lineColor,
      'strokes'
    )

    this.RDB._addStroke([new GroupNode('strokes', [linePath, startCircle, endCircle])]);
    this.RDB._strokeIdentifierMap.set(identifier, this.RDB._strokeIndex);

    this._startCoords.set(identifier, coords);
  }

  public _endStroke(
    endCoords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    const lineNode = <GroupNode>this.RDB.strokes[this.RDB._strokeIdentifierMap.get(identifier)][0];

    (<Path>lineNode.innerNodes[0]).updatePath(
      getLinePathCommand(
        this._startCoords.get(identifier),
        endCoords
      )
    );

    (<Circle>lineNode.innerNodes[2]).updateCenter(endCoords);

    this._startCoords.delete(identifier);
    this.RDB._doPreview = true;
  }

  public _doStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    const lineNode = <GroupNode>this.RDB.strokes[this.RDB._strokeIndex][0];

    (<Path>lineNode.innerNodes[0]).updatePath(
      getLinePathCommand(
        this._startCoords.get(identifier),
        coords
      )
    );

    (<Circle>lineNode.innerNodes[2]).updateCenter(coords);
  }

  public _toolPreview(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {
    if (this.RDB._previewStroke.get(identifier).length == 0) {
      const circleNode = getCircleNode(
        coords,
        getRadiusFromThickness(this.RDB.toolSettings.lineThickness),
        this.RDB.toolSettings.lineColor,
        'overlay'
      )

      circleNode.setFill(getRGBColorString(this.RDB.toolSettings.lineColor));
      circleNode.setStroke(getRGBColorString(this.RDB.toolSettings.lineColor));

      this.RDB._previewStroke.get(identifier).push(circleNode);
    }
    else {
      const circleNode = <Circle>this.RDB._previewStroke.get(identifier)[0]
      circleNode.updateCenter(coords);
      circleNode.updateRadius(getRadiusFromThickness(this.RDB.toolSettings.lineThickness));
      circleNode.setFill(getRGBColorString(this.RDB.toolSettings.lineColor));
      circleNode.setStroke(getRGBColorString(this.RDB.toolSettings.lineColor));
    }
  }

  public _onScroll(
    scrollDelta: number,
    coords: Coordinate,
    identifier: string
  ) {
    this.RDB.changeToolSetting('lineThickness', Math.max(1, this.RDB.toolSettings.lineThickness - scrollDelta));

    if (this.RDB._previewStroke.get(identifier) != null && this.RDB._previewStroke.get(identifier).length !== 0) {
      (this.RDB._previewStroke.get(identifier)[0] as Circle).updateRadius(getRadiusFromThickness(this.RDB.toolSettings.lineThickness));
      this.RDB._display(this.RDB._previewStroke.get(identifier));
    }
  }
}
