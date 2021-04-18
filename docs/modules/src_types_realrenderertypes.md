[SVG Real Renderer - v0.3.8](../docs.md) / src/types/RealRendererTypes

# Module: src/types/RealRendererTypes

## Table of contents

### Interfaces

- [IRealRendererNonOptionals](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md)
- [IRealRendererOptionals](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md)

### Type aliases

- [BGAxes](src_types_realrenderertypes.md#bgaxes)
- [BGGrid](src_types_realrenderertypes.md#bggrid)
- [BGNone](src_types_realrenderertypes.md#bgnone)
- [BGRuled](src_types_realrenderertypes.md#bgruled)
- [BGType](src_types_realrenderertypes.md#bgtype)
- [Color](src_types_realrenderertypes.md#color)
- [Coordinate](src_types_realrenderertypes.md#coordinate)
- [GraphDimensions](src_types_realrenderertypes.md#graphdimensions)
- [RealExport](src_types_realrenderertypes.md#realexport)
- [RealRendererOptions](src_types_realrenderertypes.md#realrendereroptions)
- [RealRendererParameters](src_types_realrenderertypes.md#realrendererparameters)
- [RealRendererSettings](src_types_realrenderertypes.md#realrenderersettings)
- [SVGSection](src_types_realrenderertypes.md#svgsection)
- [SVGSections](src_types_realrenderertypes.md#svgsections)
- [Stroke](src_types_realrenderertypes.md#stroke)
- [StrokeExport](src_types_realrenderertypes.md#strokeexport)
- [StrokeNode](src_types_realrenderertypes.md#strokenode)
- [StrokeNodeData](src_types_realrenderertypes.md#strokenodedata)

## Type aliases

### BGAxes

Ƭ **BGAxes**: *object*

Backround with axes.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`axesColor` | [*Color*](src_types_realrenderertypes.md#color) | - |
`type` | *axes* | - |
`xOffset` | *number* | %age offset of the y-axis (in the x-direction).   |
`yOffset` | *number* | %age offset of the x-axis (in the y-direction).   |

Defined in: [src/types/RealRendererTypes.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L45)

___

### BGGrid

Ƭ **BGGrid**: *object*

Background with grid.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`lineColor` | [*Color*](src_types_realrenderertypes.md#color) | - |
`type` | *grid* | - |
`xSpacing` | *number* | Percentage spacing between the vertical grid lines lines.   |
`ySpacing` | *number* | Percentage spacing between the horizontal grid lines lines.   |

Defined in: [src/types/RealRendererTypes.ts:74](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L74)

___

### BGNone

Ƭ **BGNone**: *object*

Solid background.

#### Type declaration:

Name | Type |
:------ | :------ |
`type` | *none* |

Defined in: [src/types/RealRendererTypes.ts:90](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L90)

___

### BGRuled

Ƭ **BGRuled**: *object*

Ruled background.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`lineColor` | [*Color*](src_types_realrenderertypes.md#color) | - |
`orientation` | *vertical* \| *horizontal* | - |
`spacing` | *number* | Percentage spacing between the ruled lines.   |
`type` | *ruled* | - |

Defined in: [src/types/RealRendererTypes.ts:61](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L61)

___

### BGType

Ƭ **BGType**: [*BGNone*](src_types_realrenderertypes.md#bgnone) \| [*BGRuled*](src_types_realrenderertypes.md#bgruled) \| [*BGGrid*](src_types_realrenderertypes.md#bggrid) \| [*BGAxes*](src_types_realrenderertypes.md#bgaxes)

Defined in: [src/types/RealRendererTypes.ts:94](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L94)

___

### Color

Ƭ **Color**: [*number*, *number*, *number*]

An array of R, G and B colors ranging between 0 and 1.

Defined in: [src/types/RealRendererTypes.ts:13](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L13)

___

### Coordinate

Ƭ **Coordinate**: [*number*, *number*]

A coordinate in the format [x, y].

Defined in: [src/types/RealRendererTypes.ts:17](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L17)

___

### GraphDimensions

Ƭ **GraphDimensions**: [*number*, *number*]

Dimensions of the graph in the format [width, height].

Defined in: [src/types/RealRendererTypes.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L9)

___

### RealExport

Ƭ **RealExport**: *object*

Data format for graph data exported  by Real Renderers

#### Type declaration:

Name | Type |
:------ | :------ |
`dimensions` | [*GraphDimensions*](src_types_realrenderertypes.md#graphdimensions) |
`exportData` | [*StrokeExport*](src_types_realrenderertypes.md#strokeexport)[] |
`strokeIndex` | *number* |

Defined in: [src/types/RealRendererTypes.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L36)

___

### RealRendererOptions

Ƭ **RealRendererOptions**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md) \| {}

Defined in: [src/types/RealRendererTypes.ts:126](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L126)

___

### RealRendererParameters

Ƭ **RealRendererParameters**: [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md) \| {}

Defined in: [src/types/RealRendererTypes.ts:127](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L127)

___

### RealRendererSettings

Ƭ **RealRendererSettings**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md)

Defined in: [src/types/RealRendererTypes.ts:125](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L125)

___

### SVGSection

Ƭ **SVGSection**: *bg* \| *strokes* \| *overlay*

Defined in: [src/types/RealRendererTypes.ts:19](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L19)

___

### SVGSections

Ƭ **SVGSections**: { [Property in SVGSection]: SVGGElement}

Defined in: [src/types/RealRendererTypes.ts:20](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L20)

___

### Stroke

Ƭ **Stroke**: [*StrokeNode*](src_types_realrenderertypes.md#strokenode)[]

One stroke is an combination of multiple stroke nodes

Defined in: [src/types/RealRendererTypes.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L26)

___

### StrokeExport

Ƭ **StrokeExport**: [*StrokeNodeData*](src_types_realrenderertypes.md#strokenodedata)[]

Defined in: [src/types/RealRendererTypes.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L32)

___

### StrokeNode

Ƭ **StrokeNode**: Path \| Circle \| Text \| Polygon

Defined in: [src/types/RealRendererTypes.ts:18](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L18)

___

### StrokeNodeData

Ƭ **StrokeNodeData**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`data` | *string* |
`section` | [*SVGSection*](src_types_realrenderertypes.md#svgsection) |
`type` | *path* \| *circle* \| *text* \| *polygon* |

Defined in: [src/types/RealRendererTypes.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f8dea34/src/types/RealRendererTypes.ts#L27)
