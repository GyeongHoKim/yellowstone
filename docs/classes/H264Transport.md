[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / H264Transport

# Class: H264Transport

Defined in: [lib/transports/H264Transport.ts:21](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L21)

## Constructors

### Constructor

> **new H264Transport**(`client`, `stream`, `details`): `H264Transport`

Defined in: [lib/transports/H264Transport.ts:29](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L29)

#### Parameters

##### client

[`RTSPClient`](RTSPClient.md)

##### stream

`Writable`

##### details

`Details`

#### Returns

`H264Transport`

## Properties

### \_headerWritten

> **\_headerWritten**: `boolean` = `false`

Defined in: [lib/transports/H264Transport.ts:27](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L27)

***

### client

> **client**: [`RTSPClient`](RTSPClient.md)

Defined in: [lib/transports/H264Transport.ts:22](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L22)

***

### rtpPackets

> **rtpPackets**: `Buffer`[] = `[]`

Defined in: [lib/transports/H264Transport.ts:25](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L25)

***

### stream

> **stream**: `Writable`

Defined in: [lib/transports/H264Transport.ts:23](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L23)

## Methods

### processConnectionDetails()

> **processConnectionDetails**(`details`): `void`

Defined in: [lib/transports/H264Transport.ts:44](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L44)

#### Parameters

##### details

`Details`

#### Returns

`void`

***

### processRTPFrame()

> **processRTPFrame**(`rtpPackets`): `void`

Defined in: [lib/transports/H264Transport.ts:78](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L78)

#### Parameters

##### rtpPackets

`Buffer`[]

#### Returns

`void`

***

### processRTPPacket()

> **processRTPPacket**(`packet`): `void`

Defined in: [lib/transports/H264Transport.ts:67](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H264Transport.ts#L67)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

#### Returns

`void`
