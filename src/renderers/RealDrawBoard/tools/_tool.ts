import { Coordinate } from '../../../types/RealRendererTypes';
import { RealDrawBoard } from '../RealDrawBoard';

/** @internal */
export abstract class Tool {
  RDB: RealDrawBoard;

  constructor(RDB: RealDrawBoard) {
    this.RDB = RDB;
  }

  public _onLoad() {}

  public _onUnload() {}

  public _startStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {}

  public _doStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {}

  public _endStroke(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {}

  public _toolPreview(
    coords: Coordinate,
    identifier: string,
    target: EventTarget
  ) {}

  public _onScroll(
    scrollDelta: number,
    coords: Coordinate,
    identifier: string
  ) {}

  public _onKey(e: KeyboardEvent) {}
}
