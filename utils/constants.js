const IS_MAINNET =  true;

const CONTRACTS = IS_MAINNET
  ? {
    ALIEN_TOKEN: '0xf42965f82f9e3171d1205c5e3058caf324a09432',

  } : {
    ALIEN_TOKEN: '0xf42965f82f9e3171d1205c5e3058caf324a09432',
  }


const HTTP_PROVIDER_URL = IS_MAINNET ? "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" : "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export {
  IS_MAINNET,
  CONTRACTS,
  HTTP_PROVIDER_URL
}
