[SVG Real Renderer - v0.3.10](../docs.md) / [src/constants/events/RealRendererEvents](../modules/src_constants_events_realrendererevents.md) / IRealRendererEvents

# Interface: IRealRendererEvents

[src/constants/events/RealRendererEvents](../modules/src_constants_events_realrendererevents.md).IRealRendererEvents

## Hierarchy

* **IRealRendererEvents**

  ↳ [*IRealDrawBoardEvents*](src_constants_events_realdrawboardevents.irealdrawboardevents.md)

## Table of contents

### Properties

- [change-offsets](src_constants_events_realrendererevents.irealrendererevents.md#change-offsets)
- [change-scale](src_constants_events_realrendererevents.irealrendererevents.md#change-scale)
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

Defined in: [src/constants/events/RealRendererEvents.ts:7](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/811974a/src/constants/events/RealRendererEvents.ts#L7)

___

### change-scale

• **change-scale**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`newScaleFactor` | *number* |
`oldScaleFactor` | *number* |

Defined in: [src/constants/events/RealRendererEvents.ts:3](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/811974a/src/constants/events/RealRendererEvents.ts#L3)

___

### start-render

• **start-render**: *object*

#### Type declaration:

Defined in: [src/constants/events/RealRendererEvents.ts:1](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/811974a/src/constants/events/RealRendererEvents.ts#L1)

___

### stop-render

• **stop-render**: *object*

#### Type declaration:

Defined in: [src/constants/events/RealRendererEvents.ts:2](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/811974a/src/constants/events/RealRendererEvents.ts#L2)
