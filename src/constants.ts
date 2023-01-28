import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  TESTNET = 3,
  LOCALNET = 1337,
  GHOSTNET = 9234,
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
  1:'0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  3:'0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  1337:'0xfC625665730bA54cB5eC88d7c4C25c23aCAAF8b5',
  9234:'0xfC625665730bA54cB5eC88d7c4C25c23aCAAF8b5',
}

export const CHAIN_INIT_CODE_HASH = {
  1:'0xb55e24556c85fc3e614cefca9f291dd0b68ae979f8fb3170a912cf9ff8460507',
  3:'0xb55e24556c85fc3e614cefca9f291dd0b68ae979f8fb3170a912cf9ff8460507',
  1337:'0x7f32de0d96e59f6abf4f50c07ed4eda2c5d13744f0d7744217c286783d116534',
  9234:'0x7f32de0d96e59f6abf4f50c07ed4eda2c5d13744f0d7744217c286783d116534',
}

export const CHAIN_WETH_ADDRESS = {
  1:'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  3:'0xa7DDE2DbB0D5454e458383d4E8659a825ADc25e1',
  1337:'0x2CEC19Ac911265662192a4F634f4CC8451462512',
  9234:'0x2CEC19Ac911265662192a4F634f4CC8451462512',
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
