// Imports
import React, { Component } from 'react';
import './css/MarketContainer.css';

// Components

class MarketContainer extends Component {
    render() {
        return (
            <div className="marketContainer">
                <div class="collectionGrid">
                    <div class="collectionList">
                        <h2>Markets on Ethereum</h2>
                        <ul>
                            <li className="collectionItem"><a href="https://opensea.io/">OpenSea</a></li>
                            <li className="collectionItem">Axie Infinity</li>
                            <li className="collectionItem">Rarable</li>
                            <li className="collectionItem">Decentraland</li>
                            <li className="collectionItem">Super Rare</li>
                        </ul>
                    </div>
                    <div class="collectionList">
                        <h2>Markets on Solana</h2>
                        <ul>
                            <li className="collectionItem"><a href="https://opensea.io/">Solanart</a></li>
                            <li className="collectionItem">DigitalEyes</li>
                            <li className="collectionItem">Magic Eden</li>
                            <li className="collectionItem">Solsea</li>
                            <li className="collectionItem">Metaplex</li>
                        </ul>
                    </div>
                    <div class="collectionList">
                        <h2>Markets on Cardano</h2>
                        <ul>
                            <li className="collectionItem"><a href="https://opensea.io/">CNFT</a></li>
                            <li className="collectionItem">Tokhun</li>
                            <li className="collectionItem">Galaxy of Art</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketContainer;