[SVG Real Renderer - v0.3.4](../docs.md) / RealDrawBoard

# Class: RealDrawBoard

## Hierarchy

* [*RealRenderer*](realrenderer.md)<IRealDrawBoardEvents\>

  ↳ **RealDrawBoard**

## Table of contents

### Constructors

- [constructor](realdrawboard.md#constructor)

### Properties

- [\_doPreview](realdrawboard.md#_dopreview)
- [\_doRender](realdrawboard.md#_dorender)
- [\_lastCoords](realdrawboard.md#_lastcoords)
- [\_offsetX](realdrawboard.md#_offsetx)
- [\_offsetY](realdrawboard.md#_offsety)
- [\_previewStroke](realdrawboard.md#_previewstroke)
- [\_strokeIndex](realdrawboard.md#_strokeindex)
- [bgColor](realdrawboard.md#bgcolor)
- [bgType](realdrawboard.md#bgtype)
- [changeTool](realdrawboard.md#changetool)
- [changeToolSetting](realdrawboard.md#changetoolsetting)
- [clear](realdrawboard.md#clear)
- [clearPreview](realdrawboard.md#clearpreview)
- [dimensions](realdrawboard.md#dimensions)
- [drawsPerFrame](realdrawboard.md#drawsperframe)
- [eventHandlers](realdrawboard.md#eventhandlers)
- [originalDimensions](realdrawboard.md#originaldimensions)
- [redo](realdrawboard.md#redo)
- [scaleFactor](realdrawboard.md#scalefactor)
- [settings](realdrawboard.md#settings)
- [strokes](realdrawboard.md#strokes)
- [svg](realdrawboard.md#svg)
- [svgSections](realdrawboard.md#svgsections)
- [time](realdrawboard.md#time)
- [timeStep](realdrawboard.md#timestep)
- [tool](realdrawboard.md#tool)
- [toolSettings](realdrawboard.md#toolsettings)
- [undo](realdrawboard.md#undo)

### Methods

- [\_display](realdrawboard.md#_display)
- [changeOffsets](realdrawboard.md#changeoffsets)
- [draw](realdrawboard.md#draw)
- [emit](realdrawboard.md#emit)
- [exportData](realdrawboard.md#exportdata)
- [importData](realdrawboard.md#importdata)
- [off](realdrawboard.md#off)
- [on](realdrawboard.md#on)
- [reset](realdrawboard.md#reset)
- [resetTime](realdrawboard.md#resettime)
- [scale](realdrawboard.md#scale)
- [startRender](realdrawboard.md#startrender)
- [stopRender](realdrawboard.md#stoprender)
- [toggleRender](realdrawboard.md#togglerender)

## Constructors

### constructor

\+ **new RealDrawBoard**(`options`: RealDrawBoardOptions): [*RealDrawBoard*](realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | RealDrawBoardOptions |

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Overrides: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:58](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L58)

## Properties

### \_doPreview

• **\_doPreview**: *boolean*= true

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L38)

___

### \_doRender

• **\_doRender**: *boolean*

Inherited from: [RealRenderer](realrenderer.md).[_doRender](realrenderer.md#_dorender)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L37)

___

### \_lastCoords

• **\_lastCoords**: *Map*<string, Coordinate\>

key -> identifier, value -> coordinate
 For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L37)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Inherited from: [RealRenderer](realrenderer.md).[_offsetX](realrenderer.md#_offsetx)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Inherited from: [RealRenderer](realrenderer.md).[_offsetY](realrenderer.md#_offsety)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### \_previewStroke

• **\_previewStroke**: *Map*<string, Stroke\>

The preview for the current stroke

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:42](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L42)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Inherited from: [RealRenderer](realrenderer.md).[_strokeIndex](realrenderer.md#_strokeindex)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### bgColor

• **bgColor**: Color

Inherited from: [RealRenderer](realrenderer.md).[bgColor](realrenderer.md#bgcolor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### bgType

• **bgType**: BGType

Inherited from: [RealRenderer](realrenderer.md).[bgType](realrenderer.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### changeTool

• **changeTool**: (`newTool`: Tool) => [*RealDrawBoard*](realdrawboard.md)

#### Type declaration:

▸ (`newTool`: Tool): [*RealDrawBoard*](realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`newTool` | Tool |

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:5](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/boardManip.ts#L5)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:56](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L56)

___

### changeToolSetting

• **changeToolSetting**: <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]) => [*RealDrawBoard*](realdrawboard.md)

#### Type declaration:

▸ <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]): [*RealDrawBoard*](realdrawboard.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`SettingName` | *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor* |

#### Parameters:

Name | Type |
:------ | :------ |
`settingName` | SettingName |
`value` | ToolSettings[SettingName] |

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/boardManip.ts#L30)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:55](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L55)

___

### clear

• **clear**: () => [*RealDrawBoard*](realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:59](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/boardManip.ts#L59)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:58](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L58)

___

### clearPreview

• **clearPreview**: () => [*RealDrawBoard*](realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/boardManip.ts#L47)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:57](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L57)

___

### dimensions

• **dimensions**: GraphDimensions

Inherited from: [RealRenderer](realrenderer.md).[dimensions](realrenderer.md#dimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L24)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Inherited from: [RealRenderer](realrenderer.md).[drawsPerFrame](realrenderer.md#drawsperframe)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L34)

___

### eventHandlers

• **eventHandlers**: *object*= {}

#### Type declaration:

Name | Type |
:------ | :------ |
`board-cleared`? | *Map*<string, (`params`: {}) => *void*\> |
`board-reset`? | *Map*<string, (`params`: {}) => *void*\> |
`change-offsets`? | *Map*<string, (`params`: { `newOffsets`: { `x`: *number* ; `y`: *number*  } ; `oldOffsets`: { `x`: *number* ; `y`: *number*  }  }) => *void*\> |
`change-scale`? | *Map*<string, (`params`: { `newScaleFactor`: *number* ; `oldScaleFactor`: *number*  }) => *void*\> |
`start-render`? | *Map*<string, (`params`: {}) => *void*\> |
`stop-render`? | *Map*<string, (`params`: {}) => *void*\> |
`tool-change`? | *Map*<string, (`params`: { `newTool`: Tool ; `oldTool`: Tool  }) => *void*\> |
`tool-setting-change`? | *Map*<string, (`params`: { `newValue`: *number* \| Color ; `oldValue`: *number* \| Color ; `settingName`: *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor*  }) => *void*\> |

Inherited from: [RealRenderer](realrenderer.md).[eventHandlers](realrenderer.md#eventhandlers)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: GraphDimensions

Inherited from: [RealRenderer](realrenderer.md).[originalDimensions](realrenderer.md#originaldimensions)

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

Inherited from: [RealRenderer](realrenderer.md).[redo](realrenderer.md#redo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [RealRenderer](realrenderer.md).[scaleFactor](realrenderer.md#scalefactor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### settings

• **settings**: RealDrawBoardSettings

Overrides: [RealRenderer](realrenderer.md).[settings](realrenderer.md#settings)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L31)

___

### strokes

• **strokes**: Stroke[]= []

Inherited from: [RealRenderer](realrenderer.md).[strokes](realrenderer.md#strokes)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### svg

• **svg**: SVGSVGElement

Inherited from: [RealRenderer](realrenderer.md).[svg](realrenderer.md#svg)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:22](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L22)

___

### svgSections

• **svgSections**: SVGSections

Inherited from: [RealRenderer](realrenderer.md).[svgSections](realrenderer.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L23)

___

### time

• **time**: *number*

Inherited from: [RealRenderer](realrenderer.md).[time](realrenderer.md#time)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### timeStep

• **timeStep**: *number*

Inherited from: [RealRenderer](realrenderer.md).[timeStep](realrenderer.md#timestep)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### tool

• **tool**: Tool

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L32)

___

### toolSettings

• **toolSettings**: ToolSettings

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L33)

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

Inherited from: [RealRenderer](realrenderer.md).[undo](realrenderer.md#undo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L39)

## Methods

### \_display

▸ **_display**(`stroke`: Stroke): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`stroke` | Stroke |

**Returns:** *void*

Inherited from: [RealRenderer](realrenderer.md)

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

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:163](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L163)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealDrawBoard*](realdrawboard.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`numDraws` | *number* | 1 |

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:143](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L143)

___

### emit

▸ **emit**<Event\>(`eventName`: Event, `parameters`: IRealDrawBoardEvents[Event]): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`parameters` | IRealDrawBoardEvents[Event] |

**Returns:** *void*

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): RealExport

**Returns:** RealExport

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:217](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L217)

___

### importData

▸ **importData**(`data`: RealExport): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`data` | RealExport |

**Returns:** *void*

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:232](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L232)

___

### off

▸ **off**<Event\>(`eventName`: Event, `handlerName`: *string*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |

**Returns:** *void*

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

___

### on

▸ **on**<Event\>(`eventName`: Event, `handlerName`: *string*, `handler`: (`params`: IRealDrawBoardEvents[Event]) => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |
`handler` | (`params`: IRealDrawBoardEvents[Event]) => *void* |

**Returns:** *void*

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Overrides: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:241](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L241)

___

### resetTime

▸ **resetTime**(): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:277](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L277)

___

### scale

▸ **scale**(`scaleFactor`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** *void*

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:148](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L148)

___

### startRender

▸ **startRender**(): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Overrides: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:229](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L229)

___

### stopRender

▸ **stopRender**(): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Overrides: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:235](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealDrawBoard/RealDrawBoard.ts#L235)

___

### toggleRender

▸ **toggleRender**(): [*RealDrawBoard*](realdrawboard.md)

**Returns:** [*RealDrawBoard*](realdrawboard.md)

Inherited from: [RealRenderer](realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:211](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/48893ef/src/renderers/RealRenderer/RealRenderer.ts#L211)
