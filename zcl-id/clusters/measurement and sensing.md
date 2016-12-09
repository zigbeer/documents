1. [msIlluminanceMeasurement](#msIlluminanceMeasurement)
2. [msIlluminanceLevelSensing](#msIlluminanceLevelSensing)
3. [msTemperatureMeasurement](#msTemperatureMeasurement)
4. [msPressureMeasurement](#msPressureMeasurement)
5. [msFlowMeasurement](#msFlowMeasurement)
6. [msRelativeHumidity](#msRelativeHumidity)
7. [msOccupancySensing](#msOccupancySensing)

### 1. msIlluminanceMeasurement
|  Attribute Name  | Identifier |  Type  |
|:----------------:|:----------:|:------:|
|   measuredValue  |      0     | uint16 |
| minMeasuredValue |      1     | uint16 |
| maxMeasuredValue |      2     | uint16 |
|     tolerance    |      3     | uint16 |
|  lightSensorType |      4     |  enum8 |

### 2. msIlluminanceLevelSensing
|     Attribute Name     | Identifier |  Type  |
|:----------------------:|:----------:|:------:|
|       levelStatus      |      0     |  enum8 |
|     lightSensorType    |      1     |  enum8 |
| illuminanceTargetLevel |     16     | uint16 |

### 3. msTemperatureMeasurement
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|   measuredValue   |      0     |  int16  |
|  minMeasuredValue |      1     |  int16  |
|  maxMeasuredValue |      2     |  int16  |
|     tolerance     |      3     |  uint16 |
|  minPercentChange |     16     | unknown |
| minAbsoluteChange |     17     | unknown |

### 4. msPressureMeasurement
|  Attribute Name  | Identifier |  Type  |
|:----------------:|:----------:|:------:|
|   measuredValue  |      0     |  int16 |
| minMeasuredValue |      1     |  int16 |
| maxMeasuredValue |      2     |  int16 |
|     tolerance    |      3     | uint16 |

### 5. msFlowMeasurement
|  Attribute Name  | Identifier |  Type  |
|:----------------:|:----------:|:------:|
|   measuredValue  |      0     | uint16 |
| minMeasuredValue |      1     | uint16 |
| maxMeasuredValue |      2     | uint16 |
|     tolerance    |      3     | uint16 |

### 6. msRelativeHumidity
|  Attribute Name  | Identifier |  Type  |
|:----------------:|:----------:|:------:|
|   measuredValue  |      0     | uint16 |
| minMeasuredValue |      1     | uint16 |
| maxMeasuredValue |      2     | uint16 |
|     tolerance    |      3     | uint16 |

### 7. msOccupancySensing
|      Attribute Name     | Identifier |   Type  |
|:-----------------------:|:----------:|:-------:|
|        occupancy        |      0     | bitmap8 |
|   occupancySensorType   |      1     |  enum8  |
|       pirOToUDelay      |     16     |  uint16 |
|       pirUToODelay      |     17     |  uint16 |
|     pirUToOThreshold    |     18     |  uint8  |
|   ultrasonicOToUDelay   |     32     |  uint16 |
|   ultrasonicUToODelay   |     33     |  uint16 |
| ultrasonicUToOThreshold |     34     |  uint8  |
