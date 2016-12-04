1. [closuresShadeCfg](#closuresShadeCfg)
2. [closuresDoorLock](#closuresDoorLock)
3. [closuresWindowCovering](#closuresWindowCovering)


<a name="closuresShadeCfg"></a>
### 1. closuresShadeCfg
|         Name        | Identifier |   Type  |
|:-------------------:|:----------:|:-------:|
| physicalClosedLimit |      0     |  uint16 |
|    motorStepSize    |      1     |  uint8  |
|        status       |      2     | bitmap8 |
|      losedLimit     |     16     |  uint16 |
|         mode        |     18     |  enum8  |

<a name="closuresDoorLock"></a>
### 2. closuresDoorLock
|                  Name                 | Identifier |   Type   |
|:-------------------------------------:|:----------:|:--------:|
|               lockState               |      0     |   enum8  |
|                lockType               |     38     | bitmap16 |
|            actuatorEnabled            |      2     |  boolean |
|               doorState               |      3     |   enum8  |
|             doorOpenEvents            |      4     |  uint32  |
|            doorClosedEvents           |      5     |  uint32  |
|               openPeriod              |      6     |  uint16  |
|       numOfLockRecordsSupported       |     16     |  uint16  |
|        numOfTotalUsersSupported       |     17     |  uint16  |
|         numOfPinUsersSupported        |     18     |  uint16  |
|        numOfRfidUsersSupported        |     19     |  uint16  |
| numOfWeekDaySchedulesSupportedPerUser |     20     |   uint8  |
| numOfYearDaySchedulesSupportedPerUser |     21     |   uint8  |
|    numOfHolidayScheduledsSupported    |     22     |   uint8  |
|               maxPinLen               |     23     |   uint8  |
|               minPinLen               |     24     |   uint8  |
|               maxRfidLen              |     25     |   uint8  |
|               minRfidLen              |     26     |   uint8  |
|             enable_Logging            |     32     |  boolean |
|                language               |     33     |  charStr |
|              ledSettings              |     34     |   uint8  |
|             autoRelockTime            |     35     |  uint32  |
|              soundVolume              |     36     |   uint8  |
|             operatingMode             |     37     |  uint32  |
|      defaultConfigurationRegister     |     39     | bitmap16 |
|         enableLocalProgramming        |     40     |  boolean |
|         enableOneTouchLocking         |     41     |  boolean |
|         enableInsideStatusLed         |     42     |  boolean |
|        enablePrivacyModeButton        |     43     |  boolean |
|          wrongCodeEntryLimit          |     48     |   uint8  |
|      userCodeTemporaryDisableTime     |     49     |   uint8  |
|               sendPinOta              |     50     |  boolean |
|        requirePinForRfOperation       |     51     |  boolean |
|          zigbeeSecurityLevel          |     52     |   uint8  |
|               alarmMask               |     64     | bitmap16 |
|        keypadOperationEventMask       |     65     | bitmap16 |
|          rfOperationEventMask         |     66     | bitmap16 |
|        manualOperationEventMask       |     67     | bitmap16 |
|         rfidOperationEventMask        |     68     | bitmap16 |
|       keypadProgrammingEventMask      |     69     | bitmap16 |
|         rfProgrammingEventMask        |     70     | bitmap16 |
|        rfidProgrammingEventMask       |     71     | bitmap16 |

<a name="closuresWindowCovering"></a>
### 3. closuresWindowCovering
|               Name              | Identifier |   Type   |
|:-------------------------------:|:----------:|:--------:|
|        windowCoveringType       |      0     |   enum8  |
|     physicalCloseLimitLiftCm    |      1     |  uint16  |
|  physicalCloseLimitTiltDdegree  |      2     |  uint16  |
|      currentPositionLiftCm      |      3     |  uint16  |
|    currentPositionTiltDdegree   |      4     |  uint16  |
|        numOfActuationLift       |      5     |  uint16  |
|        numOfActuationTilt       |     22     |  uint16  |
|           configStatus          |      7     |  bitmap8 |
|  currentPositionLiftPercentage  |      8     |   uint8  |
|  currentPositionTiltPercentage  |      9     |   uint8  |
|     installedOpenLimitLiftCm    |     16     |  uint16  |
|    installedClosedLimitLiftCm   |     17     |  uint16  |
|  installedOpenLimitTiltDdegree  |     18     |  uint16  |
| installedClosedLimitTiltDdegree |     16     |  uint16  |
|           velocityLift          |     18     |  uint16  |
|       accelerationTimeLift      |     21     |  uint16  |
|        windowCoveringMode       |     23     |  bitmap8 |
|    intermediateSetpointsLift    |     24     | octetStr |
|    intermediateSetpointsTilt    |     25     | octetStr |