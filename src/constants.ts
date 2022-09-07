import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  TESTNET = 3,
  LOCALNET = 1337
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const CHAIN_FACTORY_ADDRESS = {
  1: '',
  3: '',
  1337: '0x092b7E0E81C8AE9ac68E2A208Ebd7305B02c2806'
}

export const CHAIN_INIT_CODE_HASH = {
  1: '',
  3: '',
  1337: '0x93157d21dcf193c0cc9ce464eb02dfe23f23997cc9895c26c9b9b4813076acc3'
}

export const CHAIN_WETH_ADDRESS = {
  1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  3: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  1337: '0xde64b1B936E11f7C9C645063A23916ED193bD80f'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
