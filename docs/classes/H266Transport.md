[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / H266Transport

# Class: H266Transport

Defined in: [lib/transports/H266Transport.ts:24](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L24)

## Constructors

### Constructor

> **new H266Transport**(`client`, `stream`, `details`): `H266Transport`

Defined in: [lib/transports/H266Transport.ts:31](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L31)

#### Parameters

##### client

[`RTSPClient`](RTSPClient.md)

##### stream

`Writable`

##### details

`Details`

#### Returns

`H266Transport`

## Properties

### client

> **client**: [`RTSPClient`](RTSPClient.md)

Defined in: [lib/transports/H266Transport.ts:25](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L25)

***

### has\_donl

> **has\_donl**: `boolean` = `false`

Defined in: [lib/transports/H266Transport.ts:27](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L27)

***

### rtpPackets

> **rtpPackets**: `Buffer`[] = `[]`

Defined in: [lib/transports/H266Transport.ts:29](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L29)

***

### stream

> **stream**: `Writable`

Defined in: [lib/transports/H266Transport.ts:26](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L26)

## Methods

### processConnectionDetails()

> **processConnectionDetails**(`details`): `void`

Defined in: [lib/transports/H266Transport.ts:46](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L46)

#### Parameters

##### details

`Details`

#### Returns

`void`

***

### processRTPFrame()

> **processRTPFrame**(`rtpPackets`): `void`

Defined in: [lib/transports/H266Transport.ts:96](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L96)

#### Parameters

##### rtpPackets

`Buffer`[]

#### Returns

`void`

***

### processRTPPacket()

> **processRTPPacket**(`packet`): `void`

Defined in: [lib/transports/H266Transport.ts:80](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H266Transport.ts#L80)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

#### Returns

`void`
