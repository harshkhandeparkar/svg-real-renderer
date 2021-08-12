[SVG Real Renderer - v0.4.1](../docs.md) / [src/renderers/RealDrawBoard/tools/brush](../modules/src_renderers_realdrawboard_tools_brush.md) / Brush

# Class: Brush

[src/renderers/RealDrawBoard/tools/brush](../modules/src_renderers_realdrawboard_tools_brush.md).Brush

## Hierarchy

* *Tool*

  ↳ **Brush**

## Table of contents

### Constructors

- [constructor](src_renderers_realdrawboard_tools_brush.brush.md#constructor)

### Properties

- [RDB](src_renderers_realdrawboard_tools_brush.brush.md#rdb)

### Methods

- [\_doStroke](src_renderers_realdrawboard_tools_brush.brush.md#_dostroke)
- [\_endStroke](src_renderers_realdrawboard_tools_brush.brush.md#_endstroke)
- [\_onKey](src_renderers_realdrawboard_tools_brush.brush.md#_onkey)
- [\_onLoad](src_renderers_realdrawboard_tools_brush.brush.md#_onload)
- [\_onScroll](src_renderers_realdrawboard_tools_brush.brush.md#_onscroll)
- [\_onUnload](src_renderers_realdrawboard_tools_brush.brush.md#_onunload)
- [\_startStroke](src_renderers_realdrawboard_tools_brush.brush.md#_startstroke)
- [\_toolPreview](src_renderers_realdrawboard_tools_brush.brush.md#_toolpreview)

## Constructors

### constructor

\+ **new Brush**(`RDB`: [*RealDrawBoard*](index.realdrawboard.md)): [*Brush*](src_renderers_realdrawboard_tools_brush.brush.md)

#### Parameters:

Name | Type |
:------ | :------ |
`RDB` | [*RealDrawBoard*](index.realdrawboard.md) |

**Returns:** [*Brush*](src_renderers_realdrawboard_tools_brush.brush.md)

Inherited from: Tool.constructor

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/_tool.ts#L6)

## Properties

### RDB

• **RDB**: [*RealDrawBoard*](index.realdrawboard.md)

Inherited from: Tool.RDB

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:6](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/_tool.ts#L6)

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

Defined in: [src/renderers/RealDrawBoard/tools/brush.ts:67](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/brush.ts#L67)

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

Defined in: [src/renderers/RealDrawBoard/tools/brush.ts:49](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/brush.ts#L49)

___

### \_onKey

▸ **_onKey**(`e`: KeyboardEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | KeyboardEvent |

**Returns:** *void*

Inherited from: Tool._onKey

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:46](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/_tool.ts#L46)

___

### \_onLoad

▸ **_onLoad**(): *void*

**Returns:** *void*

Inherited from: Tool._onLoad

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/_tool.ts#L12)

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

Defined in: [src/renderers/RealDrawBoard/tools/brush.ts:118](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/brush.ts#L118)

___

### \_onUnload

▸ **_onUnload**(): *void*

**Returns:** *void*

Inherited from: Tool._onUnload

Defined in: [src/renderers/RealDrawBoard/tools/_tool.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/_tool.ts#L14)

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

Defined in: [src/renderers/RealDrawBoard/tools/brush.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/brush.ts#L25)

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

Defined in: [src/renderers/RealDrawBoard/tools/brush.ts:89](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/renderers/RealDrawBoard/tools/brush.ts#L89)
