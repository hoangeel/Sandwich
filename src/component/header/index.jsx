import React from 'react'
import "./index.scss"
import ImgSandwich from "./img/sandwich-with-text.png"

export default function Header() {
  return (
    <div className='header'>
        <div className='menu'>
            <img src={ImgSandwich} alt="ImgSandwich" />
            <div className='divider'></div>
            <ul className="nav justify-content-center">
                <li className="nav-item SandwichBeta">
                    <button className="nav-link active " aria-current="page" >SandwichBeta</button>
                </li>
                <li className="nav-item SandwichSAFU">
                    <button className="nav-link " >SandwichSAFU</button>
                    <button className="nav-link Comingsoon" >Coming soon</button>
                </li>
                <li className="nav-item SandwichTools">
                    <button className="nav-link " >SandwichTools</button>
                    <button className="nav-link Comingsoon" >Coming soon</button>
                </li>
                <li className="nav-item SandwichSwap">
                    <button className="nav-link "  >SandwichSwap</button>
                    <button className="nav-link Comingsoon" >Coming soon</button>
                </li>
            </ul>
            <div className='ConnectWallet'>
                Connect Wallet
            </div>
        </div>
        <div className='image3'></div>
        <div className='Crypto_Compositions_1'></div>
        <div className='Crypto_Compositions_2'></div>
        <div className='Crypto_Compositions_3'></div>
        <div className='Crypto_Compositions_4'></div>
        <div className='Crypto_Compositions_5'></div>
        <div className='Crypto_Compositions_6'></div>
        <div className='Crypto_Compositions_7'></div>
        <div className='Crypto_Compositions_8'></div>
        <div className='title'>
                <p>Astronauts are </p>
                <p>eating <span>Sandwiches.</span></p>
        </div>
        <div className='text'>
            Sandwich Network is the definite hub to start your decentralized cryptocurrency journey. A one-stop-shop with all tools you will ever need to trade. User-friendly and permissionless access to anyone.
        </div>
        <button className='LaunchApp'>Launch App</button>
        <button className='PitchDeck'>Pitch Deck</button>
        <div className='footer'>
            <div className='Binance'></div>
            <div className='Polygon'><p>Coming Soon</p></div>
            <div className='Ethereum'><p>Coming Soon</p></div>
            <div className='Solana'><p>Coming Soon</p></div>
            <div className='Avalanche'><p>Coming Soon</p></div>
        </div>
    </div>
  )
}
