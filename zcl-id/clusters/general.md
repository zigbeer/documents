### genBasic
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| zclVersion | 0 | uint8 |
| appVersion | 1 | uint8 |
| stackVersion | 2 | uint8 |
| hwVersion | 3 | uint8 |
| manufacturerName | 4 | charStr |
| modelId | 5 | charStr |
| dateCode | 6 | charStr |
| powerSource | 7 | enum8 |
| appProfileVersion | 8 | enum8 |
| swBuildId | 16384 | unknown |
| locationDesc | 16 | charStr |
| physicalEnv | 17 | enum8 |
| deviceEnabled | 18 | boolean |
| alarmMask | 19 | bitmap8 |
| disableLocalConfig | 20 | bitmap8 |

### genPowerCfg
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| mainsVoltage | 0 | uint16 |
| mainsFrequency | 1 | uint8 |
| mainsAlarmMask | 16 | bitmap8 |
| mainsVoltMinThres | 17 | uint16 |
| mainsVoltMaxThres | 18 | uint16 |
| mainsVoltageDwellTripPoint | 19 | uint16 |
| batteryVoltage | 32 | uint8 |
| batteryPercentageRemaining | 33 | unknown |
| batteryVolt | 48 | charStr |
| batterySize | 49 | enum8 |
| batteryAHrRating | 50 | uint16 |
| batteryQuantity | 51 | uint8 |
| batteryRatedVoltage | 52 | uint8 |
| batteryAlarmMask | 53 | bitmap8 |
| batteryVoltMinThres | 54 | uint8 |
| batteryVoltThres1 | 55 | uint16 |
| batteryVoltThres2 | 56 | uint16 |
| batteryVoltThres3 | 57 | uint16 |
| batteryPercentMinThres | 58 | unknown |
| batteryPercentThres1 | 59 | unknown |
| batteryPercentThres2 | 60 | unknown |
| batteryPercentThres3 | 61 | unknown |
| batteryAlarmState | 62 | unknown |

### genDeviceTempCfg
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| currentTemperature | 0 | int16 |
| minTempExperienced | 1 | int16 |
| maxTempExperienced | 2 | int16 |
| overTempTotalDwell | 3 | uint16 |
| devTempAlarmMask | 16 | bitmap8 |
| lowTempThres | 17 | int16 |
| highTempThres | 18 | int16 |
| lowTempDwellTripPoint | 19 | uint24 |
| highTempDwellTripPoint | 20 | uint24 |

### genIdentify
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| identifyTime | 0 | uint16 |
| identifyCommissionState | 1 | unknown |

### genGroups
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| nameSupport | 0 | bitmap8 |

### genScenes
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| count | 0 | uint8 |
| currentScene | 1 | uint8 |
| currentGroup | 2 | uint16 |
| sceneValid | 3 | boolean |
| nameSupport | 4 | bitmap8 |
| lastCfgBy | 5 | ieeeAddr |

### genOnOff
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| onOff | 0 | boolean |
| globalSceneCtrl | 16384 | unknown |
| onTime | 16385 | unknown |
| offWaitTime | 16386 | unknown |

### genOnOffSwitchCfg
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| switchType | 0 | enum8 |
| switchMultiFunction | 0 | unknown |
| switchActions | 16 | enum8 |

### genLevelCtrl
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| currentLevel | 0 | uint8 |
| remainingTime | 1 | uint16 |
| onOffTransitionTime | 16 | uint16 |
| onLevel | 17 | uint8 |
| onTransitionTime | 18 | unknown |
| offTransitionTime | 19 | unknown |
| defaultMoveRate | 20 | unknown |

### genAlarms
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| alarmCount | 0 | uint16 |

### genTime
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| time | 0 | utc |
| timeStatus | 1 | bitmap8 |
| timeZone | 2 | int32 |
| dstStart | 3 | uint32 |
| dstEnd | 4 | uint32 |
| dstShift | 5 | int32 |
| standardTime | 6 | uint32 |
| localTime | 7 | uint32 |
| lastSetTime | 8 | utc |
| validUntilTime | 9 | utc |

### genRssiLocation
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| type | 0 | data8 |
| method | 1 | enum8 |
| age | 2 | uint16 |
| qualityMeasure | 3 | uint8 |
| numOfDevices | 4 | uint8 |
| coordinate1 | 16 | int16 |
| coordinate2 | 17 | int16 |
| coordinate3 | 18 | int16 |
| power | 19 | int16 |
| pathLossExponent | 20 | uint16 |
| reportingPeriod | 21 | uint16 |
| calcPeriod | 22 | uint16 |
| numRSSIMeasurements | 23 | uint16 |

### genAnalogInput
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| description | 28 | charStr |
| maxPresentValue | 65 | singlePrec |
| minPresentValue | 69 | singlePrec |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| reliability | 103 | enum8 |
| resolution | 106 | singlePrec |
| statusFlags | 111 | bitmap8 |
| engineeringUnits | 117 | enum16 |
| applicationType | 256 | uint32 |

