1. [hvacPumpCfgCtrl](#hvacPumpCfgCtrl)
2. [hvacThermostat](#hvacThermostat)
3. [hvacFanCtrl](#hvacFanCtrl)
4. [hvacDehumidificationCtrl](#hvacDehumidificationCtrl)
5. [hvacUserInterfaceCfg](#hvacUserInterfaceCfg)

<a name="hvacPumpCfgCtrl"></a>
### 1. hvacPumpCfgCtrl
|     Attribute Name     | Identifier |   Type   |
|:----------------------:|:----------:|:--------:|
|       maxPressure      |      0     |   int16  |
|        maxSpeed        |      1     |  uint16  |
|         maxFlow        |      2     |  uint16  |
|    minConstPressure    |      3     |   int16  |
|    maxConstPressure    |      4     |   int16  |
|     minCompPressure    |      5     |   int16  |
|     maxCompPressure    |      6     |   int16  |
|      minConstSpeed     |      7     |  uint16  |
|      maxConstSpeed     |      8     |  uint16  |
|      minConstFlow      |      9     |  uint16  |
|      maxConstFlow      |     10     |  uint16  |
|      minConstTemp      |     11     |   int16  |
|      maxConstTemp      |     12     |   int16  |
|       pumpStatus       |     16     | bitmap16 |
| effectiveOperationMode |     17     |   enum8  |
|  effectiveControlMode  |     18     |   enum8  |
|        capacity        |     19     |   int16  |
|          speed         |     20     |  uint16  |
|  lifetimeRunningHours  |     21     |  uint24  |
|          power         |     22     |  uint24  |
| lifetimeEnergyConsumed |     23     |  uint32  |
|      operationMode     |     32     |   enum8  |
|       controlMode      |     33     |   enum8  |
|        alarmMask       |     33     | bitmap16 |

<a name="hvacThermostat"></a>
### 2. hvacThermostat
|         Attribute Name        | Identifier |   Type   |
|:-----------------------------:|:----------:|:--------:|
|           localTemp           |      0     |   int16  |
|          outdoorTemp          |      1     |   int16  |
|            ocupancy           |      2     |  bitmap8 |
|    absMinHeatSetpointLimit    |      3     |   int16  |
|    absMaxHeatSetpointLimit    |      4     |   int16  |
|    absMinCoolSetpointLimit    |      5     |   int16  |
|    absMaxCoolSetpointLimit    |      6     |   int16  |
|        pICoolingDemand        |      7     |   uint8  |
|        pIHeatingDemand        |      8     |   uint8  |
|        systemTypeConfig       |      9     |  bitmap8 |
|  localTemperatureCalibration  |     16     |   int8   |
|    occupiedCoolingSetpoint    |     17     |   int16  |
|    occupiedHeatingSetpoint    |     18     |   int16  |
|   unoccupiedCoolingSetpoint   |     19     |   int16  |
|   unoccupiedHeatingSetpoint   |     20     |   int16  |
|      minHeatSetpointLimit     |     21     |   int16  |
|      maxHeatSetpointLimit     |     22     |   int16  |
|      minCoolSetpointLimit     |     23     |   int16  |
|      maxCoolSetpointLimit     |     24     |   int16  |
|      minSetpointDeadBand      |     25     |   int8   |
|         remoteSensing         |     26     |  bitmap8 |
|         ctrlSeqeOfOper        |     27     |   enum8  |
|           systemMode          |     28     |   enum8  |
|           alarmMask           |     29     |  bitmap8 |
|          runningMode          |     30     |   enum8  |
|          startOfWeek          |     32     |   enum8  |
|      numberOfWeeklyTrans      |     33     |   uint8  |
|       numberOfDailyTrans      |     34     |   uint8  |
|        tempSetpointHold       |     35     |   enum8  |
|    tempSetpointHoldDuration   |     36     |  uint16  |
|       programingOperMode      |     37     |  bitmap8 |
|          runningState         |     41     | bitmap16 |
|      setpointChangeSource     |     48     |   enum8  |
|      setpointChangeAmount     |     49     |   int16  |
| setpointChangeSourceTimeStamp |     50     |    utc   |
|             acType            |     64     |   enum8  |
|           acCapacity          |     65     |  uint16  |
|       acRefrigerantType       |     66     |   enum8  |
|        acConpressorType       |     67     |   enum8  |
|          acErrorCode          |     68     | bitmap32 |
|        acLouverPosition       |     69     |   enum8  |
|           acCollTemp          |     70     |   int16  |
|        acCapacityFormat       |     71     |   enum8  |

<a name="hvacFanCtrl"></a>
### 3. hvacFanCtrl
|  Attribute Name | Identifier |  Type |
|:---------------:|:----------:|:-----:|
|     fanMode     |      0     | enum8 |
| fanModeSequence |      1     | enum8 |

<a name="hvacDehumidificationCtrl"></a>
### 4. hvacDehumidificationCtrl
|    Attribute Name    | Identifier |  Type |
|:--------------------:|:----------:|:-----:|
|   relativeHumidity   |      0     | uint8 |
|    dehumidCooling    |      1     | uint8 |
|   rhDehumidSetpoint  |     16     | uint8 |
| relativeHumidityMode |     17     | enum8 |
|    dehumidLockout    |     18     | enum8 |
|   dehumidHysteresis  |     19     | uint8 |
|    dehumidMaxCool    |     20     | uint8 |
| relativeHumidDisplay |     21     | enum8 |

<a name="hvacUserInterfaceCfg"></a>
### 5. hvacUserInterfaceCfg
|     Attribute Name    | Identifier |  Type |
|:---------------------:|:----------:|:-----:|
|    tempDisplayMode    |      0     | enum8 |
|     keypadLockout     |      1     | enum8 |
| programmingVisibility |      2     | enum8 |