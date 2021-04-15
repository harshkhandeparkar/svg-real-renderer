[SVG Real Renderer - v0.3.4](../docs.md) / [src/types/RealDrawBoardTypes](../modules/src_types_realdrawboardtypes.md) / IRealDrawBoardOptionals

# Interface: IRealDrawBoardOptionals

[src/types/RealDrawBoardTypes](../modules/src_types_realdrawboardtypes.md).IRealDrawBoardOptionals

## Hierarchy

* [*IRealRendererOptionals*](src_types_realrenderertypes.irealrendereroptionals.md)

  ↳ **IRealDrawBoardOptionals**

  ↳↳ [*IRealDrawBoardParametersSettings*](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md)

## Table of contents

### Properties

- [allowUndo](src_types_realdrawboardtypes.irealdrawboardoptionals.md#allowundo)
- [bgColor](src_types_realdrawboardtypes.irealdrawboardoptionals.md#bgcolor)
- [bgType](src_types_realdrawboardtypes.irealdrawboardoptionals.md#bgtype)
- [dimensions](src_types_realdrawboardtypes.irealdrawboardoptionals.md#dimensions)
- [drawsPerFrame](src_types_realdrawboardtypes.irealdrawboardoptionals.md#drawsperframe)
- [initTime](src_types_realdrawboardtypes.irealdrawboardoptionals.md#inittime)
- [maxUndos](src_types_realdrawboardtypes.irealdrawboardoptionals.md#maxundos)
- [scaleFactor](src_types_realdrawboardtypes.irealdrawboardoptionals.md#scalefactor)
- [timeStep](src_types_realdrawboardtypes.irealdrawboardoptionals.md#timestep)
- [tool](src_types_realdrawboardtypes.irealdrawboardoptionals.md#tool)
- [toolSettings](src_types_realdrawboardtypes.irealdrawboardoptionals.md#toolsettings)

## Properties

### allowUndo

• **allowUndo**: *boolean*

Defined in: [src/types/RealDrawBoardTypes.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealDrawBoardTypes.ts#L9)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Background color.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[bgColor](src_types_realrenderertypes.irealrendereroptionals.md#bgcolor)

Defined in: [src/types/RealRendererTypes.ts:98](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L98)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[bgType](src_types_realrenderertypes.irealrendereroptionals.md#bgtype)

Defined in: [src/types/RealRendererTypes.ts:99](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L99)

___

### dimensions

• **dimensions**: [*GraphDimensions*](../modules/src_types_realrenderertypes.md#graphdimensions)

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[dimensions](src_types_realrenderertypes.irealrendereroptionals.md#dimensions)

Defined in: [src/types/RealRendererTypes.ts:94](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L94)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Number of updates to be made to the graph per frame.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[drawsPerFrame](src_types_realrenderertypes.irealrendereroptionals.md#drawsperframe)

Defined in: [src/types/RealRendererTypes.ts:103](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L103)

___

### initTime

• **initTime**: *number*

Initial value of the internal time.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[initTime](src_types_realrenderertypes.irealrendereroptionals.md#inittime)

Defined in: [src/types/RealRendererTypes.ts:111](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L111)

___

### maxUndos

• **maxUndos**: *number*

Defined in: [src/types/RealDrawBoardTypes.ts:10](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealDrawBoardTypes.ts#L10)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[scaleFactor](src_types_realrenderertypes.irealrendereroptionals.md#scalefactor)

Defined in: [src/types/RealRendererTypes.ts:112](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L112)

___

### timeStep

• **timeStep**: *number*

Amount to increment the internal time by each frame.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[timeStep](src_types_realrenderertypes.irealrendereroptionals.md#timestep)

Defined in: [src/types/RealRendererTypes.ts:107](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealRendererTypes.ts#L107)

___

### tool

• **tool**: Tool

Initially selected tool.

Defined in: [src/types/RealDrawBoardTypes.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealDrawBoardTypes.ts#L14)

___

### toolSettings

• **toolSettings**: ToolOptions

Initial values for the tool settings.

Defined in: [src/types/RealDrawBoardTypes.ts:8](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/cdeee4a/src/types/RealDrawBoardTypes.ts#L8)
