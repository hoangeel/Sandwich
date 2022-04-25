import React from 'react'
import "./index.scss"
import LOGO from "./img/sandwich.png"

export default function Footer() {
  return (
    <div className='footer'>
        <h1>Partners & Backers</h1>
        <div className='logo_1'></div>
        <div className='logo_2'></div>
        <div className='logo_3'></div>
        <div className='logo_4'></div>
        <div className='logo_5'></div>
        <div className='logo_6'></div>

        <div className='logo_2_1'></div>
        <div className='logo_2_2'></div>
        <div className='logo_2_3'></div>
        <div className='logo_2_4'></div>
        <div className='logo_2_5'></div>
        <div className='logo_2_6'></div>

        <div className='logo_3_1'></div>
        <div className='logo_3_2'></div>
        <div className='logo_3_3'></div>
        <div className='logo_3_4'></div>

        <div className='logo_4_1'></div>
        <div className='logo_4_2'></div>

        <div className='background_1'></div>
        <div className='background_2'></div>
        <div className='background_3'></div>
        <div className='background_4'></div>
        <div className='background_5'></div>

        <div className='card'>
            <img src={LOGO} alt="LOGO" />
            <span></span>
            <p>Decentralized Ecosystem</p>
            <button className='PitchDeck'>Pitch Deck</button>
            <button className='Docs'>Docs</button>
        </div>

        <div className='Join_the_Community'>
            <h1>Join the Community</h1>
            <p>Join the fastest growing decentralized ecosystem in the world of crypto.</p>
            <button className='Join_Us_On_Telegram'>
                <p>Join Us On Telegram</p>
                <div className='vector_3'></div>
                <div className='vector_2'></div>
            </button>
            <button className='Our_Medium'>
                <div className='item_M'></div>
                <p>Our Medium</p>
            </button>
            <button className='Our_Twitter'>
                <div className='item_Twitter'></div>
                <p>Our Twitter</p>
            </button>
            <div className='group37058'></div>
            <div className='img91'></div>
        </div>

        <div>
            <ul className="nav">
                <li className="nav-item item_LOGO">
                    <img src={LOGO} alt="LOGO" />
                    <p className="nav-link active">
                        Sandwich Network is the definite hub to start your decentralized cryptocurrency journey. Join us!
                    </p>
                </li>
                <li className="nav-item Products">
                    <h4>Products</h4>
                    <p className="nav-link">SandwichBeta
                        SandwichSAFU
                        SandwichTools
                        SandwichSwap
                    </p>
                </li>
                <li className="nav-item Support">
                    <h4>Support</h4>
                    <p className="nav-link">
                        Tutorials
                        Documentation
                        Customer support
                    </p>
                </li>
                <li className="nav-item Social">
                    <h4>Social</h4>
                    <p className="nav-link">
                        Telegram
                        Twitter
                        Medium
                    </p>
                    <div className='item_Telegram'></div>
                    <div className='item_Twitter_black'></div>
                    <div className='item_Medium'></div>
                </li>
            </ul>
        </div>
        <div className='end'>Copyright © 2021 Sandwich Network. All rights reserved.</div>
    </div>
  )
}
