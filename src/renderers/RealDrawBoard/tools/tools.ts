import * as brush from './brush';
import * as eraser from './eraser';
import * as line from './line';
import * as text from './text/text';

export type Tools = {
  brush: brush.Brush,
  eraser: eraser.Eraser,
  line: line.Line,
  text: text.TextTool
}

export type Tool = typeof brush.name | typeof eraser.name | typeof line.name | typeof text.name;

export type ToolSettings = brush.IBrushSettings & eraser.IEraserSettings & line.ILineSettings & text.ITextSettings;
export const ToolDefaults: ToolSettings = {
  ...brush.BrushDefaults,
  ...line.LineDefaults,
  ...eraser.EraserDefaults,
  ...text.TextDefaults
  // ...rainbow_brush.RainbowBrushDefaults
}

export type ToolOptions = brush.BrushOptions & eraser.EraserOptions & line.LineOptions & text.TextOptions;

export { Brush as BrushTool } from './brush';
export { Eraser as EraserTool } from './eraser';
export { Line as LineTool } from './line';
export { TextTool as TextTool } from './text/text';
