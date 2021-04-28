[SVG Real Renderer - v0.3.12](../docs.md) / [index](../modules/index.md) / RealDrawBoard

# Class: RealDrawBoard

[index](../modules/index.md).RealDrawBoard

Drawing board.

## Hierarchy

* [*RealRenderer*](index.realrenderer.md)<[*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)\>

  ↳ **RealDrawBoard**

## Table of contents

### Constructors

- [constructor](index.realdrawboard.md#constructor)

### Properties

- [\_doRender](index.realdrawboard.md#_dorender)
- [\_offsetX](index.realdrawboard.md#_offsetx)
- [\_offsetY](index.realdrawboard.md#_offsety)
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

- [attach](index.realdrawboard.md#attach)
- [changeBackground](index.realdrawboard.md#changebackground)
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

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:64](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L64)

## Properties

### \_doRender

• **\_doRender**: *boolean*

Inherited from: [RealRenderer](index.realrenderer.md).[_doRender](index.realrenderer.md#_dorender)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Inherited from: [RealRenderer](index.realrenderer.md).[_offsetX](index.realrenderer.md#_offsetx)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Inherited from: [RealRenderer](index.realrenderer.md).[_offsetY](index.realrenderer.md#_offsety)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L30)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Inherited from: [RealRenderer](index.realrenderer.md).[_strokeIndex](index.realrenderer.md#_strokeindex)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L34)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Inherited from: [RealRenderer](index.realrenderer.md).[bgColor](index.realrenderer.md#bgcolor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Inherited from: [RealRenderer](index.realrenderer.md).[bgType](index.realrenderer.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### changeTool

• **changeTool**: (`newTool`: Tool) => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (`newTool`: Tool): [*RealDrawBoard*](index.realdrawboard.md)

Change the currently selected tool on the draw board.

#### Parameters:

Name | Type |
:------ | :------ |
`newTool` | Tool |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:10](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/boardManip.ts#L10)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:62](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L62)

___

### changeToolSetting

• **changeToolSetting**: <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]) => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]): [*RealDrawBoard*](index.realdrawboard.md)

Change a tool setting.

#### Type parameters:

Name | Type |
:------ | :------ |
`SettingName` | *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`settingName` | SettingName | Name of the tool setting.   |
`value` | ToolSettings[SettingName] | New value for the setting.   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:41](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/boardManip.ts#L41)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:61](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L61)

___

### clear

• **clear**: () => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](index.realdrawboard.md)

Clear the board without resetting any parameters.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:78](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/boardManip.ts#L78)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:64](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L64)

___

### clearPreview

• **clearPreview**: () => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](index.realdrawboard.md)

