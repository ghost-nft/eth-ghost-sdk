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
  1337:'0x6F47F17E4A7593Aa10FE63a96838E0dA47DbFd6E',
  9234:'0x6F47F17E4A7593Aa10FE63a96838E0dA47DbFd6E',
}

export const CHAIN_INIT_CODE_HASH = {
  1:'0xb55e24556c85fc3e614cefca9f291dd0b68ae979f8fb3170a912cf9ff8460507',
  3:'0xb55e24556c85fc3e614cefca9f291dd0b68ae979f8fb3170a912cf9ff8460507',
  1337:'0x303170fa7e30812b1d48ae4bee04621ac0f596815fa36c40a8670e6536e021c2',
  9234:'0x303170fa7e30812b1d48ae4bee04621ac0f596815fa36c40a8670e6536e021c2',
}

export const CHAIN_WETH_ADDRESS = {
  1:'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  3:'0xa7DDE2DbB0D5454e458383d4E8659a825ADc25e1',
  1337:'0x23f63CA3B9350D53a0828AceE2780C8a61071624',
  9234:'0x23f63CA3B9350D53a0828AceE2780C8a61071624',
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
