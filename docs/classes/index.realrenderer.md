[SVG Real Renderer - v0.3.7](../docs.md) / [index](../modules/index.md) / RealRenderer

# Class: RealRenderer<EventTypes\>

[index](../modules/index.md).RealRenderer

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`EventTypes` | [*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md) | [*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md) |

## Hierarchy

* *EventEmitter*<EventTypes\>

  ↳ **RealRenderer**

  ↳↳ [*RealDrawBoard*](index.realdrawboard.md)

## Table of contents

### Constructors

- [constructor](index.realrenderer.md#constructor)

### Properties

- [\_doRender](index.realrenderer.md#_dorender)
- [\_offsetX](index.realrenderer.md#_offsetx)
- [\_offsetY](index.realrenderer.md#_offsety)
- [\_strokeIndex](index.realrenderer.md#_strokeindex)
- [bgColor](index.realrenderer.md#bgcolor)
- [bgType](index.realrenderer.md#bgtype)
- [dimensions](index.realrenderer.md#dimensions)
- [drawsPerFrame](index.realrenderer.md#drawsperframe)
- [eventHandlers](index.realrenderer.md#eventhandlers)
- [originalDimensions](index.realrenderer.md#originaldimensions)
- [redo](index.realrenderer.md#redo)
- [scaleFactor](index.realrenderer.md#scalefactor)
- [settings](index.realrenderer.md#settings)
- [strokes](index.realrenderer.md#strokes)
- [svg](index.realrenderer.md#svg)
- [svgSections](index.realrenderer.md#svgsections)
- [time](index.realrenderer.md#time)
- [timeStep](index.realrenderer.md#timestep)
- [undo](index.realrenderer.md#undo)

### Methods

- [attach](index.realrenderer.md#attach)
- [changeOffsets](index.realrenderer.md#changeoffsets)
- [draw](index.realrenderer.md#draw)
- [emit](index.realrenderer.md#emit)
- [exportData](index.realrenderer.md#exportdata)
- [importData](index.realrenderer.md#importdata)
- [off](index.realrenderer.md#off)
- [on](index.realrenderer.md#on)
- [reset](index.realrenderer.md#reset)
- [resetTime](index.realrenderer.md#resettime)
- [scale](index.realrenderer.md#scale)
- [startRender](index.realrenderer.md#startrender)
- [stopRender](index.realrenderer.md#stoprender)
- [toggleRender](index.realrenderer.md#togglerender)

## Constructors

### constructor

\+ **new RealRenderer**<EventTypes\>(`options`: [*RealRendererOptions*](../modules/src_types_realrenderertypes.md#realrendereroptions), `eventList?`: keyof EventTypes[]): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`EventTypes` | [*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md) | [*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md) |

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*RealRendererOptions*](../modules/src_types_realrenderertypes.md#realrendereroptions) |
`eventList` | keyof EventTypes[] |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Overrides: EventEmitter&lt;EventTypes&gt;.constructor

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L40)

## Properties

### \_doRender

• **\_doRender**: *boolean*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L37)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L24)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L34)

___

### eventHandlers

• **eventHandlers**: { [Event in string \| number \| symbol]?: Map<string, function\>}= {}

Inherited from: EventEmitter.eventHandlers

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L28)

___

### redo

• **redo**: (`numRedo`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`numRedo`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`numRedo` | *number* |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Defined in: [src/renderers/RealRenderer/undo.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/undo.ts#L14)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### scaleFactor

• **scaleFactor**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### settings

• **settings**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L30)

___

### strokes

• **strokes**: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)[]= []

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### svg

• **svg**: SVGSVGElement

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:22](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L22)

___

### svgSections

• **svgSections**: [*SVGSections*](../modules/src_types_realrenderertypes.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L23)

___

### time

• **time**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### timeStep

• **timeStep**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### undo

• **undo**: (`numUndo`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`numUndo`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`numUndo` | *number* |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Defined in: [src/renderers/RealRenderer/undo.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/undo.ts#L4)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L39)

## Methods

### attach

▸ **attach**(`svg`: SVGSVGElement, `dimensions`: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

#### Parameters:

Name | Type |
:------ | :------ |
`svg` | SVGSVGElement |
`dimensions` | [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions) |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:159](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L159)

___

### changeOffsets

▸ **changeOffsets**(`xOffset`: *number*, `yOffset`: *number*): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

#### Parameters:

Name | Type |
:------ | :------ |
`xOffset` | *number* |
`yOffset` | *number* |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:218](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L218)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`numDraws` | *number* | 1 |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:195](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L195)

___

### emit

▸ **emit**<Event\>(`eventName`: Event, `parameters`: EventTypes[Event]): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`parameters` | EventTypes[Event] |

**Returns:** *void*

Inherited from: EventEmitter.emit

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

**Returns:** [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:238](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L238)

___

### importData

▸ **importData**(`data`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:253](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L253)

___

### off

▸ **off**<Event\>(`eventName`: Event, `handlerName`: *string*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |

**Returns:** *void*

Inherited from: EventEmitter.off

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

___

### on

▸ **on**<Event\>(`eventName`: Event, `handlerName`: *string*, `handler`: (`params`: EventTypes[Event]) => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |
`handler` | (`params`: EventTypes[Event]) => *void* |

**Returns:** *void*

Inherited from: EventEmitter.on

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:306](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L306)

___

### resetTime

▸ **resetTime**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:300](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L300)

___

### scale

▸ **scale**(`scaleFactor`: *number*): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:201](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L201)

___

### startRender

▸ **startRender**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:172](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L172)

___

### stopRender

▸ **stopRender**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:181](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L181)

___

### toggleRender

▸ **toggleRender**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:188](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/renderers/RealRenderer/RealRenderer.ts#L188)
