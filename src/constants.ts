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
  1: '0xC08f384fe79624b0fF6b7CeAd54F9540CC449D23',
  3: '0xC08f384fe79624b0fF6b7CeAd54F9540CC449D23',
  1337: '0xC08f384fe79624b0fF6b7CeAd54F9540CC449D23'
}

export const CHAIN_INIT_CODE_HASH = {
  1: '0xd508507167d80833c74a7303e14d764844bd6e183e324caf32127f9e2ae17b86',
  3: '0xd508507167d80833c74a7303e14d764844bd6e183e324caf32127f9e2ae17b86',
  1337: '0xd508507167d80833c74a7303e14d764844bd6e183e324caf32127f9e2ae17b86'
}

export const CHAIN_WETH_ADDRESS = {
  1: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  3: '0xa7DDE2DbB0D5454e458383d4E8659a825ADc25e1',
  1337: '0x7F78D8e2bD4601D5Fe9313454026D49eB624eD7D'
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
