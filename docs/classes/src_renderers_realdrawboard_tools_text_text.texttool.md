[SVG Real Renderer - v0.4.0](../docs.md) / [src/renderers/RealDrawBoard/tools/text/text](../modules/src_renderers_realdrawboard_tools_text_text.md) / TextTool

# Class: TextTool

[src/renderers/RealDrawBoard/tools/text/text](../modules/src_renderers_realdrawboard_tools_text_text.md).TextTool

Text Tool
HOW TO USE:
There are two modes: 'new' and 'edit'
In 'new' mode, drag on the board to insert new text, this will also change the mode to edit mode.
In 'edit' mode, type to enter text. The following keyboard shortcuts/functions are supported:
1) Arrow keys: Move the cursor.
2) Backspace
3) Shift + Enter: Add a new line.
4) Enter: Confirm editing. NOTE: The text will NOT be editable after this step. This will be changed in future version.

Cursor Styling:
The cursor is currently just a '|' character in an SVG <tspan>.
To style the cursor (blinking, color), add CSS to the `.svg-real-db-text-cursor' class.
See: /example/index.css in the repo.

## Hierarchy

* *Tool*

  ↳ **TextTool**

## Table of contents

### Constructors

- [constructor](src_renderers_realdrawboard_tools_text_text.texttool.md#constructor)

### Properties

- [RDB](src_renderers_realdrawboard_tools_text_text.texttool.md#rdb)
- [\_selectedNode](src_renderers_realdrawboard_tools_text_text.texttool.md#_selectednode)
- [\_startCoords](src_renderers_realdrawboard_tools_text_text.texttool.md#_startcoords)

### Methods

- [\_doStroke](src_renderers_realdrawboard_tools_text_text.texttool.md#_dostroke)
- [\_endStroke](src_renderers_realdrawboard_tools_text_text.texttool.md#_endstroke)
- [\_onKey](src_renderers_realdrawboard_tools_text_text.texttool.md#_onkey)
- [\_onLoad](src_renderers_realdrawboard_tools_text_text.texttool.md#_onload)
- [\_onScroll](src_renderers_realdrawboard_tools_text_text.texttool.md#_onscroll)
- [\_startStroke](src_renderers_realdrawboard_tools_text_text.texttool.md#_startstroke)
- [\_toolPreview](src_renderers_realdrawboard_tools_text_text.texttool.md#_toolpreview)

## Constructors

### constructor

\+ **new TextTool**(`RDB`: [*RealDrawBoard*](index.realdrawboard.md)): [*TextTool*](src_renderers_realdrawboard_tools_text_text.texttool.md)

#### Parameters:

Name | Type |
:------ | :------ |
`RDB` | [*RealDrawBoard*](index.realdrawboard.md) |

**Returns:** [*TextTool*](src_renderers_realdrawboard_tools_text_text.texttool.md)

Inherited from: Tool.constructor

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/_tool.ts#L6)

## Properties

### RDB

• **RDB**: [*RealDrawBoard*](index.realdrawboard.md)

Inherited from: Tool.RDB

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/_tool.ts#L6)

___

### \_selectedNode

• **\_selectedNode**: *Text*= null

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L45)

___

### \_startCoords

• **\_startCoords**: *Map*<string, [*number*, *number*]\>

key -> identifier, value -> coordinate
 For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:44](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L44)

## Methods

### \_doStroke

▸ **_doStroke**(`coords`: [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate), `identifier`: *string*, `target`: EventTarget): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`coords` | [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate) |
`identifier` | *string* |
`target` | EventTarget |

**Returns:** *void*

Overrides: Tool._doStroke

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:117](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L117)

___

### \_endStroke

▸ **_endStroke**(`endCoords`: [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate), `identifier`: *string*, `target`: EventTarget): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`endCoords` | [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate) |
`identifier` | *string* |
`target` | EventTarget |

**Returns:** *void*

Overrides: Tool._endStroke

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:82](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L82)

___

### \_onKey

▸ **_onKey**(`e`: KeyboardEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | KeyboardEvent |

**Returns:** *void*

Overrides: Tool._onKey

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:136](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L136)

___

### \_onLoad

▸ **_onLoad**(): *void*

**Returns:** *void*

Overrides: Tool._onLoad

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L47)

___

### \_onScroll

▸ **_onScroll**(`scrollDelta`: *number*, `coords`: [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate), `identifier`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`scrollDelta` | *number* |
`coords` | [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate) |
`identifier` | *string* |

**Returns:** *void*

Inherited from: Tool._onScroll

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/_tool.ts#L38)

___

### \_startStroke

▸ **_startStroke**(`coords`: [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate), `identifier`: *string*, `target`: EventTarget): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`coords` | [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate) |
`identifier` | *string* |
`target` | EventTarget |

**Returns:** *void*

Overrides: Tool._startStroke

Defined in: [src/renderers/RealDrawBoard/tools/text/text.ts:60](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/text/text.ts#L60)

___

### \_toolPreview

▸ **_toolPreview**(`coords`: [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate), `identifier`: *string*, `target`: EventTarget): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`coords` | [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate) |
`identifier` | *string* |
`target` | EventTarget |

**Returns:** *void*

Inherited from: Tool._toolPreview

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealDrawBoard/tools/_tool.ts#L32)
