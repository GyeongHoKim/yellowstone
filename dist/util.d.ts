/// <reference types="node" />
export interface RTPPacket {
    id: number;
    timestamp: number;
    marker: number;
    padding: number;
    hasExtensions: number;
    payload: Buffer;
    length: number;
    paddingLength: number;
    payloadType: number;
}
export declare function parseRTPPacket(buffer: Buffer): RTPPacket;
export interface RTCPPacket {
    timestamp: number;
    packetType: number;
    buffer: Buffer;
}
export declare function parseRTCPPacket(buffer: Buffer): RTCPPacket;
export declare function getMD5Hash(str: string): string;
export interface Transport {
    protocol: string;
    parameters: {
        [key: string]: string;
    };
}
export declare function parseTransport(transport: string): Transport;
export declare function randInclusive(min: number, max: number): number;
export declare function generateSSRC(): number;
export declare class BitStream {
    data: number[];
    AddValue(value: number, num_bits: number): void;
    AddHexString(hex_string: string): void;
    Read(num_bits: number): number;
    ToArray(): Buffer;
}
