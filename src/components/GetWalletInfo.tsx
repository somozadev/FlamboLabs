import { ConnectionProvider, WalletContext, WalletProvider, WalletContextState} from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import React, { FC, ReactNode, useMemo, useState, useEffect } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import WalletButton from './WalletButton';

// const walletStatus = WalletContext.Consumer
function GetWalletInfo() {
  return (
    <div>GetWalletInfo</div>
  )
}

export default GetWalletInfo