Clear all tool previews.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:62](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/boardManip.ts#L62)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:63](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L63)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [RealRenderer](index.realrenderer.md).[dimensions](index.realrenderer.md#dimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[drawsPerFrame](index.realrenderer.md#drawsperframe)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L37)

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
`import`? | *Map*<string, (`params`: { `import`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)  }) => *void*\> |
`start-render`? | *Map*<string, (`params`: {}) => *void*\> |
`stop-render`? | *Map*<string, (`params`: {}) => *void*\> |
`tool-change`? | *Map*<string, (`params`: { `newTool`: Tool ; `oldTool`: Tool  }) => *void*\> |
`tool-setting-change`? | *Map*<string, (`params`: { `newValue`: *number* \| [*Color*](../modules/src_types_realrenderertypes.md#color) ; `oldValue`: *number* \| [*Color*](../modules/src_types_realrenderertypes.md#color) ; `settingName`: *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor*  }) => *void*\> |

Inherited from: [RealRenderer](index.realrenderer.md).[eventHandlers](index.realrenderer.md#eventhandlers)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [RealRenderer](index.realrenderer.md).[originalDimensions](index.realrenderer.md#originaldimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L31)

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

Defined in: [src/renderers/RealRenderer/undo.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/undo.ts#L24)

Inherited from: [RealRenderer](index.realrenderer.md).[redo](index.realrenderer.md#redo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:43](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L43)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[scaleFactor](index.realrenderer.md#scalefactor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L28)

___

### settings

• **settings**: [*RealDrawBoardSettings*](../modules/src_types_realdrawboardtypes.md#realdrawboardsettings)

Overrides: [RealRenderer](index.realrenderer.md).[settings](index.realrenderer.md#settings)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L34)

___

### strokes

• **strokes**: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)[]= []

Inherited from: [RealRenderer](index.realrenderer.md).[strokes](index.realrenderer.md#strokes)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### svg

• **svg**: SVGSVGElement

Inherited from: [RealRenderer](index.realrenderer.md).[svg](index.realrenderer.md#svg)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### svgSections

• **svgSections**: [*SVGSections*](../modules/src_types_realrenderertypes.md#svgsections)

Inherited from: [RealRenderer](index.realrenderer.md).[svgSections](index.realrenderer.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### time

• **time**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[time](index.realrenderer.md#time)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L39)

___

### timeStep

• **timeStep**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[timeStep](index.realrenderer.md#timestep)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L38)

___

### tool

• **tool**: Tool

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L35)

___

### toolSettings

• **toolSettings**: ToolSettings

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L36)

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

Defined in: [src/renderers/RealRenderer/undo.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/undo.ts#L9)

Inherited from: [RealRenderer](index.realrenderer.md).[undo](index.realrenderer.md#undo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:42](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L42)

## Methods

### attach

▸ **attach**(`svg`: SVGSVGElement, `dimensions`: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)): [*RealDrawBoard*](index.realdrawboard.md)

Attaches to a DOM SVG element to render to.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`svg` | SVGSVGElement | The SVG element to attach.   |
`dimensions` | [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions) | Dimensions of the graph.   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:168](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L168)

___

### changeBackground

▸ **changeBackground**(`newBG`: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)): [*RealDrawBoard*](index.realdrawboard.md)

Changes the background of the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`newBG` | [*BGType*](../modules/src_types_realrenderertypes.md#bgtype) | New background.   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:387](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L387)

___

### changeOffsets

▸ **changeOffsets**(`xOffset`: *number*, `yOffset`: *number*): [*RealDrawBoard*](index.realdrawboard.md)

Change the offsets of the graph (for panning)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`xOffset` | *number* | Offset in the x-direction.   |
`yOffset` | *number* | Offset in the y-direction.   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:255](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L255)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealDrawBoard*](index.realdrawboard.md)

Draw a certain number of frames.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`numDraws` | *number* | 1 | Number of frames to draw.   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:221](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L221)

___

### emit

▸ **emit**<Event\>(`eventName`: Event, `parameters`: [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event]): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* \| *import* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`parameters` | [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event] |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().

**Returns:** [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Data of the graph in a storable and loadable format.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:279](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L279)

___

### importData

▸ **importData**(`data`: [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)): [*RealDrawBoard*](index.realdrawboard.md)

Import the data exported by .export() method.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) | Data exported by .export()   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:300](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L300)

___

### off

▸ **off**<Event\>(`eventName`: Event, `handlerName`: *string*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* \| *import* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

___

### on

▸ **on**<Event\>(`eventName`: Event, `handlerName`: *string*, `handler`: (`params`: [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event]) => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`Event` | *tool-change* \| *tool-setting-change* \| *board-cleared* \| *board-reset* \| *start-render* \| *stop-render* \| *change-scale* \| *change-offsets* \| *import* |

#### Parameters:

Name | Type |
:------ | :------ |
`eventName` | Event |
`handlerName` | *string* |
`handler` | (`params`: [*IRealDrawBoardEvents*](../interfaces/src_constants_events_realdrawboardevents.irealdrawboardevents.md)[Event]) => *void* |

**Returns:** *void*

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:247](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L247)

___

### resetTime

▸ **resetTime**(): [*RealDrawBoard*](index.realdrawboard.md)

Resets the internal time counter.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:356](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L356)

___

### scale

▸ **scale**(`scaleFactor`: *number*): [*RealDrawBoard*](index.realdrawboard.md)

Scale/zoom the graph.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`scaleFactor` | *number* | Factor to scale the graph by. Larger number zooms in.   |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:232](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L232)

___

### startRender

▸ **startRender**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:235](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L235)

___

### stopRender

▸ **stopRender**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:241](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealDrawBoard/RealDrawBoard.ts#L241)

___

### toggleRender

▸ **toggleRender**(): [*RealDrawBoard*](index.realdrawboard.md)

Toggle rendering.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:209](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/289dbab/src/renderers/RealRenderer/RealRenderer.ts#L209)
