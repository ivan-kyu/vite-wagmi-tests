import { Chain, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import {
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const rpcUrls = {
  default: { http: [import.meta.env.VITE_RPC_URL] },
  public: { http: [import.meta.env.VITE_RPC_URL] },
};

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
        injectedWallet,
      ],
    },
  ],
  {
    appName: import.meta.env.VITE_APP_NAME,
    projectId: import.meta.env.VITE_WALLET_PROJECT_ID, // Every dApp that relies on WalletConnect now needs to obtain a projectId from WalletConnect Cloud. This is absolutely free and only takes a few minutes.
  }
);

const nativeCurrency = {
  decimals: Number(import.meta.env.VITE_CURRENCY_DECIMALS),
  name: import.meta.env.VITE_CURRENCY_NAME,
  symbol: import.meta.env.VITE_CURRENCY_SYMBOL,
};

const blockExplorers = {
  default: {
    name: import.meta.env.VITE_BLOCK_EXPLORER_NAME,
    url: import.meta.env.VITE_BLOCK_EXPLORER_URL,
  },
};

const chain: Chain = {
  name: import.meta.env.VITE_NETWORK_NAME,
  id: Number(import.meta.env.VITE_NETWORK_ID),
  rpcUrls,
  blockExplorers,
  nativeCurrency,
};

export const wagmiConfig = createConfig({
  connectors,
  chains: [chain],
  transports: {
    [chain.id]: http(),
  },
  ssr: false, // If your dApp uses server side rendering (SSR)
});
