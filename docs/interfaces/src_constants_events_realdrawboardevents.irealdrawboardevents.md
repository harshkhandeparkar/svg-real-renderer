[SVG Real Renderer - v0.4.2](../docs.md) / [src/constants/events/RealDrawBoardEvents](../modules/src_constants_events_realdrawboardevents.md) / IRealDrawBoardEvents

# Interface: IRealDrawBoardEvents

[src/constants/events/RealDrawBoardEvents](../modules/src_constants_events_realdrawboardevents.md).IRealDrawBoardEvents

## Hierarchy

* [*IRealRendererEvents*](src_constants_events_realrendererevents.irealrendererevents.md)

  ↳ **IRealDrawBoardEvents**

## Table of contents

### Properties

- [board-cleared](src_constants_events_realdrawboardevents.irealdrawboardevents.md#board-cleared)
- [board-reset](src_constants_events_realdrawboardevents.irealdrawboardevents.md#board-reset)
- [change-offsets](src_constants_events_realdrawboardevents.irealdrawboardevents.md#change-offsets)
- [change-scale](src_constants_events_realdrawboardevents.irealdrawboardevents.md#change-scale)
- [import](src_constants_events_realdrawboardevents.irealdrawboardevents.md#import)
- [start-render](src_constants_events_realdrawboardevents.irealdrawboardevents.md#start-render)
- [stop-render](src_constants_events_realdrawboardevents.irealdrawboardevents.md#stop-render)
- [tool-change](src_constants_events_realdrawboardevents.irealdrawboardevents.md#tool-change)
- [tool-setting-change](src_constants_events_realdrawboardevents.irealdrawboardevents.md#tool-setting-change)

## Properties

### board-cleared

• **board-cleared**: *object*

#### Type declaration:

Defined in: [src/constants/events/RealDrawBoardEvents.ts:13](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealDrawBoardEvents.ts#L13)

___

### board-reset

• **board-reset**: *object*

#### Type declaration:

Defined in: [src/constants/events/RealDrawBoardEvents.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealDrawBoardEvents.ts#L14)

___

### change-offsets

• **change-offsets**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`newOffsets` | *object* |
`newOffsets.x` | *number* |
`newOffsets.y` | *number* |
`oldOffsets` | *object* |
`oldOffsets.x` | *number* |
`oldOffsets.y` | *number* |

Inherited from: [IRealRendererEvents](src_constants_events_realrendererevents.irealrendererevents.md).[change-offsets](src_constants_events_realrendererevents.irealrendererevents.md#change-offsets)

Defined in: [src/constants/events/RealRendererEvents.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealRendererEvents.ts#L9)

___

### change-scale

• **change-scale**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`newScaleFactor` | *number* |
`oldScaleFactor` | *number* |

Inherited from: [IRealRendererEvents](src_constants_events_realrendererevents.irealrendererevents.md).[change-scale](src_constants_events_realrendererevents.irealrendererevents.md#change-scale)

Defined in: [src/constants/events/RealRendererEvents.ts:5](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealRendererEvents.ts#L5)

___

### import

• **import**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`import` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) |

Inherited from: [IRealRendererEvents](src_constants_events_realrendererevents.irealrendererevents.md).[import](src_constants_events_realrendererevents.irealrendererevents.md#import)

Defined in: [src/constants/events/RealRendererEvents.ts:19](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealRendererEvents.ts#L19)

___

### start-render

• **start-render**: *object*

#### Type declaration:

Inherited from: [IRealRendererEvents](src_constants_events_realrendererevents.irealrendererevents.md).[start-render](src_constants_events_realrendererevents.irealrendererevents.md#start-render)

Defined in: [src/constants/events/RealRendererEvents.ts:3](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealRendererEvents.ts#L3)

___

### stop-render

• **stop-render**: *object*

#### Type declaration:

Inherited from: [IRealRendererEvents](src_constants_events_realrendererevents.irealrendererevents.md).[stop-render](src_constants_events_realrendererevents.irealrendererevents.md#stop-render)

Defined in: [src/constants/events/RealRendererEvents.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealRendererEvents.ts#L4)

___

### tool-change

• **tool-change**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`newTool` | [*Tool*](../modules/src_renderers_realdrawboard_tools_tools.md#tool) |
`oldTool` | [*Tool*](../modules/src_renderers_realdrawboard_tools_tools.md#tool) |

Defined in: [src/constants/events/RealDrawBoardEvents.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealDrawBoardEvents.ts#L4)

___

### tool-setting-change

• **tool-setting-change**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`newValue` | *number* \| *boolean* \| [*Color*](../modules/src_types_realrenderertypes.md#color) \| *new* \| *edit* |
`oldValue` | *number* \| *boolean* \| [*Color*](../modules/src_types_realrenderertypes.md#color) \| *new* \| *edit* |
`settingName` | *brushColor* \| *brushSize* \| *eraserSize* \| *lineThickness* \| *lineColor* \| *fontSize* \| *fontColor* \| *textToolMode* \| *italic* \| *bold* \| *underline* |

Defined in: [src/constants/events/RealDrawBoardEvents.ts:8](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/2797013/src/constants/events/RealDrawBoardEvents.ts#L8)
