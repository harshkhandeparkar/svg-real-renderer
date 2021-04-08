import * as brush from './brush';
import * as eraser from './eraser';
import * as line from './line';
// import * as rainbow_brush from './rainbow_brush';

export const tools = {
  brush,
  // rainbow_brush,
  eraser,
  line
}

export type Tool = 'brush' | 'eraser' | 'line';

export type ToolSettings = brush.IBrushSettings & eraser.IEraserSettings & line.ILineSettings;
export const ToolDefaults: ToolSettings = {
  ...brush.BrushDefaults,
  ...line.LineDefaults,
  ...eraser.EraserDefaults,
  // ...rainbow_brush.RainbowBrushDefaults
}
export type ToolOptions = brush.BrushOptions & eraser.EraserOptions & line.LineOptions;
