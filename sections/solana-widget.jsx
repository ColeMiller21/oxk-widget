"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  createOkxSwapWidget,
  ProviderType, // Add this import
} from "@okxweb3/dex-widget";

const MOTHER_ADDRESS = "3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN";
const SOL_ADDRESS = "So11111111111111111111111111111111111111111";

export function SolanaWidget() {
  const widgetRef = useRef();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    setProvider(window.solana);
  }, []);

  useEffect(() => {
    if (widgetRef.current && provider) {
      const initialConfig = {
        params: {
          providerType: ProviderType.SOLANA, // Use the enum value instead of a string
          //   tokenPair: {},
          theme: "dark",
          chainIds: [501],
          tokenPair: {
            fromChain: 501,
            toChain: 501,
            fromToken: SOL_ADDRESS,
            toToken: MOTHER_ADDRESS,
          },
        },
        provider,
        listeners: [
          {
            event: "ON_CONNECT_WALLET",
            handler: (token, preToken) => {
              provider.connect();
            },
          },
        ],
      };

      const widgetHandler = createOkxSwapWidget(
        widgetRef.current,
        initialConfig
      );

      return () => {
        widgetHandler?.destroy();
      };
    }
  }, [provider]);

  return <div ref={widgetRef} />;
}
