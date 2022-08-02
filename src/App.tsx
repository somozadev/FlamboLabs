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
import { debug } from "console";
import SelectUserType from "./SelectUserType";
import Configuration from "./Configuration";

function App() {
  const [user, setUser] = useState('');
  const [hideHeader, setHideHeader] = useState(true); 

  const OnlyHideHeader = () => {
    setHideHeader(true);
  };
  const OnlyUnHideHeader = () => {
    setHideHeader(false);
  };


  return (
      <div className="App">

        <Router>
          <Header user={user} hideHeader = {hideHeader} setHideHeader = {setHideHeader} OnlyHideHeader = {OnlyHideHeader} OnlyUnHideHeader = {OnlyUnHideHeader} />
          <Switch>
          <Route path={'/profile'}>
              <Profile />
            </Route>
            <Route path={'/configuration'}>
              <Configuration />
            </Route>
            <Route path={'/home'}>
              <Home user={user} setUser={setUser}/>
            </Route>
            <Route path={'/menu'}>
              Esto es el menu
            </Route>
            <Route path={'/select'}>
              <SelectUserType hideHeader = {hideHeader} setHideHeader = {setHideHeader}  OnlyHideHeader = {OnlyHideHeader} OnlyUnHideHeader = {OnlyUnHideHeader}/>
            </Route>
            <Route path={'/'}>
              <MainPage hideHeader = {hideHeader} setHideHeader = {setHideHeader}  OnlyHideHeader = {OnlyHideHeader} OnlyUnHideHeader = {OnlyUnHideHeader}/>
            </Route>

          </Switch>
        </Router>



      </div>
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