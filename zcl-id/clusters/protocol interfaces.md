1. [piGenericTunnel](#piGenericTunnel)
2. [piAnalogInputReg](#piAnalogInputReg)
3. [piAnalogInputExt](#piAnalogInputExt)
4. [piAnalogOutputReg](#piAnalogOutputReg)
5. [piAnalogOutputExt](#piAnalogOutputExt)
6. [piAnalogValueReg](#piAnalogValueReg)
7. [piAnalogValueExt](#piAnalogValueExt)
8. [piBinaryInputReg](#piBinaryInputReg)
9. [piBinaryInputExt](#piBinaryInputExt)
10. [piBinaryOutputReg](#piBinaryOutputReg)
11. [piBinaryOutputExt](#piBinaryOutputExt)
12. [piBinaryValueReg](#piBinaryValueReg)
13. [piBinaryValueExt](#piBinaryValueExt)
14. [piMultistateInputReg](#piMultistateInputReg)
15. [piMultistateInputExt](#piMultistateInputExt)
16. [piMultistateOutputReg](#piMultistateOutputReg)
17. [piMultistateOutputExt](#piMultistateOutputExt)
18. [piMultistateValueReg](#piMultistateValueReg)
19. [piMultistateValueExt](#piMultistateValueExt)
20. [pi11073ProtocolTunnel](#pi11073ProtocolTunnel)

<a name="piGenericTunnel"></a>
### 1. piGenericTunnel
|   Attribute Name   | Identifier |   Type   |
|:------------------:|:----------:|:--------:|
| maxIncomeTransSize |      1     |  uint16  |
|  maxOutgoTransSize |      2     |  uint16  |
|    protocolAddr    |      3     | octetStr |

<a name="piAnalogInputReg"></a>
### 2. piAnalogInputReg
| Attribute Name | Identifier |    Type    |
|:--------------:|:----------:|:----------:|
|  covIncrement  |     22     | singlePrec |
|   deviceType   |     31     |   charStr  |
|    objectId    |     75     |   bacOid   |
|   objectName   |     77     |   charStr  |
|   objectType   |     79     |   enum16   |
| updateInterval |     118    |    uint8   |
|   profileName  |     168    |   charStr  |

<a name="piAnalogInputExt"></a>
### 3. piAnalogInputExt
|   Attribute Name  | Identifier |    Type    |
|:-----------------:|:----------:|:----------:|
|  ackedTransitions |      0     |   bitmap8  |
| notificationClass |     17     |   uint16   |
|      deadband     |     25     | singlePrec |
|    eventEnable    |     35     |   bitmap8  |
|     eventState    |     36     |    enum8   |
|     highLimit     |     45     | singlePrec |
|    limitEnable    |     52     |   bitmap8  |
|      lowLimit     |     59     | singlePrec |
|     notifyType    |     72     |    enum8   |
|     timeDelay     |     113    |    uint8   |
|  eventTimeStamps  |     130    |    array   |

<a name="piAnalogOutputReg"></a>
### 4. piAnalogOutputReg
| Attribute Name | Identifier |    Type    |
|:--------------:|:----------:|:----------:|
|  covIncrement  |     22     | singlePrec |
|   deviceType   |     31     |   charStr  |
|    objectId    |     75     |   bacOid   |
|   objectName   |     77     |   charStr  |
|   objectType   |     79     |   enum16   |
| updateInterval |     118    |    uint8   |
|   profileName  |     168    |   charStr  |

<a name="piAnalogOutputExt"></a>
### 5. piAnalogOutputExt
|   Attribute Name  | Identifier |    Type    |
|:-----------------:|:----------:|:----------:|
|  ackedTransitions |      0     |   bitmap8  |
| notificationClass |     17     |   uint16   |
|      deadband     |     25     | singlePrec |
|    eventEnable    |     35     |   bitmap8  |
|     eventState    |     36     |    enum8   |
|     highLimit     |     45     | singlePrec |
|    limitEnable    |     52     |   bitmap8  |
|      lowLimit     |     59     | singlePrec |
|     notifyType    |     72     |    enum8   |
|     timeDelay     |     113    |    uint8   |
|  eventTimeStamps  |     130    |    array   |

<a name="piAnalogValueReg"></a>
### 6. piAnalogValueReg
| Attribute Name | Identifier |    Type    |
|:--------------:|:----------:|:----------:|
|  covIncrement  |     22     | singlePrec |
|    objectId    |     75     |   bacOid   |
|   objectName   |     77     |   charStr  |
|   objectType   |     79     |   enum16   |
|   profileName  |     168    |   charStr  |

<a name="piAnalogValueExt"></a>
### 7. piAnalogValueExt
|   Attribute Name  | Identifier |    Type    |
|:-----------------:|:----------:|:----------:|
|  ackedTransitions |      0     |   bitmap8  |
| notificationClass |     17     |   uint16   |
|      deadband     |     25     | singlePrec |
|    eventEnable    |     35     |   bitmap8  |
|     eventState    |     36     |    enum8   |
|     highLimit     |     45     | singlePrec |
|    limitEnable    |     52     |   bitmap8  |
|      lowLimit     |     59     | singlePrec |
|     notifyType    |     72     |    enum8   |
|     timeDelay     |     113    |    uint8   |
|  eventTimeStamps  |     130    |    array   |

<a name="piBinaryInputReg"></a>
### 8. piBinaryInputReg
|   Attribute Name   | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| changeOfStateCount |     15     |  uint32 |
|  changeOfStateTime |     16     |  struct |
|     deviceType     |     31     | charStr |
|  elapsedActiveTime |     33     |  uint32 |
|  objectIdentifier  |     75     |  bacOid |
|     objectName     |     77     | charStr |
|     objectType     |     79     |  enum16 |
|    timeOfATReset   |     114    |  struct |
|    timeOfSCReset   |     115    |  struct |
|     profileName    |     168    | charStr |

<a name="piBinaryInputExt"></a>
### 9. piBinaryInputExt
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|  ackedTransitions |      0     | bitmap8 |
|     alarmValue    |      6     | boolean |
| notificationClass |     17     |  uint16 |
|    eventEnable    |     35     | bitmap8 |
|     eventState    |     36     |  enum8  |
|     notifyType    |     72     |  enum8  |
|     timeDelay     |     113    |  uint8  |
|  eventTimeStamps  |     130    |  array  |

<a name="piBinaryOutputReg"></a>
### 10. piBinaryOutputReg
|   Attribute Name   | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| changeOfStateCount |     15     |  uint32 |
|  changeOfStateTime |     16     |  struct |
|     deviceType     |     31     | charStr |
|  elapsedActiveTime |     33     |  uint32 |
|    feedBackValue   |     40     |  enum8  |
|  objectIdentifier  |     75     |  bacOid |
|     objectName     |     77     | charStr |
|     objectType     |     79     |  enum16 |
|    timeOfATReset   |     114    |  struct |
|    timeOfSCReset   |     115    |  struct |
|     profileName    |     168    | charStr |

<a name="piBinaryOutputExt"></a>
### 11. piBinaryOutputExt
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|  ackedTransitions |      0     | bitmap8 |
| notificationClass |     17     |  uint16 |
|    eventEnable    |     35     | bitmap8 |
|     eventState    |     36     |  enum8  |
|     notifyType    |     72     |  enum8  |
|     timeDelay     |     113    |  uint8  |
|  eventTimeStamps  |     130    |  array  |

<a name="piBinaryValueReg"></a>
### 12. piBinaryValueReg
|   Attribute Name   | Identifier |   Type  |
|:------------------:|:----------:|:-------:|
| changeOfStateCount |     15     |  uint32 |
|  changeOfStateTime |     16     |  struct |
|  elapsedActiveTime |     33     |  uint32 |
|  objectIdentifier  |     75     |  bacOid |
|     objectName     |     77     | charStr |
|     objectType     |     79     |  enum16 |
|    timeOfATReset   |     114    |  struct |
|    timeOfSCReset   |     115    |  struct |
|     profileName    |     168    | charStr |

<a name="piBinaryValueExt"></a>
### 13. piBinaryValueExt
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|  ackedTransitions |      0     | bitmap8 |
|     alarmValue    |      6     | boolean |
| notificationClass |     17     |  uint16 |
|    eventEnable    |     35     | bitmap8 |
|     eventState    |     36     |  enum8  |
|     notifyType    |     72     |  enum8  |
|     timeDelay     |     113    |  uint8  |
|  eventTimeStamps  |     130    |  array  |

<a name="piMultistateInputReg"></a>
### 14. piMultistateInputReg
| Attribute Name | Identifier |   Type  |
|:--------------:|:----------:|:-------:|
|   deviceType   |     31     | charStr |
|    objectId    |     75     |  bacOid |
|   objectName   |     77     | charStr |
|   objectType   |     79     |  enum16 |
|   profileName  |     168    | charStr |

<a name="piMultistateInputExt"></a>
### 15. piMultistateInputExt
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|  ackedTransitions |      0     | bitmap8 |
|     alarmValue    |      6     |  uint16 |
| notificationClass |     17     |  uint16 |
|    eventEnable    |     35     | bitmap8 |
|     eventState    |     36     |  enum8  |
|    faultValues    |     37     |  uint16 |
|     notifyType    |     72     |  enum8  |
|     timeDelay     |     113    |  uint8  |
|  eventTimeStamps  |     130    |  array  |

<a name="piMultistateOutputReg"></a>
### 16. piMultistateOutputReg
| Attribute Name | Identifier |   Type  |
|:--------------:|:----------:|:-------:|
|   deviceType   |     31     | charStr |
|  feedBackValue |     40     |  enum8  |
|    objectId    |     75     |  bacOid |
|   objectName   |     77     | charStr |
|   objectType   |     79     |  enum16 |
|   profileName  |     168    | charStr |

<a name="piMultistateOutputExt"></a>
### 17. piMultistateOutputExt
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|  ackedTransitions |      0     | bitmap8 |
| notificationClass |     17     |  uint16 |
|    eventEnable    |     35     | bitmap8 |
|     eventState    |     36     |  enum8  |
|     notifyType    |     72     |  enum8  |
|     timeDelay     |     113    |  uint8  |
|  eventTimeStamps  |     130    |  array  |

<a name="piMultistateValueReg"></a>
### 18. piMultistateValueReg
| Attribute Name | Identifier |   Type  |
|:--------------:|:----------:|:-------:|
|    objectId    |     75     |  bacOid |
|   objectName   |     77     | charStr |
|   objectType   |     79     |  enum16 |
|   profileName  |     168    | charStr |

<a name="piMultistateValueExt"></a>
### 19. piMultistateValueExt
|   Attribute Name  | Identifier |   Type  |
|:-----------------:|:----------:|:-------:|
|  ackedTransitions |      0     | bitmap8 |
|     alarmValue    |      6     |  uint16 |
| notificationClass |     17     |  uint16 |
|    eventEnable    |     35     | bitmap8 |
|     eventState    |     36     |  enum8  |
|    faultValues    |     37     |  uint16 |
|     notifyType    |     72     |  enum8  |
|     timeDelay     |     113    |  uint8  |
|  eventTimeStamps  |     130    |  array  |

<a name="pi11073ProtocolTunnel"></a>
### 20. pi11073ProtocolTunnel
|  Attribute Name | Identifier |   Type  |
|:---------------:|:----------:|:-------:|
|   deviceidList  |      0     | unknown |
|  managerTarget  |      1     | unknown |
| managerEndpoint |      2     | unknown |
|    connected    |      3     | unknown |
|   preemptible   |      4     | unknown |
|   idleTimeout   |      5     | unknown |
