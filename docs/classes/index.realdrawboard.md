[SVG Real Renderer - v0.3.14](../docs.md) / [index](../modules/index.md) / RealDrawBoard

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
- [attach](index.realdrawboard.md#attach)
- [bgColor](index.realdrawboard.md#bgcolor)
- [bgType](index.realdrawboard.md#bgtype)
- [changeBackground](index.realdrawboard.md#changebackground)
- [changeOffsets](index.realdrawboard.md#changeoffsets)
- [changeTool](index.realdrawboard.md#changetool)
- [changeToolSetting](index.realdrawboard.md#changetoolsetting)
- [clear](index.realdrawboard.md#clear)
- [clearPreview](index.realdrawboard.md#clearpreview)
- [dimensions](index.realdrawboard.md#dimensions)
- [draw](index.realdrawboard.md#draw)
- [drawsPerFrame](index.realdrawboard.md#drawsperframe)
- [eventHandlers](index.realdrawboard.md#eventhandlers)
- [exportData](index.realdrawboard.md#exportdata)
- [importData](index.realdrawboard.md#importdata)
- [originalDimensions](index.realdrawboard.md#originaldimensions)
- [redo](index.realdrawboard.md#redo)
- [scale](index.realdrawboard.md#scale)
- [scaleFactor](index.realdrawboard.md#scalefactor)
- [settings](index.realdrawboard.md#settings)
- [startRender](index.realdrawboard.md#startrender)
- [stopRender](index.realdrawboard.md#stoprender)
- [strokes](index.realdrawboard.md#strokes)
- [svg](index.realdrawboard.md#svg)
- [svgSections](index.realdrawboard.md#svgsections)
- [time](index.realdrawboard.md#time)
- [timeStep](index.realdrawboard.md#timestep)
- [toggleRender](index.realdrawboard.md#togglerender)
- [tool](index.realdrawboard.md#tool)
- [toolSettings](index.realdrawboard.md#toolsettings)
- [undo](index.realdrawboard.md#undo)

### Methods

- [emit](index.realdrawboard.md#emit)
- [off](index.realdrawboard.md#off)
- [on](index.realdrawboard.md#on)
- [reset](index.realdrawboard.md#reset)
- [resetTime](index.realdrawboard.md#resettime)

## Constructors

### constructor

\+ **new RealDrawBoard**(`options`: [*RealDrawBoardOptions*](../modules/src_types_realdrawboardtypes.md#realdrawboardoptions)): [*RealDrawBoard*](index.realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*RealDrawBoardOptions*](../modules/src_types_realdrawboardtypes.md#realdrawboardoptions) |

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:70](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L70)

## Properties

### \_doRender

• **\_doRender**: *boolean*

Inherited from: [RealRenderer](index.realrenderer.md).[_doRender](index.realrenderer.md#_dorender)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:41](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L41)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Inherited from: [RealRenderer](index.realrenderer.md).[_offsetX](index.realrenderer.md#_offsetx)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L30)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Inherited from: [RealRenderer](index.realrenderer.md).[_offsetY](index.realrenderer.md#_offsety)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Inherited from: [RealRenderer](index.realrenderer.md).[_strokeIndex](index.realrenderer.md#_strokeindex)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L35)

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

Defined in: [src/renderers/RealRenderer/svg/svg-dom.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/svg/svg-dom.ts#L45)

Inherited from: [RealRenderer](index.realrenderer.md).[attach](index.realrenderer.md#attach)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:52](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L52)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Inherited from: [RealRenderer](index.realrenderer.md).[bgColor](index.realrenderer.md#bgcolor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Inherited from: [RealRenderer](index.realrenderer.md).[bgType](index.realrenderer.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L37)

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

Defined in: [src/renderers/RealRenderer/background.ts:11](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/background.ts#L11)

Inherited from: [RealRenderer](index.realrenderer.md).[changeBackground](index.realrenderer.md#changebackground)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:48](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L48)

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

Defined in: [src/renderers/RealRenderer/svg/svg-settings.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/svg/svg-settings.ts#L32)

Inherited from: [RealRenderer](index.realrenderer.md).[changeOffsets](index.realrenderer.md#changeoffsets)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:51](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L51)

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

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:10](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/boardManip.ts#L10)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:68](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L68)

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

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:41](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/boardManip.ts#L41)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:67](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L67)

___

### clear

• **clear**: () => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](index.realdrawboard.md)

Clear the board without resetting any parameters.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:78](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/boardManip.ts#L78)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:70](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L70)

___

### clearPreview

• **clearPreview**: () => [*RealDrawBoard*](index.realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](index.realdrawboard.md)

Clear all tool previews.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:62](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/boardManip.ts#L62)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:69](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L69)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [RealRenderer](index.realrenderer.md).[dimensions](index.realrenderer.md#dimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L28)

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

Defined in: [src/renderers/RealRenderer/draw/draw.ts:20](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/draw/draw.ts#L20)

Inherited from: [RealRenderer](index.realrenderer.md).[draw](index.realrenderer.md#draw)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:54](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L54)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[drawsPerFrame](index.realrenderer.md#drawsperframe)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L38)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### exportData

• **exportData**: () => [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

#### Type declaration:

▸ (): [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Export the data of the graph in a certain format that can be used to load the data later. Load using .importData().

**Returns:** [*RealExport*](../modules/src_types_realrenderertypes.md#realexport)

Data of the graph in a storable and loadable format.

Defined in: [src/renderers/RealRenderer/import-export.ts:13](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/import-export.ts#L13)

Inherited from: [RealRenderer](index.realrenderer.md).[exportData](index.realrenderer.md#exportdata)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:46](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L46)

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

Defined in: [src/renderers/RealRenderer/import-export.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/import-export.ts#L34)

Inherited from: [RealRenderer](index.realrenderer.md).[importData](index.realrenderer.md#importdata)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L47)

___

### originalDimensions

• **originalDimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [RealRenderer](index.realrenderer.md).[originalDimensions](index.realrenderer.md#originaldimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L32)

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

Defined in: [src/renderers/RealRenderer/undo.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/undo.ts#L24)

Inherited from: [RealRenderer](index.realrenderer.md).[redo](index.realrenderer.md#redo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:44](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L44)

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

Defined in: [src/renderers/RealRenderer/svg/svg-settings.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/svg/svg-settings.ts#L9)

Inherited from: [RealRenderer](index.realrenderer.md).[scale](index.realrenderer.md#scale)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:50](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L50)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[scaleFactor](index.realrenderer.md#scalefactor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### settings

• **settings**: [*RealDrawBoardSettings*](../modules/src_types_realdrawboardtypes.md#realdrawboardsettings)

Overrides: [RealRenderer](index.realrenderer.md).[settings](index.realrenderer.md#settings)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L34)

___

### startRender

• **startRender**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:241](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L241)

Overrides: [RealRenderer](index.realrenderer.md).[startRender](index.realrenderer.md#startrender)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:241](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L241)

___

### stopRender

• **stopRender**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:247](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L247)

Overrides: [RealRenderer](index.realrenderer.md).[stopRender](index.realrenderer.md#stoprender)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:247](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L247)

___

### strokes

• **strokes**: [*Stroke*](../modules/src_types_realrenderertypes.md#stroke)[]= []

Inherited from: [RealRenderer](index.realrenderer.md).[strokes](index.realrenderer.md#strokes)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### svg

• **svg**: SVGSVGElement

Inherited from: [RealRenderer](index.realrenderer.md).[svg](index.realrenderer.md#svg)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### svgSections

• **svgSections**: [*SVGSections*](../modules/src_types_realrenderertypes.md#svgsections)

Inherited from: [RealRenderer](index.realrenderer.md).[svgSections](index.realrenderer.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### time

• **time**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[time](index.realrenderer.md#time)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### timeStep

• **timeStep**: *number*

Inherited from: [RealRenderer](index.realrenderer.md).[timeStep](index.realrenderer.md#timestep)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L39)

___

### toggleRender

• **toggleRender**: () => [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

#### Type declaration:

▸ (): [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Toggle rendering.

**Returns:** [*RealRenderer*](index.realrenderer.md)<[*IRealRendererEvents*](../interfaces/src_constants_events_realrendererevents.irealrendererevents.md)\>

Self for chaining.

Defined in: [src/renderers/RealRenderer/draw/render.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/draw/render.ts#L40)

Inherited from: [RealRenderer](index.realrenderer.md).[toggleRender](index.realrenderer.md#togglerender)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:57](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L57)

___

### tool

• **tool**: Tool

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L35)

___

### toolSettings

• **toolSettings**: ToolSettings

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L36)

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

Defined in: [src/renderers/RealRenderer/undo.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/undo.ts#L9)

Inherited from: [RealRenderer](index.realrenderer.md).[undo](index.realrenderer.md#undo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:43](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L43)

## Methods

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

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

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealDrawBoard*](index.realdrawboard.md)

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Overrides: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:253](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealDrawBoard/RealDrawBoard.ts#L253)

___

### resetTime

▸ **resetTime**(): [*RealDrawBoard*](index.realdrawboard.md)

Resets the internal time counter.

**Returns:** [*RealDrawBoard*](index.realdrawboard.md)

Self for chaining.

Inherited from: [RealRenderer](index.realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:103](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/e37cdda/src/renderers/RealRenderer/RealRenderer.ts#L103)
