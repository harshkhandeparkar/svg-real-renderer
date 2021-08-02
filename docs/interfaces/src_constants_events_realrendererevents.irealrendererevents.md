[SVG Real Renderer - v0.3.15](../docs.md) / [src/constants/events/RealRendererEvents](../modules/src_constants_events_realrendererevents.md) / IRealRendererEvents

# Interface: IRealRendererEvents

[src/constants/events/RealRendererEvents](../modules/src_constants_events_realrendererevents.md).IRealRendererEvents

## Hierarchy

* **IRealRendererEvents**

  ↳ [*IRealDrawBoardEvents*](src_constants_events_realdrawboardevents.irealdrawboardevents.md)

## Table of contents

### Properties

- [change-offsets](src_constants_events_realrendererevents.irealrendererevents.md#change-offsets)
- [change-scale](src_constants_events_realrendererevents.irealrendererevents.md#change-scale)
- [import](src_constants_events_realrendererevents.irealrendererevents.md#import)
- [start-render](src_constants_events_realrendererevents.irealrendererevents.md#start-render)
- [stop-render](src_constants_events_realrendererevents.irealrendererevents.md#stop-render)

## Properties

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

Defined in: [src/constants/events/RealRendererEvents.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f7a4556/src/constants/events/RealRendererEvents.ts#L9)

___

### change-scale

• **change-scale**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`newScaleFactor` | *number* |
`oldScaleFactor` | *number* |

Defined in: [src/constants/events/RealRendererEvents.ts:5](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f7a4556/src/constants/events/RealRendererEvents.ts#L5)

___

### import

• **import**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`import` | [*RealExport*](../modules/src_types_realrenderertypes.md#realexport) |

Defined in: [src/constants/events/RealRendererEvents.ts:19](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f7a4556/src/constants/events/RealRendererEvents.ts#L19)

___

### start-render

• **start-render**: *object*

#### Type declaration:

Defined in: [src/constants/events/RealRendererEvents.ts:3](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f7a4556/src/constants/events/RealRendererEvents.ts#L3)

___

### stop-render

• **stop-render**: *object*

#### Type declaration:

Defined in: [src/constants/events/RealRendererEvents.ts:4](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/f7a4556/src/constants/events/RealRendererEvents.ts#L4)
