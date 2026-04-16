[**Yellowstone**](../README.md)

***

[Yellowstone](../README.md) / ONVIFMetadataTransport

# Class: ONVIFMetadataTransport

Defined in: [lib/transports/ONVIFMetadataTransport.ts:19](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/ONVIFMetadataTransport.ts#L19)

## Constructors

### Constructor

> **new ONVIFMetadataTransport**(`client`, `stream`, `details`): `ONVIFMetadataTransport`

Defined in: [lib/transports/ONVIFMetadataTransport.ts:24](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/ONVIFMetadataTransport.ts#L24)

#### Parameters

##### client

[`RTSPClient`](RTSPClient.md)

##### stream

`Writable`

##### details

`Details`

#### Returns

`ONVIFMetadataTransport`

## Properties

### client

> **client**: [`RTSPClient`](RTSPClient.md)

Defined in: [lib/transports/ONVIFMetadataTransport.ts:20](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/ONVIFMetadataTransport.ts#L20)

***

### stream

> **stream**: `Writable`

Defined in: [lib/transports/ONVIFMetadataTransport.ts:21](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/ONVIFMetadataTransport.ts#L21)

***

### xml

> **xml**: `string`

Defined in: [lib/transports/ONVIFMetadataTransport.ts:22](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/ONVIFMetadataTransport.ts#L22)

## Methods

### processRTPPacket()

> **processRTPPacket**(`packet`): `void`

Defined in: [lib/transports/ONVIFMetadataTransport.ts:36](https://github.com/GyeongHoKim/yellowstone/blob/e74fb7d8afbd8bb9ed410a5a954010ba64363648/lib/transports/ONVIFMetadataTransport.ts#L36)

#### Parameters

##### packet

[`RTPPacket`](../interfaces/RTPPacket.md)

#### Returns

`void`
