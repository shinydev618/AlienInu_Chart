import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";

const IS_MAINNET = true;
const chainId = IS_MAINNET? 1 : 3;
const rpcUrl = IS_MAINNET? "https://mainnet.infura.io/v3/cfbaf3fecc3b4827abc4b9e1e9f2fd06" : "https://ropsten.infura.io/v3/cfbaf3fecc3b4827abc4b9e1e9f2fd06";
const scanUrl = IS_MAINNET? "https://etherscan.io" : "https://ropsten.etherscan.io/";

const BINANCE_MAINNET_PARAMS = {
  chainId: chainId,
  chainName: "Ether",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [rpcUrl],
  blockExplorerUrls: [scanUrl],
};

const injected = new InjectedConnector({ supportedChainIds: [chainId] });
const binance_wallet = new InjectedConnector({
  supportedChainIds: [Number(BINANCE_MAINNET_PARAMS.chainId)],
});
const trustWallet = new InjectedConnector({
  supportedChainIds: [Number(BINANCE_MAINNET_PARAMS.chainId)],
});

const walletConnect = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed.binance.org/",
  },
  bridge: "https://bridge.walletconnect.org/",
  qrcode: true,
  pollingInterval: 12000,
});

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

export { injected, trustWallet, walletConnect, binance_wallet };
