[SVG Real Renderer - v0.3.4](../docs.md) / [index](../modules/index.md) / RealDrawBoard

# Class: RealDrawBoard

[index](../modules/index.md).RealDrawBoard

## Hierarchy

* [*RealRenderer*](index.realrenderer.md)<[*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)\>

  ↳ **RealDrawBoard**

## Table of contents

### Constructors

- [constructor](index.realdrawboard.md#constructor)

### Properties

- [\_doPreview](index.realdrawboard.md#_dopreview)
- [\_doRender](index.realdrawboard.md#_dorender)
- [\_lastCoords](index.realdrawboard.md#_lastcoords)
- [\_offsetX](index.realdrawboard.md#_offsetx)
- [\_offsetY](index.realdrawboard.md#_offsety)
- [\_previewStroke](index.realdrawboard.md#_previewstroke)
- [\_strokeIndex](index.realdrawboard.md#_strokeindex)
- [bgColor](index.realdrawboard.md#bgcolor)
- [bgType](index.realdrawboard.md#bgtype)
- [changeTool](index.realdrawboard.md#changetool)
- [changeToolSetting](index.realdrawboard.md#changetoolsetting)
- [clear](index.realdrawboard.md#clear)
- [clearPreview](index.realdrawboard.md#clearpreview)
- [dimensions](index.realdrawboard.md#dimensions)
- [drawsPerFrame](index.realdrawboard.md#drawsperframe)
- [eventHandlers](index.realdrawboard.md#eventhandlers)
- [originalDimensions](index.realdrawboard.md#originaldimensions)
- [redo](index.realdrawboard.md#redo)
- [scaleFactor](index.realdrawboard.md#scalefactor)
- [settings](index.realdrawboard.md#settings)
- [strokes](index.realdrawboard.md#strokes)
- [svg](index.realdrawboard.md#svg)
- [svgSections](index.realdrawboard.md#svgsections)
- [time](index.realdrawboard.md#time)
- [timeStep](index.realdrawboard.md#timestep)
- [tool](index.realdrawboard.md#tool)
- [toolSettings](index.realdrawboard.md#toolsettings)
- [undo](index.realdrawboard.md#undo)

### Methods

- [\_display](index.realdrawboard.md#_display)
- [changeOffsets](index.realdrawboard.md#changeoffsets)
- [draw](index.realdrawboard.md#draw)
- [emit](index.realdrawboard.md#emit)
- [exportData](index.realdrawboard.md#exportdata)
- [importData](index.realdrawboard.md#importdata)
- [off](index.realdrawboard.md#off)
- [on](index.realdrawboard.md#on)
- [reset](index.realdrawboard.md#reset)
- [resetTime](index.realdrawboard.md#resettime)
- [scale](index.realdrawboard.md#scale)
- [startRender](index.realdrawboard.md#startrender)
- [stopRender](index.realdrawboard.md#stoprender)
- [toggleRender](index.realdrawboard.md#togglerender)

## Constructors

### constructor

\+ **new RealDrawBoard**(`options`: [*RealDrawBoardOptions*](../modules/src_types_realdrawboardtypes.md#realdrawboardoptions)): [*RealDrawBoard*](index.realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*RealDrawBoardOptions*](../modules/src_types_realdrawboardtypes.md#realdrawboardoptions) |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:58](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L58)

## Properties

### \_doPreview

• **\_doPreview**: *boolean*= true

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L38)

___

### \_doRender

• **\_doRender**: *boolean*

Inherited from: [RealRenderer](index.realrenderer.md).[_doRender](index.realrenderer.md#_dorender)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L37)

___

### \_lastCoords

• **\_lastCoords**: *Map*<string, [*Coordinate*](../modules/src_types_realrenderertypes.md#coordinate)\>

key -> identifier, value -> coordinate
 For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L37)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Inherited from: [RealRenderer](index.realrenderer.md).[_offsetX](index.realrenderer.md#_offsetx)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Inherited from: [RealRenderer](index.realrenderer.md).[_offsetY](index.realrenderer.md#_offsety)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### \_previewStroke

• **\_previewStroke**: *Map*<string, [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)\>

The preview for the current stroke

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:42](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L42)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Inherited from: [RealRenderer](index.realrenderer.md).[_strokeIndex](index.realrenderer.md#_strokeindex)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Inherited from: [RealRenderer](index.realrenderer.md).[bgColor](index.realrenderer.md#bgcolor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Inherited from: [RealRenderer](index.realrenderer.md).[bgType](index.realrenderer.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### changeTool

• **changeTool**: (`newTool`: Tool) => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (`newTool`: Tool): [*RealDrawBoard*](index.realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`newTool` | Tool |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:5](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/boardManip.ts#L5)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:56](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L56)

___

### changeToolSetting

• **changeToolSetting**: <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]) => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]): [*RealDrawBoard*](index.realdrawboard.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`SettingName` | *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor* |

#### Parameters:

Name | Type |
:------ | :------ |
`settingName` | SettingName |
`value` | ToolSettings[SettingName] |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/boardManip.ts#L30)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:55](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L55)

___

### clear

• **clear**: () => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:59](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/boardManip.ts#L59)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:58](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L58)

___

### clearPreview

• **clearPreview**: () => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/boardManip.ts#L47)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:57](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L57)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [RealRenderer](index.realrenderer.md).[dimensions](index.realrenderer.md#dimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L24)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[drawsPerFrame](index.realrenderer.md#drawsperframe)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L34)

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
`tool-setting-change`? | *Map*<string, (`params`: { `newValue`: *number* \| [*Color*](../modules/src_types_realrenderertypes.md#color) ; `oldValue`: *number* \| [*Color*](../modules/src_types_realrenderertypes.md#color) ; `settingName`: *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor*  }) => *void*\> |

Inherited from: [RealRenderer](index.realrenderer.md).[eventHandlers](index.realrenderer.md#eventhandlers)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [RealRenderer](index.realrenderer.md).[originalDimensions](index.realrenderer.md#originaldimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L28)

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

Defined in: [src/renderers/RealRenderer/undo.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/undo.ts#L14)

Inherited from: [RealRenderer](index.realrenderer.md).[redo](index.realrenderer.md#redo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[scaleFactor](index.realrenderer.md#scalefactor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### settings

• **settings**: [*RealDrawBoardSettings*](../modules/src_types_realdrawboardtypes.md#realdrawboardsettings)

Overrides: [RealRenderer](index.realrenderer.md).[settings](index.realrenderer.md#settings)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L31)

___

### strokes

• **strokes**: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)[]= []

Inherited from: [RealRenderer](index.realrenderer.md).[strokes](index.realrenderer.md#strokes)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### svg

• **svg**: SVGSVGElement

Inherited from: [RealRenderer](index.realrenderer.md).[svg](index.realrenderer.md#svg)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:22](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L22)

___

### svgSections

• **svgSections**: [*SVGSections*](../modules/src_types_realrenderertypes.md#svgsections)

Inherited from: [RealRenderer](index.realrenderer.md).[svgSections](index.realrenderer.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L23)

___

### time

• **time**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[time](index.realrenderer.md#time)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### timeStep

• **timeStep**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[timeStep](index.realrenderer.md#timestep)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### tool

• **tool**: Tool

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L32)

___

### toolSettings

• **toolSettings**: ToolSettings

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L33)

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

Defined in: [src/renderers/RealRenderer/undo.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/undo.ts#L4)

Inherited from: [RealRenderer](index.realrenderer.md).[undo](index.realrenderer.md#undo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L39)

## Methods

### \_display

▸ **_display**(`stroke`: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`stroke` | [*Stroke*](../modules/src_types_realrenderertypes.md#stroke) |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:195](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L195)

___

### changeOffsets

▸ **changeOffsets**(`xOffset`: *number*, `yOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`xOffset` | *number* |
`yOffset` | *number* |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:168](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L168)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealDrawBoard*](index.realdrawboard.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`numDraws` | *number* | 1 |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:148](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L148)

___

### emit

▸ **emit**<Event\>(`eventName`: Event, `parameters`: [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event]): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`parameters` | [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event] |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

**Returns:** [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:222](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L222)

___

### importData

▸ **importData**(`data`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`data` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:237](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L237)

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

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

___

### on

▸ **on**<Event\>(`eventName`: Event, `handlerName`: *string*, `handler`: (`params`: [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event]) => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |
`handler` | (`params`: [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event]) => *void* |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:241](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L241)

___

### resetTime

▸ **resetTime**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:282](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L282)

___

### scale

▸ **scale**(`scaleFactor`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:153](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L153)

___

### startRender

▸ **startRender**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:229](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L229)

___

### stopRender

▸ **stopRender**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:235](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealDrawBoard/RealDrawBoard.ts#L235)

___

### toggleRender

▸ **toggleRender**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:216](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/449f651/src/renderers/RealRenderer/RealRenderer.ts#L216)
