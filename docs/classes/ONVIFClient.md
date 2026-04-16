[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / ONVIFClient

# Class: ONVIFClient

Defined in: [lib/ONVIFClient.ts:4](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/ONVIFClient.ts#L4)

## Extends

- [`RTSPClient`](RTSPClient.md)

## Constructors

### Constructor

> **new ONVIFClient**(`username`, `password`): `ONVIFClient`

Defined in: [lib/ONVIFClient.ts:5](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/ONVIFClient.ts#L5)

#### Parameters

##### username

`string`

##### password

`string`

#### Returns

`ONVIFClient`

#### Overrides

[`RTSPClient`](RTSPClient.md).[`constructor`](RTSPClient.md#constructor)

## Properties

### \_authOpions?

> `optional` **\_authOpions?**: `AuthOptions`

Defined in: [lib/RTSPClient.ts:120](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L120)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_authOpions`](RTSPClient.md#_authopions)

***

### \_client?

> `optional` **\_client?**: `SocketUnion`

Defined in: [lib/RTSPClient.ts:117](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L117)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_client`](RTSPClient.md#_client)

***

### \_cSeq

> **\_cSeq**: `number` = `0`

Defined in: [lib/RTSPClient.ts:118](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L118)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_cSeq`](RTSPClient.md#_cseq)

***

### \_keepAliveID?

> `optional` **\_keepAliveID?**: `Timeout`

Defined in: [lib/RTSPClient.ts:123](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L123)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_keepAliveID`](RTSPClient.md#_keepaliveid)

***

### \_nextFreeInterleavedChannel

> **\_nextFreeInterleavedChannel**: `number` = `0`

Defined in: [lib/RTSPClient.ts:124](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L124)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_nextFreeInterleavedChannel`](RTSPClient.md#_nextfreeinterleavedchannel)

***

### \_nextFreeUDPPort

> **\_nextFreeUDPPort**: `number` = `5000`

Defined in: [lib/RTSPClient.ts:125](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L125)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_nextFreeUDPPort`](RTSPClient.md#_nextfreeudpport)

***

### \_session?

> `optional` **\_session?**: `string`

Defined in: [lib/RTSPClient.ts:122](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L122)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_session`](RTSPClient.md#_session)

***

### \_unsupportedExtensions?

> `optional` **\_unsupportedExtensions?**: `string`[]

Defined in: [lib/RTSPClient.ts:119](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L119)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_unsupportedExtensions`](RTSPClient.md#_unsupportedextensions)

***

### \_url?

> `optional` **\_url?**: `string`

Defined in: [lib/RTSPClient.ts:116](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L116)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_url`](RTSPClient.md#_url)

***

### clientSSRC

> **clientSSRC**: `number`

Defined in: [lib/RTSPClient.ts:147](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L147)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`clientSSRC`](RTSPClient.md#clientssrc)

***

### closed

> **closed**: `boolean` = `false`

Defined in: [lib/RTSPClient.ts:112](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L112)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`closed`](RTSPClient.md#closed)

***

### headers

> **headers**: `object`

Defined in: [lib/RTSPClient.ts:109](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L109)

#### Index Signature

\[`key`: `string`\]: `string`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`headers`](RTSPClient.md#headers)

***

### isConnected

> **isConnected**: `boolean` = `false`

Defined in: [lib/RTSPClient.ts:111](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L111)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`isConnected`](RTSPClient.md#isconnected)

***

### messageBytes

> **messageBytes**: `number`[] = `[]`

Defined in: [lib/RTSPClient.ts:131](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L131)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`messageBytes`](RTSPClient.md#messagebytes)

***

### ntpBaseDate\_ms

> **ntpBaseDate\_ms**: `number`

Defined in: [lib/RTSPClient.ts:1071](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L1071)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`ntpBaseDate_ms`](RTSPClient.md#ntpbasedate_ms)

***

### password

> **password**: `string`

Defined in: [lib/RTSPClient.ts:108](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L108)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`password`](RTSPClient.md#password)

***

### readState

> **readState**: `ReadStates` = `ReadStates.SEARCHING`

Defined in: [lib/RTSPClient.ts:127](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L127)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`readState`](RTSPClient.md#readstate)

***

### rtspContentLength

> **rtspContentLength**: `number` = `0`

Defined in: [lib/RTSPClient.ts:136](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L136)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rtspContentLength`](RTSPClient.md#rtspcontentlength)

***

### rtspHeaders

> **rtspHeaders**: `Headers` = `{}`

Defined in: [lib/RTSPClient.ts:138](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L138)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rtspHeaders`](RTSPClient.md#rtspheaders)

***

### rtspPacket

> **rtspPacket**: `Buffer`

Defined in: [lib/RTSPClient.ts:143](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L143)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rtspPacket`](RTSPClient.md#rtsppacket)

***

### rtspPacketLength

> **rtspPacketLength**: `number` = `0`

Defined in: [lib/RTSPClient.ts:142](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L142)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rtspPacketLength`](RTSPClient.md#rtsppacketlength)

***

### rtspPacketPointer

> **rtspPacketPointer**: `number` = `0`

Defined in: [lib/RTSPClient.ts:144](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L144)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rtspPacketPointer`](RTSPClient.md#rtsppacketpointer)

***

### rtspStatusLine

> **rtspStatusLine**: `string` = `""`

Defined in: [lib/RTSPClient.ts:137](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L137)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rtspStatusLine`](RTSPClient.md#rtspstatusline)

***

### setupResult

> **setupResult**: `Detail`[] = `[]`

Defined in: [lib/RTSPClient.ts:150](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L150)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`setupResult`](RTSPClient.md#setupresult)

***

### tcpSocket

> **tcpSocket**: `SocketUnion`

Defined in: [lib/RTSPClient.ts:149](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L149)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`tcpSocket`](RTSPClient.md#tcpsocket)

***

### username

> **username**: `string`

Defined in: [lib/RTSPClient.ts:107](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L107)

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`username`](RTSPClient.md#username)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/@types/node/events.d.ts:20

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`defaultMaxListeners`](RTSPClient.md#defaultmaxlisteners)

## Methods

### \_emptyReceiverReport()

> **\_emptyReceiverReport**(): `Buffer`

Defined in: [lib/RTSPClient.ts:1002](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L1002)

#### Returns

`Buffer`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_emptyReceiverReport`](RTSPClient.md#_emptyreceiverreport)

***

### \_netConnect()

> **\_netConnect**(`hostname`, `port`, `secure?`): `Promise`\<`ONVIFClient`\>

Defined in: [lib/RTSPClient.ts:173](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L173)

#### Parameters

##### hostname

`string`

##### port

`number`

##### secure?

`boolean` = `false`

#### Returns

`Promise`\<`ONVIFClient`\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_netConnect`](RTSPClient.md#_netconnect)

***

### \_onData()

> **\_onData**(`data`): `void`

Defined in: [lib/RTSPClient.ts:779](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L779)

#### Parameters

##### data

`Buffer`

#### Returns

`void`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_onData`](RTSPClient.md#_ondata)

***

### \_sendInterleavedData()

> **\_sendInterleavedData**(`channel`, `buffer`): `void`

Defined in: [lib/RTSPClient.ts:976](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L976)

#### Parameters

##### channel

`number`

##### buffer

`Buffer`

#### Returns

`void`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_sendInterleavedData`](RTSPClient.md#_sendinterleaveddata)

***

### \_sendUDPData()

> **\_sendUDPData**(`host`, `port`, `buffer`): `void`

Defined in: [lib/RTSPClient.ts:994](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L994)

#### Parameters

##### host

`string`

##### port

`number`

##### buffer

`Buffer`

#### Returns

`void`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_sendUDPData`](RTSPClient.md#_sendudpdata)

***

### \_socketWrite()

> **\_socketWrite**(`socket`, `data`): `Promise`\<`any`\>

Defined in: [lib/RTSPClient.ts:1021](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L1021)

#### Parameters

##### socket

`SocketUnion`

##### data

`Buffer`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`_socketWrite`](RTSPClient.md#_socketwrite)

***

### addListener()

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:554

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`addListener`](RTSPClient.md#addlistener)

***

### close()

> **close**(`isImmediate?`): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:753](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L753)

#### Parameters

##### isImmediate?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`close`](RTSPClient.md#close)

***

### connect()

> **connect**(`url`, `__namedParameters?`): `Promise`\<`Detail`[]\>

Defined in: [lib/RTSPClient.ts:248](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L248)

#### Parameters

##### url

`string`

##### \_\_namedParameters?

###### connection?

`Connection` = `"udp"`

###### keepAlive

`boolean` = `true`

###### secure

`boolean` = `false`

#### Returns

`Promise`\<`Detail`[]\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`connect`](RTSPClient.md#connect)

***

### emit()

> **emit**(`event`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/globals.d.ts:564

#### Parameters

##### event

`string` \| `symbol`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`emit`](RTSPClient.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/globals.d.ts:569

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`eventNames`](RTSPClient.md#eventnames)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/@types/node/globals.d.ts:561

#### Returns

`number`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`getMaxListeners`](RTSPClient.md#getmaxlisteners)

***

### GetWallClockTime()

> **GetWallClockTime**(`packet`, `detail`): `Date` \| `undefined`

Defined in: [lib/RTSPClient.ts:1074](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L1074)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

##### detail

`Detail`

#### Returns

`Date` \| `undefined`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`GetWallClockTime`](RTSPClient.md#getwallclocktime)

***

### listenerCount()

> **listenerCount**(`type`): `number`

Defined in: node\_modules/@types/node/globals.d.ts:565

#### Parameters

##### type

`string` \| `symbol`

#### Returns

`number`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`listenerCount`](RTSPClient.md#listenercount)

***

### listeners()

> **listeners**(`event`): `Function`[]

Defined in: node\_modules/@types/node/globals.d.ts:562

#### Parameters

##### event

`string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`listeners`](RTSPClient.md#listeners)

***

### off()

> **off**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:558

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`off`](RTSPClient.md#off)

***

### on()

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:555

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`on`](RTSPClient.md#on)

***

### once()

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:556

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`once`](RTSPClient.md#once)

***

### pause()

> **pause**(): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:708](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L708)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`pause`](RTSPClient.md#pause)

***

### play()

> **play**(): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:700](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L700)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`play`](RTSPClient.md#play)

***

### playFrom()

> **playFrom**(`from`, `to?`): `Promise`\<`ONVIFClient`\>

Defined in: [lib/ONVIFClient.ts:9](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/ONVIFClient.ts#L9)

#### Parameters

##### from

`Date`

##### to?

`Date`

#### Returns

`Promise`\<`ONVIFClient`\>

***

### playReverse()

> **playReverse**(`from?`, `to?`): `Promise`\<`ONVIFClient`\>

Defined in: [lib/ONVIFClient.ts:24](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/ONVIFClient.ts#L24)

#### Parameters

##### from?

`Date`

##### to?

`Date`

#### Returns

`Promise`\<`ONVIFClient`\>

***

### prependListener()

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:567

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`prependListener`](RTSPClient.md#prependlistener)

***

### prependOnceListener()

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:568

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`prependOnceListener`](RTSPClient.md#prependoncelistener)

***

### rawListeners()

> **rawListeners**(`event`): `Function`[]

Defined in: node\_modules/@types/node/globals.d.ts:563

#### Parameters

##### event

`string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`rawListeners`](RTSPClient.md#rawlisteners)

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:559

#### Parameters

##### event?

`string` \| `symbol`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`removeAllListeners`](RTSPClient.md#removealllisteners)

***

### removeListener()

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:557

#### Parameters

##### event

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`removeListener`](RTSPClient.md#removelistener)

***

### request()

> **request**(`requestName`, `headersParam?`, `url?`): `Promise`\<`void` \| \{ `headers`: `Headers`; `mediaHeaders?`: `string`[]; \}\>

Defined in: [lib/RTSPClient.ts:563](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L563)

#### Parameters

##### requestName

`string`

##### headersParam?

`Headers` = `{}`

##### url?

`string`

#### Returns

`Promise`\<`void` \| \{ `headers`: `Headers`; `mediaHeaders?`: `string`[]; \}\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`request`](RTSPClient.md#request)

***

### respond()

> **respond**(`status`, `headersParam?`): `void`

Defined in: [lib/RTSPClient.ts:679](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L679)

#### Parameters

##### status

`string`

##### headersParam?

`Headers` = `{}`

#### Returns

`void`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`respond`](RTSPClient.md#respond)

***

### sendAudioBackChannel()

> **sendAudioBackChannel**(`audioChunk`): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:716](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L716)

#### Parameters

##### audioChunk

`Buffer`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`sendAudioBackChannel`](RTSPClient.md#sendaudiobackchannel)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/@types/node/globals.d.ts:560

#### Parameters

##### n

`number`

#### Returns

`this`

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`setMaxListeners`](RTSPClient.md#setmaxlisteners)

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `event`): `number`

Defined in: node\_modules/@types/node/events.d.ts:17

#### Parameters

##### emitter

`EventEmitter`

##### event

`string` \| `symbol`

#### Returns

`number`

#### Deprecated

since v4.0.0

#### Inherited from

[`RTSPClient`](RTSPClient.md).[`listenerCount`](RTSPClient.md#listenercount-1)

***

### once()

#### Call Signature

> `static` **once**(`emitter`, `event`): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/events.d.ts:13

##### Parameters

###### emitter

`NodeEventTarget`

###### event

`string` \| `symbol`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`RTSPClient`](RTSPClient.md).[`once`](RTSPClient.md#once-1)

#### Call Signature

> `static` **once**(`emitter`, `event`): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/events.d.ts:14

##### Parameters

###### emitter

`DOMEventTarget`

###### event

`string`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`RTSPClient`](RTSPClient.md).[`once`](RTSPClient.md#once-1)
