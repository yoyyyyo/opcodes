import * as numeric from './number'

const bufferize = (value: number) => {
    if (typeof Buffer !== 'undefined') {
        const buf = Buffer.alloc(1)
        buf[0] = value
        return buf
    } else {
        const u8 = new Uint8Array(new ArrayBuffer(1))
        u8.set([value])
        return u8;
    }
}

for (const [key, value] of Object.entries(numeric))
    exports[key] = bufferize(value)
