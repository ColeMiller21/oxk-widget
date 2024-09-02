import Image from "next/image";
import { SolanaWidget } from "../sections/solana-widget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-4xl">OKX DEX Widget for Solana</h1>
      <SolanaWidget />
    </main>
  );
}
