[SVG Real Renderer - v0.3.15](../docs.md) / [src/types/RealDrawBoardTypes](../modules/src_types_realdrawboardtypes.md) / IRealDrawBoardOptionals

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

Wheter undo is allowed.

Defined in: [src/types/RealDrawBoardTypes.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealDrawBoardTypes.ts#L12)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Background color.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[bgColor](src_types_realrenderertypes.irealrendereroptionals.md#bgcolor)

Defined in: [src/types/RealRendererTypes.ts:121](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealRendererTypes.ts#L121)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Type of the background.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[bgType](src_types_realrenderertypes.irealrendereroptionals.md#bgtype)

Defined in: [src/types/RealRendererTypes.ts:125](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealRendererTypes.ts#L125)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Number of updates to be made to the graph per frame.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[drawsPerFrame](src_types_realrenderertypes.irealrendereroptionals.md#drawsperframe)

Defined in: [src/types/RealRendererTypes.ts:129](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealRendererTypes.ts#L129)

___

### initTime

• **initTime**: *number*

Initial value of the internal time.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[initTime](src_types_realrenderertypes.irealrendereroptionals.md#inittime)

Defined in: [src/types/RealRendererTypes.ts:137](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealRendererTypes.ts#L137)

___

### maxUndos

• **maxUndos**: *number*

Maximum number of possible undos. Use a smaller number to save memory.

Defined in: [src/types/RealDrawBoardTypes.ts:16](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealDrawBoardTypes.ts#L16)

___

### scaleFactor

• **scaleFactor**: *number*

Scaling of the graph. Larger number zooms.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[scaleFactor](src_types_realrenderertypes.irealrendereroptionals.md#scalefactor)

Defined in: [src/types/RealRendererTypes.ts:141](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealRendererTypes.ts#L141)

___

### timeStep

• **timeStep**: *number*

Amount to increment the internal time by each frame.

Inherited from: [IRealRendererOptionals](src_types_realrenderertypes.irealrendereroptionals.md).[timeStep](src_types_realrenderertypes.irealrendereroptionals.md#timestep)

Defined in: [src/types/RealRendererTypes.ts:133](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealRendererTypes.ts#L133)

___

### tool

• **tool**: Tool

Initially selected tool.

Defined in: [src/types/RealDrawBoardTypes.ts:20](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealDrawBoardTypes.ts#L20)

___

### toolSettings

• **toolSettings**: ToolOptions

Initial values for the tool settings.

Defined in: [src/types/RealDrawBoardTypes.ts:8](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/ef7fb73/src/types/RealDrawBoardTypes.ts#L8)
