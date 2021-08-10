[SVG Real Renderer - v0.4.0](../docs.md) / [index](../modules/index.md) / RealRenderer

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
- [attach](index.realrenderer.md#attach)
- [bgColor](index.realrenderer.md#bgcolor)
- [bgType](index.realrenderer.md#bgtype)
- [changeBackground](index.realrenderer.md#changebackground)
- [changeOffsets](index.realrenderer.md#changeoffsets)
- [dimensions](index.realrenderer.md#dimensions)
- [draw](index.realrenderer.md#draw)
- [drawsPerFrame](index.realrenderer.md#drawsperframe)
- [eventHandlers](index.realrenderer.md#eventhandlers)
- [exportData](index.realrenderer.md#exportdata)
- [importData](index.realrenderer.md#importdata)
- [originalDimensions](index.realrenderer.md#originaldimensions)
- [redo](index.realrenderer.md#redo)
- [scale](index.realrenderer.md#scale)
- [scaleFactor](index.realrenderer.md#scalefactor)
- [settings](index.realrenderer.md#settings)
- [startRender](index.realrenderer.md#startrender)
- [stopRender](index.realrenderer.md#stoprender)
- [strokes](index.realrenderer.md#strokes)
- [svg](index.realrenderer.md#svg)
- [svgSections](index.realrenderer.md#svgsections)
- [time](index.realrenderer.md#time)
- [timeStep](index.realrenderer.md#timestep)
- [toggleRender](index.realrenderer.md#togglerender)
- [undo](index.realrenderer.md#undo)

### Methods

- [emit](index.realrenderer.md#emit)
- [off](index.realrenderer.md#off)
- [on](index.realrenderer.md#on)
- [reset](index.realrenderer.md#reset)
- [resetTime](index.realrenderer.md#resettime)

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

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:65](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L65)

## Properties

### \_doRender

• **\_doRender**: *boolean*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L30)

___

### attach

• **attach**: (`svg`: SVGSVGElement, `dimensions`: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`svg`: SVGSVGElement, `dimensions`: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Attaches to a DOM SVG element to render to.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`svg` | SVGSVGElement | The SVG element to attach.   |
`dimensions` | [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions) | Dimensions of the graph.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/svg/svg-dom.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/svg/svg-dom.ts#L45)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L47)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### changeBackground

• **changeBackground**: (`newBG`: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`newBG`: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Changes the background of the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`newBG` | [*BGType*](../modules/src_types_realrenderertypes.md#bgtype) | New background.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/background.ts:11](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/background.ts#L11)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:43](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L43)

___

### changeOffsets

• **changeOffsets**: (`xOffset`: *number*, `yOffset`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`xOffset`: *number*, `yOffset`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Change the offsets of the graph (for panning)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`xOffset` | *number* | Offset in the x-direction.   |
`yOffset` | *number* | Offset in the y-direction.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/svg/svg-settings.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/svg/svg-settings.ts#L32)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:46](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L46)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L23)

___

### draw

• **draw**: (`numDraws`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`numDraws`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Draw a certain number of frames.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`numDraws` | *number* | Number of frames to draw.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/draw/draw.ts:20](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/draw/draw.ts#L20)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:49](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L49)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### eventHandlers

• **eventHandlers**: { [Event in string \| number \| symbol]?: Map<string, function\>}= {}

Inherited from: EventEmitter.eventHandlers

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### exportData

• **exportData**: () => [*IRealExportV2*](../interfaces/src_types_realrenderertypes.irealexportv2.md)

#### Type declaration:

▸ (): [*IRealExportV2*](../interfaces/src_types_realrenderertypes.irealexportv2.md)

Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().

**Returns:** [*IRealExportV2*](../interfaces/src_types_realrenderertypes.irealexportv2.md)

Data of the graph in a storable and loadable format.

Defined in: [src/renderers/RealRenderer/import-export.ts:13](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/import-export.ts#L13)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:41](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L41)

___

### importData

• **importData**: (`data`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`data`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Import the data exported by .export() method.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) | Data exported by .export()   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/import-export.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/import-export.ts#L36)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:42](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L42)

___

### originalDimensions

• **originalDimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L27)

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

Defined in: [src/renderers/RealRenderer/undo.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/undo.ts#L24)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L39)

___

### scale

• **scale**: (`scaleFactor`: *number*) => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (`scaleFactor`: *number*): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Scale/zoom the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`scaleFactor` | *number* | Factor to scale the graph by. Larger number zooms in.   |

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/svg/svg-settings.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/svg/svg-settings.ts#L9)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L45)

___

### scaleFactor

• **scaleFactor**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L24)

___

### settings

• **settings**: [*IRealRendererNonOptionals*](../interfaces/src_types_realrenderertypes.irealrenderernonoptionals.md) & [*IRealRendererOptionals*](../interfaces/src_types_realrenderertypes.irealrendereroptionals.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### startRender

• **startRender**: () => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Start rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/draw/render.ts:16](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/draw/render.ts#L16)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:50](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L50)

___

### stopRender

• **stopRender**: () => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Stop rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/draw/render.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/draw/render.ts#L29)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:51](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L51)

___

### strokes

• **strokes**: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)[]= []

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L28)

___

### svg

• **svg**: SVGSVGElement

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L21)

___

### svgSections

• **svgSections**: [*SVGSections*](../modules/src_types_realrenderertypes.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:22](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L22)

___

### time

• **time**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### timeStep

• **timeStep**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L34)

___

### toggleRender

• **toggleRender**: () => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Toggle rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/draw/render.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/draw/render.ts#L40)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:52](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L52)

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

Defined in: [src/renderers/RealRenderer/undo.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/undo.ts#L9)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L38)

## Methods

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Resets everything regarding the graph.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:110](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L110)

___

### resetTime

▸ **resetTime**(): [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Resets the internal time counter.

**Returns:** [*RealRenderer*](index.realrenderer.md)<EventTypes\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:100](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e0bef37/src/renderers/RealRenderer/RealRenderer.ts#L100)
