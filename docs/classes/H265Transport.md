[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / H265Transport

# Class: H265Transport

Defined in: [lib/transports/H265Transport.ts:21](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L21)

## Constructors

### Constructor

> **new H265Transport**(`client`, `stream`, `details`): `H265Transport`

Defined in: [lib/transports/H265Transport.ts:28](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L28)

#### Parameters

##### client

[`RTSPClient`](RTSPClient.md)

##### stream

`Writable`

##### details

`Details`

#### Returns

`H265Transport`

## Properties

### client

> **client**: [`RTSPClient`](RTSPClient.md)

Defined in: [lib/transports/H265Transport.ts:22](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L22)

***

### has\_donl

> **has\_donl**: `boolean` = `false`

Defined in: [lib/transports/H265Transport.ts:24](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L24)

***

### rtpPackets

> **rtpPackets**: `Buffer`[] = `[]`

Defined in: [lib/transports/H265Transport.ts:26](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L26)

***

### stream

> **stream**: `Writable`

Defined in: [lib/transports/H265Transport.ts:23](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L23)

## Methods

### processConnectionDetails()

> **processConnectionDetails**(`details`): `void`

Defined in: [lib/transports/H265Transport.ts:43](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L43)

#### Parameters

##### details

`Details`

#### Returns

`void`

***

### processRTPFrame()

> **processRTPFrame**(`rtpPackets`): `void`

Defined in: [lib/transports/H265Transport.ts:77](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L77)

#### Parameters

##### rtpPackets

`Buffer`[]

#### Returns

`void`

***

### processRTPPacket()

> **processRTPPacket**(`packet`): `void`

Defined in: [lib/transports/H265Transport.ts:66](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/H265Transport.ts#L66)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

#### Returns

`void`
