[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / AV1Transport

# Class: AV1Transport

Defined in: [lib/transports/AV1Transport.ts:21](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L21)

## Constructors

### Constructor

> **new AV1Transport**(`client`, `stream`, `details`): `AV1Transport`

Defined in: [lib/transports/AV1Transport.ts:28](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L28)

#### Parameters

##### client

[`RTSPClient`](RTSPClient.md)

##### stream

`Writable`

##### details

`Details`

#### Returns

`AV1Transport`

## Properties

### client

> **client**: [`RTSPClient`](RTSPClient.md)

Defined in: [lib/transports/AV1Transport.ts:22](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L22)

***

### rtpPackets

> **rtpPackets**: `Buffer`[] = `[]`

Defined in: [lib/transports/AV1Transport.ts:25](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L25)

***

### stream

> **stream**: `Writable`

Defined in: [lib/transports/AV1Transport.ts:23](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L23)

***

### waitingForSequenceHeader

> **waitingForSequenceHeader**: `boolean` = `true`

Defined in: [lib/transports/AV1Transport.ts:26](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L26)

## Methods

### GetOBUName()

> **GetOBUName**(`obu_type`): `string`

Defined in: [lib/transports/AV1Transport.ts:297](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L297)

#### Parameters

##### obu\_type

`number`

#### Returns

`string`

***

### processConnectionDetails()

> **processConnectionDetails**(`details`): `void`

Defined in: [lib/transports/AV1Transport.ts:43](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L43)

#### Parameters

##### details

`Details`

#### Returns

`void`

***

### processRTPFrame()

> **processRTPFrame**(`rtpPackets`): `void`

Defined in: [lib/transports/AV1Transport.ts:72](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L72)

#### Parameters

##### rtpPackets

`Buffer`[]

#### Returns

`void`

***

### processRTPPacket()

> **processRTPPacket**(`packet`): `void`

Defined in: [lib/transports/AV1Transport.ts:61](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AV1Transport.ts#L61)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

#### Returns

`void`
