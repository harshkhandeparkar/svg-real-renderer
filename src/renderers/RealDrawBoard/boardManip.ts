import { RealDrawBoard } from './RealDrawBoard';
import { Tool, ToolDefaults, tools, ToolSettings } from './tools/tools';
import { getBlankGraphPaths } from '../../pathMakers/blankGraph';

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

export function clearPreview(this: RealDrawBoard) {
  this._previewStroke.forEach((stroke) => {
    stroke.forEach((node) => {
      node.delete();
    })
  })

  this._previewStroke.clear();

  return this;
}

export function clear(this: RealDrawBoard) {
  this._strokeIndex = 0;
  this._lastCoords.clear();

  this.strokes.forEach((stroke) => {
    stroke.forEach((strokeNode) => strokeNode.delete());
  })

  this.strokes = [
    getBlankGraphPaths(
      this.dimensions,
      this.xOffset,
      this.yOffset,
      this.bgColor,
      this.bgType
    )
  ]
  this._display(this.strokes[this._strokeIndex]);

  return this;
}

export function _resetBoard(this: RealDrawBoard) {
  this.yScaleFactor = this.settings.yScaleFactor;
  this.bgColor = this.settings.bgColor;
  this.tool = this.settings.tool;
  this.toolSettings = {
    ...ToolDefaults,
    ...this.settings.toolSettings
  }

  this._lastCoords.clear();

  this.stopRender();
}
