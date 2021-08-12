[SVG Real Renderer - v0.4.1](../docs.md) / src/types/RealRendererTypes

# Module: src/types/RealRendererTypes

## Table of contents

### Interfaces

- [IRealExportV1](../interfaces/src_types_realrenderertypes.irealexportv1.md)
- [IRealExportV2](../interfaces/src_types_realrenderertypes.irealexportv2.md)
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
- [StrokeExportV1](src_types_realrenderertypes.md#strokeexportv1)
- [StrokeExportV2](src_types_realrenderertypes.md#strokeexportv2)
- [StrokeNode](src_types_realrenderertypes.md#strokenode)
- [StrokeNodeDataV1](src_types_realrenderertypes.md#strokenodedatav1)
- [StrokeNodeDataV2](src_types_realrenderertypes.md#strokenodedatav2)
- [StrokeNodeType](src_types_realrenderertypes.md#strokenodetype)

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

Defined in: [src/types/RealRendererTypes.ts:66](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L66)

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

Defined in: [src/types/RealRendererTypes.ts:95](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L95)

___

### BGNone

Ƭ **BGNone**: *object*

Solid background.

#### Type declaration:

Name | Type |
:------ | :------ |
`type` | *none* |

Defined in: [src/types/RealRendererTypes.ts:111](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L111)

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

Defined in: [src/types/RealRendererTypes.ts:82](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L82)

___

### BGType

Ƭ **BGType**: [*BGNone*](src_types_realrenderertypes.md#bgnone) \| [*BGRuled*](src_types_realrenderertypes.md#bgruled) \| [*BGGrid*](src_types_realrenderertypes.md#bggrid) \| [*BGAxes*](src_types_realrenderertypes.md#bgaxes)

Defined in: [src/types/RealRendererTypes.ts:115](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L115)

___

### Color

Ƭ **Color**: [*number*, *number*, *number*]

An array of R, G and B colors ranging between 0 and 1.

Defined in: [src/types/RealRendererTypes.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L14)

___

### Coordinate

Ƭ **Coordinate**: [*number*, *number*]

A coordinate in the format [x, y].

Defined in: [src/types/RealRendererTypes.ts:18](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L18)

___

### GraphDimensions

Ƭ **GraphDimensions**: [*number*, *number*]

Dimensions of the graph in the format [width, height].

Defined in: [src/types/RealRendererTypes.ts:10](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L10)

___

### RealExport

Ƭ **RealExport**: [*IRealExportV1*](../interfaces/src_types_realrenderertypes.irealexportv1.md) \| [*IRealExportV2*](../interfaces/src_types_realrenderertypes.irealexportv2.md)

Defined in: [src/types/RealRendererTypes.ts:61](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L61)

___

### RealRendererOptions

Ƭ **RealRendererOptions**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md) \| {}

Defined in: [src/types/RealRendererTypes.ts:147](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L147)

___

### RealRendererParameters

Ƭ **RealRendererParameters**: [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md) \| {}

Defined in: [src/types/RealRendererTypes.ts:148](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L148)

___

### RealRendererSettings

Ƭ **RealRendererSettings**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md)

Defined in: [src/types/RealRendererTypes.ts:146](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L146)

___

### SVGSection

Ƭ **SVGSection**: *bg* \| *strokes* \| *overlay*

Defined in: [src/types/RealRendererTypes.ts:20](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L20)

___

### SVGSections

Ƭ **SVGSections**: { [Property in SVGSection]: SVGGElement}

Defined in: [src/types/RealRendererTypes.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L21)

___

### Stroke

Ƭ **Stroke**: [*StrokeNode*](src_types_realrenderertypes.md#strokenode)[]

One stroke is an combination of multiple stroke nodes

Defined in: [src/types/RealRendererTypes.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L28)

___

### StrokeExportV1

Ƭ **StrokeExportV1**: [*StrokeNodeDataV1*](src_types_realrenderertypes.md#strokenodedatav1)[]

**`deprecated`** 

Defined in: [src/types/RealRendererTypes.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L37)

___

### StrokeExportV2

Ƭ **StrokeExportV2**: [*StrokeNodeDataV2*](src_types_realrenderertypes.md#strokenodedatav2)[]

Defined in: [src/types/RealRendererTypes.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L40)

___

### StrokeNode

Ƭ **StrokeNode**: Path \| Circle \| Text \| Polygon \| GroupNode

Defined in: [src/types/RealRendererTypes.ts:19](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L19)

___

### StrokeNodeDataV1

Ƭ **StrokeNodeDataV1**: *object*

**`deprecated`** 

#### Type declaration:

Name | Type |
:------ | :------ |
`data` | *string* |
`section` | [*SVGSection*](src_types_realrenderertypes.md#svgsection) |
`type` | [*StrokeNodeType*](src_types_realrenderertypes.md#strokenodetype) |

Defined in: [src/types/RealRendererTypes.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L31)

___

### StrokeNodeDataV2

Ƭ **StrokeNodeDataV2**: ITextNodeData \| ICircleNodeData \| IGroupNodeData \| IPathNodeData \| IPolygonNodeData

Defined in: [src/types/RealRendererTypes.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L39)

___

### StrokeNodeType

Ƭ **StrokeNodeType**: *path* \| *circle* \| *text* \| *polygon* \| *group*

Defined in: [src/types/RealRendererTypes.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/9463376/src/types/RealRendererTypes.ts#L24)
