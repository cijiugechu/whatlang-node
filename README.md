# `whatlang-node`

![https://github.com/cijiugechu/whatlang-node/actions](https://github.com/cijiugechu/whatlang-node/workflows/CI/badge.svg)

Fastest language detector in Node.js

## API

```typescript
export function detectLang(input: string, iso6393?: boolean | undefined | null): string
export function detectScript(input: string): string
```

## Usage

```js
import { detectLang, detectScript } from 'whatlang-node'

console.log(detectLang('This is a test.')) // 'English'

// Convert into ISO 639-3.
console.log(detectLang('这是测试', true)) // 'cmn'

console.log(detectScript('This is a test')) // 'Latin'
```

## Support matrix

### Operating Systems

|                  | node14 | node16 | node18 |
| ---------------- | ------ | ------ | ------ |
| Windows x64      | ✓      | ✓      | ✓      |
| Windows x32      | ✓      | ✓      | ✓      |
| Windows arm64    | ✓      | ✓      | ✓      |
| macOS x64        | ✓      | ✓      | ✓      |
| macOS arm64      | ✓      | ✓      | ✓      |
| Linux x64 gnu    | ✓      | ✓      | ✓      |
| Linux x64 musl   | ✓      | ✓      | ✓      |
| Linux arm gnu    | ✓      | ✓      | ✓      |
| Linux arm64 gnu  | ✓      | ✓      | ✓      |
| Linux arm64 musl | ✓      | ✓      | ✓      |
| Android arm64    | ✓      | ✓      | ✓      |
| Android armv7    | ✓      | ✓      | ✓      |
| FreeBSD x64      | ✓      | ✓      | ✓      |


## Bench

```bash
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  16
Vendor ID:               AuthenticAMD
  Model name:            AMD Ryzen 7 5800H with Radeon Graphics
    CPU family:          25
    Model:               80
    Thread(s) per core:  2
    Core(s) per socket:  8
    Socket(s):           1
    Stepping:            0
    BogoMIPS:            6387.75
Caches (sum of all):
  L1d:                   256 KiB (8 instances)
  L1i:                   256 KiB (8 instances)
  L2:                    4 MiB (8 instances)
  L3:                    16 MiB (1 instance)
```

```bash
languagedetect:
  6 800 ops/s, ±0.53%    | slowest, 63.79% slower
whatlang-node:
  18 778 ops/s, ±0.32%   | fastest

Fastest: whatlang-node
Slowest: languagedetect
```