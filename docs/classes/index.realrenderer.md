[SVG Real Renderer - v0.3.9](../docs.md) / [index](../modules/index.md) / RealRenderer

# Class: RealRenderer<EventTypes\>

[index](../modules/index.md).RealRenderer

General Real Renderer with no specific purpose. Should be extended to use.

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
- [changeBackground](index.realrenderer.md#changebackground)
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

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:43](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L43)

## Properties

### \_doRender

• **\_doRender**: *boolean*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L30)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L34)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L37)

___

### eventHandlers

• **eventHandlers**: { [Event in string \| number \| symbol]?: Map<string, function\>}= {}

Inherited from: EventEmitter.eventHandlers

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### redo

• **redo**: (`numRedo`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`numRedo`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Redos a certain number of strokes drawn on the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`numRedo` | *number* | Number of strokes to redo.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/undo.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/undo.ts#L24)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:43](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L43)

___

### scaleFactor

• **scaleFactor**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L28)

___

### settings

• **settings**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### strokes

• **strokes**: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)[]= []

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### svg

• **svg**: SVGSVGElement

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### svgSections

• **svgSections**: [*SVGSections*](../modules/src_types_realrenderertypes.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### time

• **time**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L39)

___

### timeStep

• **timeStep**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L38)

___

### undo

• **undo**: (`numUndo`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`numUndo`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Undos a certain number of strokes drawn on the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`numUndo` | *number* | Number of strokes to undo.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/undo.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/undo.ts#L9)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:42](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L42)

## Methods

### attach

▸ **attach**(`svg`: SVGSVGElement, `dimensions`: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Attaches to a DOM SVG element to render to.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`svg` | SVGSVGElement | The SVG element to attach.   |
`dimensions` | [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions) | Dimensions of the graph.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:168](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L168)

___

### changeBackground

▸ **changeBackground**(`newBG`: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Changes the background of the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`newBG` | [*BGType*](../modules/src_types_realrenderertypes.md#bgtype) | New background.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:381](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L381)

___

### changeOffsets

▸ **changeOffsets**(`xOffset`: *number*, `yOffset`: *number*): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Change the offsets of the graph (for panning)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`xOffset` | *number* | Offset in the x-direction.   |
`yOffset` | *number* | Offset in the y-direction.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:255](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L255)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Draw a certain number of frames.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`numDraws` | *number* | 1 | Number of frames to draw.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:221](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L221)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Export the data of the graph in a certain format that can be used to load the data later. Load using .import().

**Returns:** [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Data of the graph in a storable and loadable format.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:279](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L279)

___

### importData

▸ **importData**(`data`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Import the data exported by .export() method.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) | Data exported by .export()   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:299](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L299)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Resets everything regarding the graph.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:360](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L360)

___

### resetTime

▸ **resetTime**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Resets the internal time counter.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:350](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L350)

___

### scale

▸ **scale**(`scaleFactor`: *number*): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Scale/zoom the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`scaleFactor` | *number* | Factor to scale the graph by. Larger number zooms in.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:232](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L232)

___

### startRender

▸ **startRender**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Start rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:185](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L185)

___

### stopRender

▸ **stopRender**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Stop rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:198](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L198)

___

### toggleRender

▸ **toggleRender**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Toggle rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:209](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/692d19f/src/renderers/RealRenderer/RealRenderer.ts#L209)
