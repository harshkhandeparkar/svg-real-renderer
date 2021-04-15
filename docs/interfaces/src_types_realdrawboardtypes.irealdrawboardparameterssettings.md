[SVG Real Renderer - v0.3.7](../docs.md) / [src/types/RealDrawBoardTypes](../modules/src_types_realdrawboardtypes.md) / IRealDrawBoardParametersSettings

# Interface: IRealDrawBoardParametersSettings

[src/types/RealDrawBoardTypes](../modules/src_types_realdrawboardtypes.md).IRealDrawBoardParametersSettings

## Hierarchy

* [*IRealDrawBoardOptionals*](src_types_realdrawboardtypes.irealdrawboardoptionals.md)

  ↳ **IRealDrawBoardParametersSettings**

## Table of contents

### Properties

- [allowUndo](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#allowundo)
- [bgColor](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#bgcolor)
- [bgType](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#bgtype)
- [drawsPerFrame](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#drawsperframe)
- [initTime](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#inittime)
- [maxUndos](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#maxundos)
- [scaleFactor](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#scalefactor)
- [timeStep](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#timestep)
- [tool](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#tool)
- [toolSettings](src_types_realdrawboardtypes.irealdrawboardparameterssettings.md#toolsettings)

## Properties

### allowUndo

• **allowUndo**: *boolean*

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[allowUndo](src_types_realdrawboardtypes.irealdrawboardoptionals.md#allowundo)

Defined in: [src/types/RealDrawBoardTypes.ts:9](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealDrawBoardTypes.ts#L9)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Background color.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[bgColor](src_types_realdrawboardtypes.irealdrawboardoptionals.md#bgcolor)

Defined in: [src/types/RealRendererTypes.ts:97](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealRendererTypes.ts#L97)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[bgType](src_types_realdrawboardtypes.irealdrawboardoptionals.md#bgtype)

Defined in: [src/types/RealRendererTypes.ts:98](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealRendererTypes.ts#L98)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Number of updates to be made to the graph per frame.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[drawsPerFrame](src_types_realdrawboardtypes.irealdrawboardoptionals.md#drawsperframe)

Defined in: [src/types/RealRendererTypes.ts:102](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealRendererTypes.ts#L102)

___

### initTime

• **initTime**: *number*

Initial value of the internal time.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[initTime](src_types_realdrawboardtypes.irealdrawboardoptionals.md#inittime)

Defined in: [src/types/RealRendererTypes.ts:110](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealRendererTypes.ts#L110)

___

### maxUndos

• **maxUndos**: *number*

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[maxUndos](src_types_realdrawboardtypes.irealdrawboardoptionals.md#maxundos)

Defined in: [src/types/RealDrawBoardTypes.ts:10](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealDrawBoardTypes.ts#L10)

___

### scaleFactor

• **scaleFactor**: *number*

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[scaleFactor](src_types_realdrawboardtypes.irealdrawboardoptionals.md#scalefactor)

Defined in: [src/types/RealRendererTypes.ts:111](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealRendererTypes.ts#L111)

___

### timeStep

• **timeStep**: *number*

Amount to increment the internal time by each frame.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[timeStep](src_types_realdrawboardtypes.irealdrawboardoptionals.md#timestep)

Defined in: [src/types/RealRendererTypes.ts:106](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealRendererTypes.ts#L106)

___

### tool

• **tool**: Tool

Initially selected tool.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[tool](src_types_realdrawboardtypes.irealdrawboardoptionals.md#tool)

Defined in: [src/types/RealDrawBoardTypes.ts:14](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealDrawBoardTypes.ts#L14)

___

### toolSettings

• **toolSettings**: ToolSettings

Initial values for the tool settings.

Overrides: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[toolSettings](src_types_realdrawboardtypes.irealdrawboardoptionals.md#toolsettings)

Defined in: [src/types/RealDrawBoardTypes.ts:27](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ff87ea8/src/types/RealDrawBoardTypes.ts#L27)
