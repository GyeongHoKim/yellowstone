[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / AACTransport

# Class: AACTransport

Defined in: [lib/transports/AACTransport.ts:18](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L18)

## Constructors

### Constructor

> **new AACTransport**(`client`, `stream`, `details`): `AACTransport`

Defined in: [lib/transports/AACTransport.ts:26](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L26)

#### Parameters

##### client

[`RTSPClient`](RTSPClient.md)

##### stream

`Writable`

##### details

`Details`

#### Returns

`AACTransport`

## Properties

### ChannelConfiguration

> **ChannelConfiguration**: `number` = `0`

Defined in: [lib/transports/AACTransport.ts:24](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L24)

***

### client

> **client**: [`RTSPClient`](RTSPClient.md)

Defined in: [lib/transports/AACTransport.ts:19](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L19)

***

### FrequencyIndex

> **FrequencyIndex**: `number` = `0`

Defined in: [lib/transports/AACTransport.ts:23](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L23)

***

### ObjectType

> **ObjectType**: `number` = `0`

Defined in: [lib/transports/AACTransport.ts:22](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L22)

***

### stream

> **stream**: `Writable`

Defined in: [lib/transports/AACTransport.ts:20](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L20)

## Methods

### processRTPPacket()

> **processRTPPacket**(`packet`): `void`

Defined in: [lib/transports/AACTransport.ts:65](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/AACTransport.ts#L65)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

#### Returns

`void`
