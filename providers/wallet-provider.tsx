"use client";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletProvider as SolanaWalletProvider } from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  LedgerWalletAdapter,
  Coin98WalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new Coin98WalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <SolanaWalletProvider wallets={wallets} autoConnect>
      {children}
    </SolanaWalletProvider>
  );
}
