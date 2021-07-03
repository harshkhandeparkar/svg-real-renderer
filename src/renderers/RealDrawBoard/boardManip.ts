import { RealDrawBoard } from './RealDrawBoard';
import { Tool, ToolDefaults, tools, ToolSettings } from './tools/tools';
import { getBlankGraphPaths } from '../../pathMakers/blankGraph';

/**
 * Change the currently selected tool on the draw board.
 * @param newTool
 * @returns Self for chaining.
 */
export function changeTool(this: RealDrawBoard, newTool: Tool) {
  const oldTool = this.tool;
  this.tool = newTool;
  this._startStroke = tools[this.tool]._startStroke;
  this._doStroke = tools[this.tool]._doStroke;
  this._endStroke = tools[this.tool]._endStroke;
  this._toolPreview = tools[this.tool]._toolPreview;
  this._onScroll = tools[this.tool]._onScroll;
  this._onKey = tools[this.tool]._onKey;

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

/**
 * Change a tool setting.
 * @param settingName Name of the tool setting.
 * @param value New value for the setting.
 * @returns Self for chaining.
 */
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

/**
 * Clear all tool previews.
 * @returns Self for chaining.
 */
export function clearPreview(this: RealDrawBoard) {
  this._previewStroke.forEach((stroke) => {
    stroke.forEach((node) => {
      node.delete();
    })
  })

  this._previewStroke.clear();

  return this;
}

/**
 * Clear the board without resetting any parameters.
 * @returns Self for chaining.
 */
export function clear(this: RealDrawBoard) {
  if (this._strokeIndex > 0) {
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
  }
  return this;

}

/**
 * @internal
 */
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
