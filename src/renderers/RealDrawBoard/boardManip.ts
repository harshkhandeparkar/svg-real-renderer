import { RealDrawBoard } from './RealDrawBoard';
import { Tool, tools, ToolSettings } from './tools/tools';
import { getBlankGraphPath } from '../../pathMakers/blankGraph';

export function changeTool(this: RealDrawBoard, newTool: Tool) {
  this.tool = newTool;
  this._startStroke = tools[this.tool]._startStroke;
  this._doStroke = tools[this.tool]._doStroke;
  this._endStroke = tools[this.tool]._endStroke;
  this._toolPreview = tools[this.tool]._toolPreview;

  this._previewStroke.forEach((stroke) => {
    stroke.forEach((node) => {
      node.delete();
    })
  })

  this._previewStroke.clear();

  return this;
}

export function changeToolSetting(
  this: RealDrawBoard,
  settingName: keyof ToolSettings,
  value: any
) {
  this.toolSettings[settingName] = value;

  return this;
}

export function clear(this: RealDrawBoard) {
  this._strokeIndex = 0;
  this._lastCoords.clear();

  this.strokes.forEach((stroke) => {
    stroke.forEach((strokeNode) => strokeNode.delete());
  })

  this.strokes = [
    [
      getBlankGraphPath(
        this.dimensions,
        this.xOffset,
        this.yOffset,
        this.axesColor,
        this.drawAxes
      )
    ]
  ]
  this._display(this.strokes[this._strokeIndex]);

  return this;
}

export function _resetBoard(this: RealDrawBoard) {
  this.xScaleFactor = this.options.xScaleFactor;
  this.yScaleFactor = this.options.yScaleFactor;
  this.bgColor = this.options.bgColor;
  this.tool = this.options.tool;
  this.toolSettings = this.options.toolSettings;

  this._lastCoords.clear();

  this.stopRender();
}
