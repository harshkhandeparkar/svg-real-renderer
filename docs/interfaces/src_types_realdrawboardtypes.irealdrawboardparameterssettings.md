[SVG Real Renderer - v0.4.3](../docs.md) / [src/types/RealDrawBoardTypes](../modules/src_types_realdrawboardtypes.md) / IRealDrawBoardParametersSettings

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

Wheter undo is allowed.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[allowUndo](src_types_realdrawboardtypes.irealdrawboardoptionals.md#allowundo)

Defined in: [src/types/RealDrawBoardTypes.ts:12](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealDrawBoardTypes.ts#L12)

___

### bgColor

• **bgColor**: [*Color*](../modules/src_types_realrenderertypes.md#color)

Background color.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[bgColor](src_types_realdrawboardtypes.irealdrawboardoptionals.md#bgcolor)

Defined in: [src/types/RealRendererTypes.ts:121](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealRendererTypes.ts#L121)

___

### bgType

• **bgType**: [*BGType*](../modules/src_types_realrenderertypes.md#bgtype)

Type of the background.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[bgType](src_types_realdrawboardtypes.irealdrawboardoptionals.md#bgtype)

Defined in: [src/types/RealRendererTypes.ts:125](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealRendererTypes.ts#L125)

___

### drawsPerFrame

• **drawsPerFrame**: *number*

Number of updates to be made to the graph per frame.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[drawsPerFrame](src_types_realdrawboardtypes.irealdrawboardoptionals.md#drawsperframe)

Defined in: [src/types/RealRendererTypes.ts:129](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealRendererTypes.ts#L129)

___

### initTime

• **initTime**: *number*

Initial value of the internal time.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[initTime](src_types_realdrawboardtypes.irealdrawboardoptionals.md#inittime)

Defined in: [src/types/RealRendererTypes.ts:137](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealRendererTypes.ts#L137)

___

### maxUndos

• **maxUndos**: *number*

Maximum number of possible undos. Use a smaller number to save memory.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[maxUndos](src_types_realdrawboardtypes.irealdrawboardoptionals.md#maxundos)

Defined in: [src/types/RealDrawBoardTypes.ts:16](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealDrawBoardTypes.ts#L16)

___

### scaleFactor

• **scaleFactor**: *number*

Scaling of the graph. Larger number zooms.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[scaleFactor](src_types_realdrawboardtypes.irealdrawboardoptionals.md#scalefactor)

Defined in: [src/types/RealRendererTypes.ts:141](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealRendererTypes.ts#L141)

___

### timeStep

• **timeStep**: *number*

Amount to increment the internal time by each frame.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[timeStep](src_types_realdrawboardtypes.irealdrawboardoptionals.md#timestep)

Defined in: [src/types/RealRendererTypes.ts:133](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealRendererTypes.ts#L133)

___

### tool

• **tool**: [*Tool*](../modules/src_renderers_realdrawboard_tools_tools.md#tool)

Initially selected tool.

Inherited from: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[tool](src_types_realdrawboardtypes.irealdrawboardoptionals.md#tool)

Defined in: [src/types/RealDrawBoardTypes.ts:20](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealDrawBoardTypes.ts#L20)

___

### toolSettings

• **toolSettings**: [*ToolSettings*](../modules/src_renderers_realdrawboard_tools_tools.md#toolsettings)

Initial values for the tool settings.

Overrides: [IRealDrawBoardOptionals](src_types_realdrawboardtypes.irealdrawboardoptionals.md).[toolSettings](src_types_realdrawboardtypes.irealdrawboardoptionals.md#toolsettings)

Defined in: [src/types/RealDrawBoardTypes.ts:33](https://github.com/HarshKhandeparkar/svg-real-renderer/blob/606fa79/src/types/RealDrawBoardTypes.ts#L33)
