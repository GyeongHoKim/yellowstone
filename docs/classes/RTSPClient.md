[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / RTSPClient

# Class: RTSPClient

Defined in: [lib/RTSPClient.ts:106](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L106)

## Extends

- `EventEmitter`

## Extended by

- [`ONVIFClient`](ONVIFClient.md)

## Constructors

### Constructor

> **new RTSPClient**(`username`, `password`, `headers?`): `RTSPClient`

Defined in: [lib/RTSPClient.ts:151](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L151)

#### Parameters

##### username

`string`

##### password

`string`

##### headers?

#### Returns

`RTSPClient`

#### Overrides

`EventEmitter.constructor`

## Properties

### \_authOpions?

> `optional` **\_authOpions?**: `AuthOptions`

Defined in: [lib/RTSPClient.ts:120](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L120)

***

### \_client?

> `optional` **\_client?**: `SocketUnion`

Defined in: [lib/RTSPClient.ts:117](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L117)

***

### \_cSeq

> **\_cSeq**: `number` = `0`

Defined in: [lib/RTSPClient.ts:118](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L118)

***

### \_keepAliveID?

> `optional` **\_keepAliveID?**: `Timeout`

Defined in: [lib/RTSPClient.ts:123](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L123)

***

### \_nextFreeInterleavedChannel

> **\_nextFreeInterleavedChannel**: `number` = `0`

Defined in: [lib/RTSPClient.ts:124](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L124)

***

### \_nextFreeUDPPort

> **\_nextFreeUDPPort**: `number` = `5000`

Defined in: [lib/RTSPClient.ts:125](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L125)

***

### \_session?

> `optional` **\_session?**: `string`

Defined in: [lib/RTSPClient.ts:122](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L122)

***

### \_unsupportedExtensions?

> `optional` **\_unsupportedExtensions?**: `string`[]

Defined in: [lib/RTSPClient.ts:119](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L119)

***

### \_url?

> `optional` **\_url?**: `string`

Defined in: [lib/RTSPClient.ts:116](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L116)

***

### clientSSRC

> **clientSSRC**: `number`

Defined in: [lib/RTSPClient.ts:147](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L147)

***

### closed

> **closed**: `boolean` = `false`

Defined in: [lib/RTSPClient.ts:112](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L112)

***

### headers

> **headers**: `object`

Defined in: [lib/RTSPClient.ts:109](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L109)

#### Index Signature

\[`key`: `string`\]: `string`

***

### isConnected

> **isConnected**: `boolean` = `false`

Defined in: [lib/RTSPClient.ts:111](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L111)

***

### messageBytes

> **messageBytes**: `number`[] = `[]`

Defined in: [lib/RTSPClient.ts:131](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L131)

***

### ntpBaseDate\_ms

> **ntpBaseDate\_ms**: `number`

Defined in: [lib/RTSPClient.ts:1071](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L1071)

***

### password

> **password**: `string`

Defined in: [lib/RTSPClient.ts:108](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L108)

***

### readState

> **readState**: `ReadStates` = `ReadStates.SEARCHING`

Defined in: [lib/RTSPClient.ts:127](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L127)

***

### rtspContentLength

> **rtspContentLength**: `number` = `0`

Defined in: [lib/RTSPClient.ts:136](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L136)

***

### rtspHeaders

> **rtspHeaders**: `Headers` = `{}`

Defined in: [lib/RTSPClient.ts:138](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L138)

***

### rtspPacket

> **rtspPacket**: `Buffer`

Defined in: [lib/RTSPClient.ts:143](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L143)

***

### rtspPacketLength

> **rtspPacketLength**: `number` = `0`

Defined in: [lib/RTSPClient.ts:142](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L142)

***

### rtspPacketPointer

> **rtspPacketPointer**: `number` = `0`

Defined in: [lib/RTSPClient.ts:144](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L144)

***

### rtspStatusLine

> **rtspStatusLine**: `string` = `""`

Defined in: [lib/RTSPClient.ts:137](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L137)

***

### setupResult

> **setupResult**: `Detail`[] = `[]`

Defined in: [lib/RTSPClient.ts:150](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L150)

***

### tcpSocket

> **tcpSocket**: `SocketUnion`

Defined in: [lib/RTSPClient.ts:149](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L149)

***

### username

> **username**: `string`

Defined in: [lib/RTSPClient.ts:107](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L107)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/@types/node/events.d.ts:20

#### Inherited from

`EventEmitter.defaultMaxListeners`

## Methods

### \_emptyReceiverReport()

> **\_emptyReceiverReport**(): `Buffer`

Defined in: [lib/RTSPClient.ts:1002](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L1002)

#### Returns

`Buffer`

***

### \_netConnect()

> **\_netConnect**(`hostname`, `port`, `secure?`): `Promise`\<`RTSPClient`\>

Defined in: [lib/RTSPClient.ts:173](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L173)

#### Parameters

##### hostname

`string`

##### port

`number`

##### secure?

`boolean` = `false`

#### Returns

`Promise`\<`RTSPClient`\>

***

### \_onData()

> **\_onData**(`data`): `void`

Defined in: [lib/RTSPClient.ts:779](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L779)

#### Parameters

##### data

`Buffer`

#### Returns

`void`

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

`EventEmitter.addListener`

***

### close()

> **close**(`isImmediate?`): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:753](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L753)

#### Parameters

##### isImmediate?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

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

`EventEmitter.emit`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/globals.d.ts:569

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

`EventEmitter.eventNames`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/@types/node/globals.d.ts:561

#### Returns

`number`

#### Inherited from

`EventEmitter.getMaxListeners`

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

`EventEmitter.listenerCount`

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

`EventEmitter.listeners`

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

`EventEmitter.off`

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

`EventEmitter.on`

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

`EventEmitter.once`

***

### pause()

> **pause**(): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:708](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L708)

#### Returns

`Promise`\<`void`\>

***

### play()

> **play**(): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:700](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L700)

#### Returns

`Promise`\<`void`\>

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

`EventEmitter.prependListener`

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

`EventEmitter.prependOnceListener`

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

`EventEmitter.rawListeners`

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

`EventEmitter.removeAllListeners`

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

`EventEmitter.removeListener`

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

***

### sendAudioBackChannel()

> **sendAudioBackChannel**(`audioChunk`): `Promise`\<`void`\>

Defined in: [lib/RTSPClient.ts:716](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/RTSPClient.ts#L716)

#### Parameters

##### audioChunk

`Buffer`

#### Returns

`Promise`\<`void`\>

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

`EventEmitter.setMaxListeners`

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

`EventEmitter.listenerCount`

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

`EventEmitter.once`

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

`EventEmitter.once`
