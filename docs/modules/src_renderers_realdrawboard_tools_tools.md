[SVG Real Renderer - v0.4.0](../docs.md) / src/renderers/RealDrawBoard/tools/tools

# Module: src/renderers/RealDrawBoard/tools/tools

## Table of contents

### References

- [BrushTool](src_renderers_realdrawboard_tools_tools.md#brushtool)
- [EraserTool](src_renderers_realdrawboard_tools_tools.md#erasertool)
- [LineTool](src_renderers_realdrawboard_tools_tools.md#linetool)
- [TextTool](src_renderers_realdrawboard_tools_tools.md#texttool)

### Type aliases

- [Tool](src_renderers_realdrawboard_tools_tools.md#tool)
- [ToolOptions](src_renderers_realdrawboard_tools_tools.md#tooloptions)
- [ToolSettings](src_renderers_realdrawboard_tools_tools.md#toolsettings)
- [Tools](src_renderers_realdrawboard_tools_tools.md#tools)

### Variables

- [ToolDefaults](src_renderers_realdrawboard_tools_tools.md#tooldefaults)

## References

### BrushTool

Renames and exports: [Brush](../classes/src_renderers_realdrawboard_tools_brush.brush.md)

___

### EraserTool

Renames and exports: [Eraser](../classes/src_renderers_realdrawboard_tools_eraser.eraser.md)

___

### LineTool

Renames and exports: [Line](../classes/src_renderers_realdrawboard_tools_line.line.md)

___

### TextTool

Re-exports: [TextTool](../classes/src_renderers_realdrawboard_tools_text_text.texttool.md)

## Type aliases

### Tool

Ƭ **Tool**: *typeof* [*name*](src_renderers_realdrawboard_tools_brush.md#name) \| *typeof* [*name*](src_renderers_realdrawboard_tools_eraser.md#name) \| *typeof* [*name*](src_renderers_realdrawboard_tools_line.md#name) \| *typeof* [*name*](src_renderers_realdrawboard_tools_text_text.md#name)

Defined in: [src/renderers/RealDrawBoard/tools/tools.ts:13](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/tools.ts#L13)

___

### ToolOptions

Ƭ **ToolOptions**: [*BrushOptions*](src_renderers_realdrawboard_tools_brush.md#brushoptions) & [*EraserOptions*](src_renderers_realdrawboard_tools_eraser.md#eraseroptions) & [*LineOptions*](src_renderers_realdrawboard_tools_line.md#lineoptions) & [*TextOptions*](src_renderers_realdrawboard_tools_text_text.md#textoptions)

Defined in: [src/renderers/RealDrawBoard/tools/tools.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/tools.ts#L24)

___

### ToolSettings

Ƭ **ToolSettings**: [*IBrushSettings*](../interfaces/src_renderers_realdrawboard_tools_brush.ibrushsettings.md) & [*IEraserSettings*](../interfaces/src_renderers_realdrawboard_tools_eraser.ierasersettings.md) & [*ILineSettings*](../interfaces/src_renderers_realdrawboard_tools_line.ilinesettings.md) & [*ITextSettings*](../interfaces/src_renderers_realdrawboard_tools_text_text.itextsettings.md)

Defined in: [src/renderers/RealDrawBoard/tools/tools.ts:15](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/tools.ts#L15)

___

### Tools

Ƭ **Tools**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`brush` | [*Brush*](../classes/src_renderers_realdrawboard_tools_brush.brush.md) |
`eraser` | [*Eraser*](../classes/src_renderers_realdrawboard_tools_eraser.eraser.md) |
`line` | [*Line*](../classes/src_renderers_realdrawboard_tools_line.line.md) |
`text` | [*TextTool*](../classes/src_renderers_realdrawboard_tools_text_text.texttool.md) |

Defined in: [src/renderers/RealDrawBoard/tools/tools.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/tools.ts#L6)

## Variables

### ToolDefaults

• `Const` **ToolDefaults**: [*ToolSettings*](src_renderers_realdrawboard_tools_tools.md#toolsettings)

Defined in: [src/renderers/RealDrawBoard/tools/tools.ts:16](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/tools.ts#L16)
