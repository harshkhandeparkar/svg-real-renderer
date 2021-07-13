import * as brush from './brush';
import * as eraser from './eraser';
import * as line from './line';
import * as text from './text/text';
// import * as rainbow_brush from './rainbow_brush';

export const tools = {
  brush,
  // rainbow_brush,
  eraser,
  line,
  text
}

export type Tool = 'brush' | 'eraser' | 'line' | 'text';

export type ToolSettings = brush.IBrushSettings & eraser.IEraserSettings & line.ILineSettings & text.ITextSettings;
export const ToolDefaults: ToolSettings = {
  ...brush.BrushDefaults,
  ...line.LineDefaults,
  ...eraser.EraserDefaults,
  ...text.TextDefaults
  // ...rainbow_brush.RainbowBrushDefaults
}
export type ToolOptions = brush.BrushOptions & eraser.EraserOptions & line.LineOptions & text.TextOptions;
