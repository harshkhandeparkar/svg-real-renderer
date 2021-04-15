[SVG Real Renderer - v0.3.4](../docs.md) / RealRenderer

# Class: RealRenderer<EventTypes\>

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`EventTypes` | IRealRendererEvents | IRealRendererEvents |

## Hierarchy

* *EventEmitter*<EventTypes\>

  ↳ **RealRenderer**

  ↳↳ [*RealDrawBoard*](realdrawboard.md)

## Table of contents

### Constructors

- [constructor](realrenderer.md#constructor)

### Properties

- [\_doRender](realrenderer.md#_dorender)
- [\_offsetX](realrenderer.md#_offsetx)
- [\_offsetY](realrenderer.md#_offsety)
- [\_strokeIndex](realrenderer.md#_strokeindex)
- [bgColor](realrenderer.md#bgcolor)
- [bgType](realrenderer.md#bgtype)
- [dimensions](realrenderer.md#dimensions)
- [drawsPerFrame](realrenderer.md#drawsperframe)
- [eventHandlers](realrenderer.md#eventhandlers)
- [originalDimensions](realrenderer.md#originaldimensions)
- [redo](realrenderer.md#redo)
- [scaleFactor](realrenderer.md#scalefactor)
- [settings](realrenderer.md#settings)
- [strokes](realrenderer.md#strokes)
- [svg](realrenderer.md#svg)
- [svgSections](realrenderer.md#svgsections)
- [time](realrenderer.md#time)
- [timeStep](realrenderer.md#timestep)
- [undo](realrenderer.md#undo)

### Methods

- [\_display](realrenderer.md#_display)
- [changeOffsets](realrenderer.md#changeoffsets)
- [draw](realrenderer.md#draw)
- [emit](realrenderer.md#emit)
- [exportData](realrenderer.md#exportdata)
- [importData](realrenderer.md#importdata)
- [off](realrenderer.md#off)
- [on](realrenderer.md#on)
- [reset](realrenderer.md#reset)
- [resetTime](realrenderer.md#resettime)
- [scale](realrenderer.md#scale)
- [startRender](realrenderer.md#startrender)
- [stopRender](realrenderer.md#stoprender)
- [toggleRender](realrenderer.md#togglerender)

## Constructors

### constructor

\+ **new RealRenderer**<EventTypes\>(`options`: RealRendererOptions, `eventList?`: keyof EventTypes[]): [*RealRenderer*](realrenderer.md)<EventTypes\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`EventTypes` | IRealRendererEvents | IRealRendererEvents |

#### Parameters:

Name | Type |
:------ | :------ |
`options` | RealRendererOptions |
`eventList` | keyof EventTypes[] |

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Overrides: EventEmitter&lt;EventTypes&gt;.constructor

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L40)

## Properties

### \_doRender

• **\_doRender**: *boolean*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L37)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### bgColor

• **bgColor**: Color

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### bgType

• **bgType**: BGType

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### dimensions

• **dimensions**: GraphDimensions

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L24)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L34)

___

### eventHandlers

• **eventHandlers**: { [Event in string \| number \| symbol]?: Map<string, function\>}= {}

Inherited from: EventEmitter.eventHandlers

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: GraphDimensions

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L28)

___

### redo

• **redo**: (`numRedo`: *number*) => [*RealRenderer*](realrenderer.md)<IRealRendererEvents\>

#### Type declaration:

▸ (`numRedo`: *number*): [*RealRenderer*](realrenderer.md)<IRealRendererEvents\>

#### Parameters:

Name | Type |
:------ | :------ |
`numRedo` | *number* |

**Returns:** [*RealRenderer*](realrenderer.md)<IRealRendererEvents\>

Defined in: [src/renderers/RealRenderer/undo.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/undo.ts#L14)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### scaleFactor

• **scaleFactor**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### settings

• **settings**: IRealRendererNonOptionals & IRealRendererOptionals

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L30)

___

### strokes

• **strokes**: Stroke[]= []

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### svg

• **svg**: SVGSVGElement

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:22](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L22)

___

### svgSections

• **svgSections**: SVGSections

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L23)

___

### time

• **time**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### timeStep

• **timeStep**: *number*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### undo

• **undo**: (`numUndo`: *number*) => [*RealRenderer*](realrenderer.md)<IRealRendererEvents\>

#### Type declaration:

▸ (`numUndo`: *number*): [*RealRenderer*](realrenderer.md)<IRealRendererEvents\>

#### Parameters:

Name | Type |
:------ | :------ |
`numUndo` | *number* |

**Returns:** [*RealRenderer*](realrenderer.md)<IRealRendererEvents\>

Defined in: [src/renderers/RealRenderer/undo.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/undo.ts#L4)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L39)

## Methods

### \_display

▸ **_display**(`stroke`: Stroke): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`stroke` | Stroke |

**Returns:** *void*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:190](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L190)

___

### changeOffsets

▸ **changeOffsets**(`xOffset`: *number*, `yOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`xOffset` | *number* |
`yOffset` | *number* |

**Returns:** *void*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:163](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L163)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealRenderer*](realrenderer.md)<EventTypes\>

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`numDraws` | *number* | 1 |

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:143](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L143)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): RealExport

**Returns:** RealExport

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:217](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L217)

___

### importData

▸ **importData**(`data`: RealExport): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`data` | RealExport |

**Returns:** *void*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:232](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L232)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealRenderer*](realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:282](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L282)

___

### resetTime

▸ **resetTime**(): [*RealRenderer*](realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:277](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L277)

___

### scale

▸ **scale**(`scaleFactor`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** *void*

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:148](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L148)

___

### startRender

▸ **startRender**(): [*RealRenderer*](realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:196](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L196)

___

### stopRender

▸ **stopRender**(): [*RealRenderer*](realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:205](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L205)

___

### toggleRender

▸ **toggleRender**(): [*RealRenderer*](realrenderer.md)<EventTypes\>

**Returns:** [*RealRenderer*](realrenderer.md)<EventTypes\>

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:211](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L211)
