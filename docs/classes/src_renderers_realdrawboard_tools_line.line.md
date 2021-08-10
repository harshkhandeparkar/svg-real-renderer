[SVG Real Renderer - v0.4.0](../docs.md) / [src/renderers/RealDrawBoard/tools/line](../modules/src_renderers_realdrawboard_tools_line.md) / Line

# Class: Line

[src/renderers/RealDrawBoard/tools/line](../modules/src_renderers_realdrawboard_tools_line.md).Line

## Hierarchy

* *Tool*

  ↳ **Line**

## Table of contents

### Constructors

- [constructor](src_renderers_realdrawboard_tools_line.line.md#constructor)

### Properties

- [RDB](src_renderers_realdrawboard_tools_line.line.md#rdb)

### Methods

- [\_doStroke](src_renderers_realdrawboard_tools_line.line.md#_dostroke)
- [\_endStroke](src_renderers_realdrawboard_tools_line.line.md#_endstroke)
- [\_onKey](src_renderers_realdrawboard_tools_line.line.md#_onkey)
- [\_onLoad](src_renderers_realdrawboard_tools_line.line.md#_onload)
- [\_onScroll](src_renderers_realdrawboard_tools_line.line.md#_onscroll)
- [\_startStroke](src_renderers_realdrawboard_tools_line.line.md#_startstroke)
- [\_toolPreview](src_renderers_realdrawboard_tools_line.line.md#_toolpreview)

## Constructors

### constructor

\+ **new Line**(`RDB`: [*RealDrawBoard*](index.realdrawboard.md)): [*Line*](src_renderers_realdrawboard_tools_line.line.md)

#### Parameters:

Name | Type |
:------ | :------ |
`RDB` | [*RealDrawBoard*](index.realdrawboard.md) |

**Returns:** [*Line*](src_renderers_realdrawboard_tools_line.line.md)

Inherited from: Tool.constructor

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/_tool.ts#L6)

## Properties

### RDB

• **RDB**: [*RealDrawBoard*](index.realdrawboard.md)

Inherited from: Tool.RDB

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/_tool.ts#L6)

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

Defined in: [src/renderers/RealDrawBoard/tools/line.ts:87](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/line.ts#L87)

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

Defined in: [src/renderers/RealDrawBoard/tools/line.ts:67](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/line.ts#L67)

___

### \_onKey

▸ **_onKey**(`e`: KeyboardEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | KeyboardEvent |

**Returns:** *void*

Inherited from: Tool._onKey

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:44](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/_tool.ts#L44)

___

### \_onLoad

▸ **_onLoad**(): *void*

**Returns:** *void*

Inherited from: Tool._onLoad

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/_tool.ts#L12)

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

Overrides: Tool._onScroll

Defined in: [src/renderers/RealDrawBoard/tools/line.ts:131](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/line.ts#L131)

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

Defined in: [src/renderers/RealDrawBoard/tools/line.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/line.ts#L31)

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

Overrides: Tool._toolPreview

Defined in: [src/renderers/RealDrawBoard/tools/line.ts:104](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/line.ts#L104)
