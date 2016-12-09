1. [lightingColorCtrl](#lightingColorCtrl)
2. [lightingBallastCfg](#lightingBallastCfg)

<a name="lightingColorCtrl"></a>
### 1. lightingColorCtrl
|       Attribute Name       | Identifier |   Type  |
|:--------------------------:|:----------:|:-------:|
|         currentHue         |      0     |  uint8  |
|      currentSaturation     |      1     |  uint8  |
|        remainingTime       |      2     |  uint16 |
|          currentX          |      3     |  uint16 |
|          currentY          |      4     |  uint16 |
|      driftCompensation     |      5     |  enum8  |
|      compensationText      |      6     | charStr |
|      colorTemperature      |      7     |  uint16 |
|          colorMode         |      8     |  enum8  |
|        numPrimaries        |     16     |  uint8  |
|          primary1X         |     17     |  uint16 |
|          primary1Y         |     18     |  uint16 |
|      primary1Intensity     |     19     |  uint8  |
|          primary2X         |     21     |  uint16 |
|          primary2Y         |     22     |  uint16 |
|      primary2Intensity     |     23     |  uint8  |
|          primary3X         |     25     |  uint16 |
|          primary3Y         |     26     |  uint16 |
|      primary3Intensity     |     27     |  uint8  |
|          primary4X         |     32     |  uint16 |
|          primary4Y         |     33     |  uint16 |
|      primary4Intensity     |     34     |  uint8  |
|          primary5X         |     36     |  uint16 |
|          primary5Y         |     37     |  uint16 |
|      primary5Intensity     |     38     |  uint8  |
|          primary6X         |     40     |  uint16 |
|          primary6Y         |     41     |  uint16 |
|      primary6Intensity     |     42     |  uint8  |
|         whitePointX        |     48     |  uint16 |
|         whitePointY        |     49     |  uint16 |
|        colorPointRX        |     50     |  uint16 |
|        colorPointRY        |     51     |  uint16 |
|    colorPointRIntensity    |     52     |  uint8  |
|        colorPointGX        |     54     |  uint16 |
|        colorPointGY        |     55     |  uint16 |
|    colorPointGIntensity    |     56     |  uint8  |
|        colorPointBX        |     58     |  uint16 |
|        colorPointBY        |     59     |  uint16 |
|    colorPointBIntensity    |     60     |  uint8  |
|     enhancedCurrentHue     |    16384   |  uint16 |
|      enhancedColorMode     |    16385   |  enum8  |
|       colorLoopActive      |    16386   |  uint8  |
|     colorLoopDirection     |    16387   |  uint8  |
|        colorLoopTime       |    16388   |  uint16 |
|  colorLoopStartEnhancedHue |    16389   |  uint16 |
| colorLoopStoredEnhancedHue |    16390   |  uint16 |
|      colorCapabilities     |    16394   |  uint16 |
|    colorTempPhysicalMin    |    16395   |  uint16 |
|    colorTempPhysicalMax    |    16396   |  uint16 |

<a name="lightingBallastCfg"></a>
### 2. lightingBallastCfg
|      Attribute Name     | Identifier |   Type  |
|:-----------------------:|:----------:|:-------:|
|     physicalMinLevel    |      0     |  uint8  |
|     physicalMaxLevel    |      1     |  uint8  |
|      ballastStatus      |      2     | bitmap8 |
|         minLevel        |     16     |  uint8  |
|         maxLevel        |     17     |  uint8  |
|       powerOnLevel      |     18     |  uint8  |
|     powerOnFadeTime     |     19     |  uint16 |
|  intrinsicBallastFactor |     20     |  uint8  |
| ballastFactorAdjustment |     21     |  uint8  |
|       lampQuantity      |     32     |  uint8  |
|         lampType        |     48     | charStr |
|     lampManufacturer    |     49     | charStr |
|      lampRatedHours     |     50     |  uint24 |
|      lampBurnHours      |     51     |  uint24 |
|      lampAlarmMode      |     52     | bitmap8 |
|  lampBurnHoursTripPoint |     53     |  uint24 |
