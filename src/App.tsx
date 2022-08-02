import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import React, { FC, ReactNode, useMemo, useState, useEffect } from 'react';
import './App.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Profile from './Profile.js';
import MainPage from "./MainPage";
import AppContext from "./AppContext";

function App() {
  const [user, setUser] = useState('');

  const [hideNavbar, setHideNavbar] = useState(true);

  const toggleHideNavbar = () => {
    hideNavbar ? setHideNavbar(true) : setHideNavbar(false);
  };

  const appSettings = {
    hideNavbar: hideNavbar,
    toggleHideNavbar,
  };

  return (
    <AppContext.Provider value={appSettings}>
      <div className="App">

        <Router>
          <Header user={user} />
          <Switch>
            <Route path={'/profile'}>
              <Profile />
            </Route>
            <Route path={'/home'}>
              <Home user={user} setUser={setUser} />
            </Route>
            <Route path={'/menu'}>
              Esto es el menu
            </Route>
            <Route path={'/'}>
              <MainPage />
            </Route>

          </Switch>
        </Router>



      </div>
    </AppContext.Provider>
  );
}

export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const endpoint = "localhost:8899"; // local cluster override

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new GlowWalletAdapter(),
    new SlopeWalletAdapter(),
    new TorusWalletAdapter()
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

const Content: FC = () => {
  return (
    <>
      <WalletMultiButton />
    </>
  );
}