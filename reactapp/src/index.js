import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SellNFT from './components/SellNFT';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import NFTPage from './components/NFTpage';

const openAdminPanel = () => {
  window.location.href = 'http://localhost:8001/admin/';
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
            <Link to="/sellNFT">Sell NFT</Link>
          </li>
          <li>
            <button onClick={openAdminPanel}>Открыть админ-панель</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/sellNFT" element={<SellNFT />} />
        <Route path="/nftPage/:tokenId" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();