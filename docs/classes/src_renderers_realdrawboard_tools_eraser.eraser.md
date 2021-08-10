[SVG Real Renderer - v0.4.0](../docs.md) / [src/renderers/RealDrawBoard/tools/eraser](../modules/src_renderers_realdrawboard_tools_eraser.md) / Eraser

# Class: Eraser

[src/renderers/RealDrawBoard/tools/eraser](../modules/src_renderers_realdrawboard_tools_eraser.md).Eraser

## Hierarchy

* *Tool*

  ↳ **Eraser**

## Table of contents

### Constructors

- [constructor](src_renderers_realdrawboard_tools_eraser.eraser.md#constructor)

### Properties

- [RDB](src_renderers_realdrawboard_tools_eraser.eraser.md#rdb)

### Methods

- [\_doStroke](src_renderers_realdrawboard_tools_eraser.eraser.md#_dostroke)
- [\_endStroke](src_renderers_realdrawboard_tools_eraser.eraser.md#_endstroke)
- [\_onKey](src_renderers_realdrawboard_tools_eraser.eraser.md#_onkey)
- [\_onLoad](src_renderers_realdrawboard_tools_eraser.eraser.md#_onload)
- [\_onScroll](src_renderers_realdrawboard_tools_eraser.eraser.md#_onscroll)
- [\_startStroke](src_renderers_realdrawboard_tools_eraser.eraser.md#_startstroke)
- [\_toolPreview](src_renderers_realdrawboard_tools_eraser.eraser.md#_toolpreview)

## Constructors

### constructor

\+ **new Eraser**(`RDB`: [*RealDrawBoard*](index.realdrawboard.md)): [*Eraser*](src_renderers_realdrawboard_tools_eraser.eraser.md)

#### Parameters:

Name | Type |
:------ | :------ |
`RDB` | [*RealDrawBoard*](index.realdrawboard.md) |

**Returns:** [*Eraser*](src_renderers_realdrawboard_tools_eraser.eraser.md)

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

Defined in: [src/renderers/RealDrawBoard/tools/eraser.ts:62](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/eraser.ts#L62)

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

Defined in: [src/renderers/RealDrawBoard/tools/eraser.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/eraser.ts#L45)

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

Defined in: [src/renderers/RealDrawBoard/tools/eraser.ts:110](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/eraser.ts#L110)

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

Defined in: [src/renderers/RealDrawBoard/tools/eraser.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/eraser.ts#L23)

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

Defined in: [src/renderers/RealDrawBoard/tools/eraser.ts:84](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/0a0696f/src/renderers/RealDrawBoard/tools/eraser.ts#L84)