### genAnalogOutput
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| description | 28 | charStr |
| maxPresentValue | 65 | singlePrec |
| minPresentValue | 69 | singlePrec |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| relinquishDefault | 104 | singlePrec |
| resolution | 106 | singlePrec |
| statusFlags | 111 | bitmap8 |
| engineeringUnits | 117 | enum16 |
| applicationType | 256 | uint32 |

### genAnalogValue
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| description | 28 | charStr |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| relinquishDefault | 104 | singlePrec |
| statusFlags | 111 | bitmap8 |
| engineeringUnits | 117 | enum16 |
| applicationType | 256 | uint32 |

### genBinaryInput
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| activeText | 4 | charStr |
| description | 28 | charStr |
| inactiveText | 46 | charStr |
| outOfService | 81 | boolean |
| polarity | 84 | enum8 |
| presentValue | 85 | singlePrec |
| reliability | 103 | enum8 |
| statusFlags | 111 | bitmap8 |
| applicationType | 256 | uint32 |

### genBinaryOutput
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| activeText | 4 | charStr |
| description | 28 | charStr |
| inactiveText | 46 | charStr |
| minimumOffTime | 66 | uint32 |
| minimumOnTime | 67 | uint32 |
| outOfService | 81 | boolean |
| polarity | 84 | enum8 |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| relinquishDefault | 104 | singlePrec |
| statusFlags | 111 | bitmap8 |
| applicationType | 256 | uint32 |

### genBinaryValue
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| activeText | 4 | charStr |
| description | 28 | charStr |
| inactiveText | 46 | charStr |
| minimumOffTime | 66 | uint32 |
| minimumOnTime | 67 | uint32 |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| relinquishDefault | 104 | singlePrec |
| statusFlags | 111 | bitmap8 |
| applicationType | 256 | uint32 |

### genMultistateInput
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| stateText | 14 | array |
| description | 28 | charStr |
| numberOfStates | 74 | uint16 |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| statusFlags | 111 | bitmap8 |
| applicationType | 256 | uint32 |

### genMultistateOutput
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| stateText | 14 | array |
| description | 28 | charStr |
| numberOfStates | 74 | uint16 |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| relinquishDefault | 104 | singlePrec |
| statusFlags | 111 | bitmap8 |
| applicationType | 256 | uint32 |

### genMultistateValue
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| stateText | 14 | array |
| description | 28 | charStr |
| numberOfStates | 74 | uint16 |
| outOfService | 81 | boolean |
| presentValue | 85 | singlePrec |
| priorityArray | 87 | array |
| reliability | 103 | enum8 |
| relinquishDefault | 104 | singlePrec |
| statusFlags | 111 | bitmap8 |
| applicationType | 256 | uint32 |

### genCommissioning
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| shortress | 0 | uint16 |
| extendedPANId | 1 | ieeeAddr |
| panId | 2 | uint16 |
| channelmask | 3 | bitmap32 |
| protocolVersion | 4 | uint8 |
| stackProfile | 5 | uint8 |
| startupControl | 6 | enum8 |
| trustCenterress | 16 | ieeeAddr |
| trustCenterMasterKey | 17 | secKey |
| networkKey | 18 | secKey |
| useInsecureJoin | 19 | boolean |
| preconfiguredLinkKey | 20 | secKey |
| networkKeySeqNum | 21 | uint8 |
| networkKeyType | 22 | enum8 |
| networkManagerress | 23 | uint16 |
| scanAttempts | 32 | uint8 |
| timeBetweenScans | 33 | uint16 |
| rejoinInterval | 34 | uint16 |
| maxRejoinInterval | 35 | uint16 |
| indirectPollRate | 48 | uint16 |
| parentRetryThreshold | 49 | uint8 |
| concentratorFlag | 64 | boolean |
| concentratorRus | 65 | uint8 |
| concentratorDiscoveryTime | 66 | uint8 |

### genOta
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| upgradeServerId | 0 | ieeeAddr |
| fileOffset | 1 | uint32 |
| currentFileVersion | 2 | uint32 |
| currentZigbeeStackVersion | 3 | uint16 |
| downloadedFileVersion | 4 | uint32 |
| downloadedZigbeeStackVersion | 5 | uint16 |
| imageUpgradeStatus | 6 | enum8 |
| manufacturerId | 7 | uint16 |
| imageTypeId | 8 | uint16 |
| minimumBlockReqDelay | 9 | uint16 |
| imageStamp | 10 | uint32 |

### genPollCtrl
|        Name        | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| checkinInterval | 0 | uint32 |
| longPollInterval | 1 | uint32 |
| shortPollInterval | 2 | uint16 |
| fastPollTimeout | 3 | uint16 |
| checkinIntervalMin | 4 | uint32 |
| longPollIntervalMin | 5 | uint32 |
| fastPollTimeoutMax | 6 | uint16 |
| physicalClosedLimit | 0 | uint16 |