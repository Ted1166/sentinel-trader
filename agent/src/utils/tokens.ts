import { type Address } from "viem";

export interface Token {
  symbol: string;
  address: Address;
  decimals: number;
  cmcId?: number;
}

export const TOKENS: Record<string, Token> = {
  ETH: { symbol: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", decimals: 18, cmcId: 1027 },
  USDT: { symbol: "USDT", address: "0x55d398326f99059fF775485246999027B3197955", decimals: 18, cmcId: 825 },
  USDC: { symbol: "USDC", address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", decimals: 18, cmcId: 3408 },
  XRP: { symbol: "XRP", address: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE", decimals: 18, cmcId: 52 },
  TRX: { symbol: "TRX", address: "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3", decimals: 6, cmcId: 1958 },
  DOGE: { symbol: "DOGE", address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", decimals: 8, cmcId: 74 },
  ZEC: { symbol: "ZEC", address: "0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb", decimals: 18, cmcId: 1437 },
  ADA: { symbol: "ADA", address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47", decimals: 18, cmcId: 2010 },
  LINK: { symbol: "LINK", address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", decimals: 18, cmcId: 1975 },
  BCH: { symbol: "BCH", address: "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf", decimals: 18, cmcId: 1831 },
  DAI: { symbol: "DAI", address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", decimals: 18, cmcId: 4943 },
  TON: { symbol: "TON", address: "0x76A797A59Ba2C17726896976B7B3747BfD1d220f", decimals: 9, cmcId: 11419 },
  USD1: { symbol: "USD1", address: "0x8d0D000Ee44948FC98c9B98A4FA4921476f08B0d", decimals: 18, cmcId: 36324 },
  USDe: { symbol: "USDe", address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34", decimals: 18, cmcId: 29470 },
  LTC: { symbol: "LTC", address: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94", decimals: 18, cmcId: 2 },
  AVAX: { symbol: "AVAX", address: "0x1CE0c2827e2eF14D5C4f29a091d735A204794041", decimals: 18, cmcId: 5805 },
  SHIB: { symbol: "SHIB", address: "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D", decimals: 18, cmcId: 5994 },
  DOT: { symbol: "DOT", address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", decimals: 18, cmcId: 6636 },
  UNI: { symbol: "UNI", address: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1", decimals: 18, cmcId: 7083 },
  DEXE: { symbol: "DEXE", address: "0x039cB485212f996A9DBb85A9a75d898F94d38bA6", decimals: 18, cmcId: 7326 },
  USDD: { symbol: "USDD", address: "0xd17479997F34dd9156Deef8F95A52D81D265be9c", decimals: 18, cmcId: 19891 },
  ETC: { symbol: "ETC", address: "0x3d6545b08693daE087E957cb1180ee38B9e3c25E", decimals: 18, cmcId: 1321 },
  AAVE: { symbol: "AAVE", address: "0xfb6115445Bff7b52FeB98650C87f44907E58f802", decimals: 18, cmcId: 7278 },
  ATOM: { symbol: "ATOM", address: "0x0Eb3a705fc54725037CC9e008bDede697f62F335", decimals: 18, cmcId: 3794 },
  FIL: { symbol: "FIL", address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153", decimals: 18, cmcId: 2280 },
  INJ: { symbol: "INJ", address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495", decimals: 18, cmcId: 7226 },
  FET: { symbol: "FET", address: "0x031b41e504677879370e9DBcF937283A8691Fa7f", decimals: 18, cmcId: 3773 },
  TUSD: { symbol: "TUSD", address: "0x14016E85a25aeb13065688cAFB43044C2ef86784", decimals: 18, cmcId: 2563 },
  BONK: { symbol: "BONK", address: "0xA697e272a73744b343528C3Bc4702F2565b2F422", decimals: 5, cmcId: 23095 },
  PENGU: { symbol: "PENGU", address: "0xB39b9Cf99Bc05E2fC7A2a0E62Cd1Dd24BFc5aFf4", decimals: 18, cmcId: 34941 },
  CAKE: { symbol: "CAKE", address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", decimals: 18, cmcId: 7186 },
  LUNC: { symbol: "LUNC", address: "0x156ab3346823B651294766e23e6Cf87254d68962", decimals: 18, cmcId: 4172 },
  ZRO: { symbol: "ZRO", address: "0x6985884C4392D348587B19cb9eAAf157F13271cd", decimals: 18, cmcId: 26997 },
  FDUSD: { symbol: "FDUSD", address: "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409", decimals: 18, cmcId: 26081 },
  BTT: { symbol: "BTT", address: "0x352Cb5E19b12FC216548a2677bD0fce83BaE434B", decimals: 18, cmcId: 16086 },
  FLOKI: { symbol: "FLOKI", address: "0xfb5B838b6cfEEdC2873aB27866079AC55363D37E", decimals: 9, cmcId: 10804 },
  LDO: { symbol: "LDO", address: "0x986854779804799C1d68867F5E03e601E781e41b", decimals: 18, cmcId: 8000 },
  PENDLE: { symbol: "PENDLE", address: "0xb3Ed0A426155B79B898849803E3B36552f7ED507", decimals: 18, cmcId: 9481 },
  AXS: { symbol: "AXS", address: "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0", decimals: 18, cmcId: 6783 },
  TWT: { symbol: "TWT", address: "0x4B0F1812e5Df2A09796481Ff14017e6005508003", decimals: 18, cmcId: 5964 },
  RAY: { symbol: "RAY", address: "0x6DEAeF4b5f52a2F4Bd27F5F5FD4C3e7B9d27D52b", decimals: 6, cmcId: 8526 },
  COMP: { symbol: "COMP", address: "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8", decimals: 18, cmcId: 5692 },
  BAT: { symbol: "BAT", address: "0x101d82428437127bF1608F699CD651e6Abf9766E", decimals: 18, cmcId: 1697 },
  APE: { symbol: "APE", address: "0xC762043E211571eB34f1ef377e5e8e76914962f9", decimals: 18, cmcId: 18876 },
  SFP: { symbol: "SFP", address: "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb", decimals: 18, cmcId: 8119 },
  SNX: { symbol: "SNX", address: "0x9Ac983826058b8a9C7Aa1C9171441191232E8404", decimals: 18, cmcId: 2586 },
  HTX: { symbol: "HTX", address: "0x5D1158a5960096A395b48591b680e888Da855e6E", decimals: 18, cmcId: 2502 },
  FRAX: { symbol: "FRAX", address: "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40", decimals: 18, cmcId: 6952 },
  YFI: { symbol: "YFI", address: "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e", decimals: 18, cmcId: 5864 },
  ZIL: { symbol: "ZIL", address: "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787", decimals: 12, cmcId: 2469 },
  ZETA: { symbol: "ZETA", address: "0x0B5A0b60FdAb9cC4bA5A6B3D2dAe278FA5c64a91", decimals: 18, cmcId: 21259 },
  ROSE: { symbol: "ROSE", address: "0x67b725d7e342d7B611fa85e859Df9697D9378B2e", decimals: 18, cmcId: 7653 },
  BRETT: { symbol: "BRETT", address: "0xB5f6f7de9EBD3C7b5F5bFd6E094E9eB07c4cF4fE", decimals: 18, cmcId: 29743 },
  ACH: { symbol: "ACH", address: "0xBc7d6B50616989655AfD682fb42743507003056D", decimals: 8, cmcId: 6709 },
  ELF: { symbol: "ELF", address: "0xa3f020a5C92e15be13CAF0Ee5C95cF79585EeCC9", decimals: 18, cmcId: 2299 },
  KAVA: { symbol: "KAVA", address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035", decimals: 6, cmcId: 4846 },
  SUSHI: { symbol: "SUSHI", address: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4", decimals: 18, cmcId: 6758 },
  DUSK: { symbol: "DUSK", address: "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C", decimals: 18, cmcId: 4092 },
  STG: { symbol: "STG", address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b", decimals: 18, cmcId: 18934 },
  XCN: { symbol: "XCN", address: "0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b", decimals: 18, cmcId: 18679 },
  IP: { symbol: "IP", address: "0x1A51686Fb42861AA7E38c1CF8868877F43F82aA1", decimals: 18, cmcId: 28521 },
  "1INCH": { symbol: "1INCH", address: "0x111111111117dC0aa78b770fA6A738034120C302", decimals: 18, cmcId: 8104 },
  AIOZ: { symbol: "AIOZ", address: "0x33d08D8C7a168333a85285a68C0042b39fC3741D", decimals: 18, cmcId: 9104 },
  PEAQ: { symbol: "PEAQ", address: "0x97aFd1B7E15bD1E7781E2d3Bd9f10A02F69e2DB3", decimals: 18, cmcId: 28298 },
} as const;

export const TOKEN_SYMBOLS = Object.keys(TOKENS) as (keyof typeof TOKENS)[];

export const TOKEN_ADDRESSES = Object.values(TOKENS).map((t) => t.address);

export function tokenByAddress(address: string): Token | undefined {
  const lower = address.toLowerCase();
  return Object.values(TOKENS).find(
    (t) => t.address.toLowerCase() === lower
  );
}

export function tokenBySymbol(symbol: string): Token | undefined {
  return TOKENS[symbol as keyof typeof TOKENS];
}

export const STABLECOINS: Address[] = [
  TOKENS.USDT.address,
  TOKENS.USDC.address,
  TOKENS.DAI.address,
  TOKENS.FDUSD.address,
  TOKENS.TUSD.address,
];

export const PRIORITY_TOKENS = [
  "ETH", "LINK", "ADA", "DOT", "UNI", "AAVE", "CAKE",
  "ATOM", "INJ", "AVAX", "LDO", "PENDLE", "AXS", "SNX",
] as const;