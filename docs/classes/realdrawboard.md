[SVG Real Renderer - v0.3.3](docs/docs.md) / RealDrawBoard

# Class: RealDrawBoard

## Hierarchy

* [*RealRenderer*](docs/classes/realrenderer.md)<IRealDrawBoardEvents\>

  ↳ **RealDrawBoard**

## Table of contents

### Constructors

- [constructor](docs/classes/realdrawboard.md#constructor)

### Properties

- [\_addDOMEvents](docs/classes/realdrawboard.md#_adddomevents)
- [\_doPreview](docs/classes/realdrawboard.md#_dopreview)
- [\_doRender](docs/classes/realdrawboard.md#_dorender)
- [\_doStroke](docs/classes/realdrawboard.md#_dostroke)
- [\_endStroke](docs/classes/realdrawboard.md#_endstroke)
- [\_getMouseCoords](docs/classes/realdrawboard.md#_getmousecoords)
- [\_getTouchCoords](docs/classes/realdrawboard.md#_gettouchcoords)
- [\_lastCoords](docs/classes/realdrawboard.md#_lastcoords)
- [\_offsetX](docs/classes/realdrawboard.md#_offsetx)
- [\_offsetY](docs/classes/realdrawboard.md#_offsety)
- [\_onScroll](docs/classes/realdrawboard.md#_onscroll)
- [\_previewStroke](docs/classes/realdrawboard.md#_previewstroke)
- [\_removeDOMEvents](docs/classes/realdrawboard.md#_removedomevents)
- [\_resetBoard](docs/classes/realdrawboard.md#_resetboard)
- [\_startStroke](docs/classes/realdrawboard.md#_startstroke)
- [\_strokeIndex](docs/classes/realdrawboard.md#_strokeindex)
- [\_toolPreview](docs/classes/realdrawboard.md#_toolpreview)
- [bgColor](docs/classes/realdrawboard.md#bgcolor)
- [bgType](docs/classes/realdrawboard.md#bgtype)
- [changeTool](docs/classes/realdrawboard.md#changetool)
- [changeToolSetting](docs/classes/realdrawboard.md#changetoolsetting)
- [clear](docs/classes/realdrawboard.md#clear)
- [clearPreview](docs/classes/realdrawboard.md#clearpreview)
- [dimensions](docs/classes/realdrawboard.md#dimensions)
- [drawsPerFrame](docs/classes/realdrawboard.md#drawsperframe)
- [eventHandlers](docs/classes/realdrawboard.md#eventhandlers)
- [originalDimensions](docs/classes/realdrawboard.md#originaldimensions)
- [redo](docs/classes/realdrawboard.md#redo)
- [scaleFactor](docs/classes/realdrawboard.md#scalefactor)
- [settings](docs/classes/realdrawboard.md#settings)
- [strokes](docs/classes/realdrawboard.md#strokes)
- [svg](docs/classes/realdrawboard.md#svg)
- [svgSections](docs/classes/realdrawboard.md#svgsections)
- [time](docs/classes/realdrawboard.md#time)
- [timeStep](docs/classes/realdrawboard.md#timestep)
- [tool](docs/classes/realdrawboard.md#tool)
- [toolSettings](docs/classes/realdrawboard.md#toolsettings)
- [undo](docs/classes/realdrawboard.md#undo)

### Methods

- [\_addStroke](docs/classes/realdrawboard.md#_addstroke)
- [\_display](docs/classes/realdrawboard.md#_display)
- [\_draw](docs/classes/realdrawboard.md#_draw)
- [\_drawFunc](docs/classes/realdrawboard.md#_drawfunc)
- [\_mouseDownEventListener](docs/classes/realdrawboard.md#_mousedowneventlistener)
- [\_mouseLeaveEventListener](docs/classes/realdrawboard.md#_mouseleaveeventlistener)
- [\_mouseMoveEventListener](docs/classes/realdrawboard.md#_mousemoveeventlistener)
- [\_mouseUpEventListener](docs/classes/realdrawboard.md#_mouseupeventlistener)
- [\_panEventListener](docs/classes/realdrawboard.md#_paneventlistener)
- [\_previewMouseMoveEventListener](docs/classes/realdrawboard.md#_previewmousemoveeventlistener)
- [\_previewTouchMoveEventListener](docs/classes/realdrawboard.md#_previewtouchmoveeventlistener)
- [\_render](docs/classes/realdrawboard.md#_render)
- [\_setViewBox](docs/classes/realdrawboard.md#_setviewbox)
- [\_touchEndEventListener](docs/classes/realdrawboard.md#_touchendeventlistener)
- [\_touchMoveEventListener](docs/classes/realdrawboard.md#_touchmoveeventlistener)
- [\_touchStartEventListener](docs/classes/realdrawboard.md#_touchstarteventlistener)
- [\_wheelEventListener](docs/classes/realdrawboard.md#_wheeleventlistener)
- [changeOffsets](docs/classes/realdrawboard.md#changeoffsets)
- [draw](docs/classes/realdrawboard.md#draw)
- [emit](docs/classes/realdrawboard.md#emit)
- [exportData](docs/classes/realdrawboard.md#exportdata)
- [importData](docs/classes/realdrawboard.md#importdata)
- [off](docs/classes/realdrawboard.md#off)
- [on](docs/classes/realdrawboard.md#on)
- [reset](docs/classes/realdrawboard.md#reset)
- [resetTime](docs/classes/realdrawboard.md#resettime)
- [scale](docs/classes/realdrawboard.md#scale)
- [startRender](docs/classes/realdrawboard.md#startrender)
- [stopRender](docs/classes/realdrawboard.md#stoprender)
- [toggleRender](docs/classes/realdrawboard.md#togglerender)

## Constructors

### constructor

\+ **new RealDrawBoard**(`options`: RealDrawBoardOptions): [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | RealDrawBoardOptions |

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Overrides: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:58](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L58)

## Properties

### \_addDOMEvents

• `Protected` **\_addDOMEvents**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/_DOMEvents.ts:3](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/_DOMEvents.ts#L3)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:45](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L45)

___

### \_doPreview

• **\_doPreview**: *boolean*= true

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:38](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L38)

___

### \_doRender

• **\_doRender**: *boolean*

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[_doRender](docs/classes/realrenderer.md#_dorender)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L37)

___

### \_doStroke

• `Protected` **\_doStroke**: (`coords`: Coordinate, `identifier`: *string*) => *void* \| (`coords`: Coordinate, `identifier`: *string*) => *void* \| (`coords`: Coordinate, `identifier`: *string*) => *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:49](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L49)

___

### \_endStroke

• `Protected` **\_endStroke**: (`endCoords`: Coordinate, `identifier`: *string*) => *void* \| (`endCoords`: Coordinate, `identifier`: *string*) => *void* \| (`endCoords`: Coordinate, `identifier`: *string*) => *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:48](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L48)

___

### \_getMouseCoords

• `Protected` **\_getMouseCoords**: (`e`: MouseEvent \| WheelEvent) => [*number*, *number*]

#### Type declaration:

▸ (`e`: MouseEvent \| WheelEvent): [*number*, *number*]

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent \| WheelEvent |

**Returns:** [*number*, *number*]

Defined in: [src/renderers/RealDrawBoard/_coords.ts:3](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/_coords.ts#L3)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:52](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L52)

___

### \_getTouchCoords

• `Protected` **\_getTouchCoords**: (`touch`: Touch) => [*number*, *number*]

#### Type declaration:

▸ (`touch`: Touch): [*number*, *number*]

#### Parameters:

Name | Type |
:------ | :------ |
`touch` | Touch |

**Returns:** [*number*, *number*]

Defined in: [src/renderers/RealDrawBoard/_coords.ts:16](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/_coords.ts#L16)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:53](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L53)

___

### \_lastCoords

• **\_lastCoords**: *Map*<string, Coordinate\>

key -> identifier, value -> coordinate
 For mouse, the key is 'mouse', for touches, stringified identifier -> https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:37](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L37)

___

### \_offsetX

• **\_offsetX**: *number*= 0

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[_offsetX](docs/classes/realrenderer.md#_offsetx)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:26](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L26)

___

### \_offsetY

• **\_offsetY**: *number*= 0

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[_offsetY](docs/classes/realrenderer.md#_offsety)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L27)

___

### \_onScroll

• `Protected` **\_onScroll**: (`scrollDelta`: *number*, `coords`: Coordinate, `identifier`: *string*) => *void* \| (`scrollDelta`: *number*, `coords`: Coordinate, `identifier`: *string*) => *void* \| (`scrollDelta`: *number*, `coords`: Coordinate, `identifier`: *string*) => *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:51](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L51)

___

### \_previewStroke

• **\_previewStroke**: *Map*<string, Stroke\>

The preview for the current stroke

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:42](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L42)

___

### \_removeDOMEvents

• `Protected` **\_removeDOMEvents**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/_DOMEvents.ts:16](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/_DOMEvents.ts#L16)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:46](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L46)

___

### \_resetBoard

• `Protected` **\_resetBoard**: () => [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:83](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/boardManip.ts#L83)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:44](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L44)

___

### \_startStroke

• `Protected` **\_startStroke**: (`coords`: Coordinate, `identifier`: *string*) => *void* \| (`coords`: Coordinate, `identifier`: *string*) => *void* \| (`coords`: Coordinate, `identifier`: *string*) => *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L47)

___

### \_strokeIndex

• **\_strokeIndex**: *number*= -1

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[_strokeIndex](docs/classes/realrenderer.md#_strokeindex)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L31)

___

### \_toolPreview

• `Protected` **\_toolPreview**: (`coords`: Coordinate, `identifier`: *string*) => *void* \| (`coords`: Coordinate, `identifier`: *string*) => *void* \| (`coords`: Coordinate, `identifier`: *string*) => *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:50](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L50)

___

### bgColor

• **bgColor**: Color

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[bgColor](docs/classes/realrenderer.md#bgcolor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L32)

___

### bgType

• **bgType**: BGType

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[bgType](docs/classes/realrenderer.md#bgtype)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L33)

___

### changeTool

• **changeTool**: (`newTool`: Tool) => [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Type declaration:

▸ (`newTool`: Tool): [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`newTool` | Tool |

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:5](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/boardManip.ts#L5)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:56](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L56)

___

### changeToolSetting

• **changeToolSetting**: <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]) => [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Type declaration:

▸ <SettingName\>(`settingName`: SettingName, `value`: ToolSettings[SettingName]): [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`SettingName` | *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor* |

#### Parameters:

Name | Type |
:------ | :------ |
`settingName` | SettingName |
`value` | ToolSettings[SettingName] |

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:30](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/boardManip.ts#L30)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:55](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L55)

___

### clear

• **clear**: () => [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:59](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/boardManip.ts#L59)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:58](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L58)

___

### clearPreview

• **clearPreview**: () => [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Type declaration:

▸ (): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Defined in: [src/renderers/RealDrawBoard/boardManip.ts:47](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/boardManip.ts#L47)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:57](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L57)

___

### dimensions

• **dimensions**: GraphDimensions

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[dimensions](docs/classes/realrenderer.md#dimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:24](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L24)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[drawsPerFrame](docs/classes/realrenderer.md#drawsperframe)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:34](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L34)

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

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[eventHandlers](docs/classes/realrenderer.md#eventhandlers)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/events/eventEmitter.ts#L2)

___

### originalDimensions

• **originalDimensions**: GraphDimensions

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[originalDimensions](docs/classes/realrenderer.md#originaldimensions)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L28)

___

### redo

• **redo**: (`numRedo`: *number*) => [*RealRenderer*](docs/classes/realrenderer.md)<IRealRendererEvents\>

#### Type declaration:

▸ (`numRedo`: *number*): [*RealRenderer*](docs/classes/realrenderer.md)<IRealRendererEvents\>

#### Parameters:

Name | Type |
:------ | :------ |
`numRedo` | *number* |

**Returns:** [*RealRenderer*](docs/classes/realrenderer.md)<IRealRendererEvents\>

Defined in: [src/renderers/RealRenderer/undo.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/undo.ts#L14)

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[redo](docs/classes/realrenderer.md#redo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:40](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L40)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[scaleFactor](docs/classes/realrenderer.md#scalefactor)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:25](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L25)

___

### settings

• **settings**: IRealDrawBoardNonOptionals & IRealDrawBoardOptionals

Overrides: [RealRenderer](docs/classes/realrenderer.md).[settings](docs/classes/realrenderer.md#settings)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:31](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L31)

___

### strokes

• **strokes**: Stroke[]= []

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[strokes](docs/classes/realrenderer.md#strokes)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:29](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L29)

___

### svg

• **svg**: SVGSVGElement

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[svg](docs/classes/realrenderer.md#svg)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:22](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L22)

___

### svgSections

• **svgSections**: SVGSections

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[svgSections](docs/classes/realrenderer.md#svgsections)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:23](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L23)

___

### time

• **time**: *number*

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[time](docs/classes/realrenderer.md#time)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:36](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L36)

___

### timeStep

• **timeStep**: *number*

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[timeStep](docs/classes/realrenderer.md#timestep)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:35](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L35)

___

### tool

• **tool**: Tool

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:32](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L32)

___

### toolSettings

• **toolSettings**: ToolSettings

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L33)

___

### undo

• **undo**: (`numUndo`: *number*) => [*RealRenderer*](docs/classes/realrenderer.md)<IRealRendererEvents\>

#### Type declaration:

▸ (`numUndo`: *number*): [*RealRenderer*](docs/classes/realrenderer.md)<IRealRendererEvents\>

#### Parameters:

Name | Type |
:------ | :------ |
`numUndo` | *number* |

**Returns:** [*RealRenderer*](docs/classes/realrenderer.md)<IRealRendererEvents\>

Defined in: [src/renderers/RealRenderer/undo.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/undo.ts#L4)

Inherited from: [RealRenderer](docs/classes/realrenderer.md).[undo](docs/classes/realrenderer.md#undo)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:39](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L39)

## Methods

### \_addStroke

▸ `Protected`**_addStroke**(`stroke`: Stroke): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`stroke` | Stroke |

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:138](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L138)

___

### \_display

▸ **_display**(`stroke`: Stroke): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`stroke` | Stroke |

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:190](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L190)

___

### \_draw

▸ `Protected`**_draw**(): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:131](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L131)

___

### \_drawFunc

▸ `Protected`**_drawFunc**(`time`: *number*): [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Parameters:

Name | Type |
:------ | :------ |
`time` | *number* |

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:127](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L127)

___

### \_mouseDownEventListener

▸ `Protected`**_mouseDownEventListener**(`e`: MouseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:80](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L80)

___

### \_mouseLeaveEventListener

▸ `Protected`**_mouseLeaveEventListener**(`e`: MouseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:114](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L114)

___

### \_mouseMoveEventListener

▸ `Protected`**_mouseMoveEventListener**(`e`: MouseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:126](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L126)

___

### \_mouseUpEventListener

▸ `Protected`**_mouseUpEventListener**(`e`: MouseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:99](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L99)

___

### \_panEventListener

▸ `Protected`**_panEventListener**(`e`: MouseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:154](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L154)

___

### \_previewMouseMoveEventListener

▸ `Protected`**_previewMouseMoveEventListener**(`e`: MouseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | MouseEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:132](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L132)

___

### \_previewTouchMoveEventListener

▸ `Protected`**_previewTouchMoveEventListener**(`e`: TouchEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | TouchEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:208](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L208)

___

### \_render

▸ `Protected`**_render**(): *void*

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:181](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L181)

___

### \_setViewBox

▸ `Protected`**_setViewBox**(`dimensions`: GraphDimensions, `xOffset`: *number*, `yOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dimensions` | GraphDimensions |
`xOffset` | *number* |
`yOffset` | *number* |

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:123](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L123)

___

### \_touchEndEventListener

▸ `Protected`**_touchEndEventListener**(`e`: TouchEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | TouchEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:180](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L180)

___

### \_touchMoveEventListener

▸ `Protected`**_touchMoveEventListener**(`e`: TouchEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | TouchEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:197](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L197)

___

### \_touchStartEventListener

▸ `Protected`**_touchStartEventListener**(`e`: TouchEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | TouchEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:162](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L162)

___

### \_wheelEventListener

▸ `Protected`**_wheelEventListener**(`e`: WheelEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | WheelEvent |

**Returns:** *void*

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:145](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L145)

___

### changeOffsets

▸ **changeOffsets**(`xOffset`: *number*, `yOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`xOffset` | *number* |
`yOffset` | *number* |

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:163](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L163)

___

### draw

▸ **draw**(`numDraws?`: *number*): [*RealDrawBoard*](docs/classes/realdrawboard.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`numDraws` | *number* | 1 |

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:143](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L143)

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

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:28](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/events/eventEmitter.ts#L28)

___

### exportData

▸ **exportData**(): RealExport

**Returns:** RealExport

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:217](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L217)

___

### importData

▸ **importData**(`data`: RealExport): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`data` | RealExport |

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:232](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L232)

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

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:21](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/events/eventEmitter.ts#L21)

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

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/events/eventEmitter.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/events/eventEmitter.ts#L12)

___

### reset

▸ **reset**(): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Overrides: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:237](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L237)

___

### resetTime

▸ **resetTime**(): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:277](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L277)

___

### scale

▸ **scale**(`scaleFactor`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** *void*

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:148](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L148)

___

### startRender

▸ **startRender**(): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Overrides: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:225](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L225)

___

### stopRender

▸ **stopRender**(): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Overrides: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealDrawBoard/RealDrawBoard.ts:231](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealDrawBoard/RealDrawBoard.ts#L231)

___

### toggleRender

▸ **toggleRender**(): [*RealDrawBoard*](docs/classes/realdrawboard.md)

**Returns:** [*RealDrawBoard*](docs/classes/realdrawboard.md)

Inherited from: [RealRenderer](docs/classes/realrenderer.md)

Defined in: [src/renderers/RealRenderer/RealRenderer.ts:211](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/3b2f83f/src/renderers/RealRenderer/RealRenderer.ts#L211)
