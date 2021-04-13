import { RealDrawBoard } from './RealDrawBoard';
import { Tool, ToolDefaults, tools, ToolSettings } from './tools/tools';
import { getBlankGraphPaths } from '../../pathMakers/blankGraph';

export function changeTool(this: RealDrawBoard, newTool: Tool) {
  const oldTool = this.tool;
  this.tool = newTool;
  this._startStroke = tools[this.tool]._startStroke;
  this._doStroke = tools[this.tool]._doStroke;
  this._endStroke = tools[this.tool]._endStroke;
  this._toolPreview = tools[this.tool]._toolPreview;
  this._onScroll = tools[this.tool]._onScroll;

  this._previewStroke.forEach((stroke) => {
    stroke.forEach((node) => {
      node.delete();
    })
  })

  this._previewStroke.clear();

  this.emit('tool-change', {
    newTool,
    oldTool
  })

  return this;
}

export function changeToolSetting<SettingName extends keyof ToolSettings>(
  this: RealDrawBoard,
  settingName: SettingName,
  value: ToolSettings[SettingName]
) {
  const oldValue = this.toolSettings[settingName];

  this.toolSettings[settingName] = value;
  this.emit('tool-setting-change', {
    settingName: settingName,
    newValue: value,
    oldValue
  })

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
      this.bgColor,
      this.bgType
    )
  ]
  this._display(this.strokes[this._strokeIndex]);

  this.emit('board-cleared', {});
  return this;
}

export function _resetBoard(this: RealDrawBoard) {
  this.bgColor = this.settings.bgColor;
  this.tool = this.settings.tool;
  this.toolSettings = {
    ...ToolDefaults,
    ...this.settings.toolSettings
  }

  this._lastCoords.clear();

  this.stopRender();

  this.emit('board-reset', {});

  return this;
}
