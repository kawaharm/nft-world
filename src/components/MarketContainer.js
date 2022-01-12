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
                        <h2 className="collectionHeader">Markets on Ethereum<span>  <img className="symbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/800px-Ethereum-icon-purple.svg.png" /></span></h2>
                        <ul>
                            <li className="collectionItem"><a href="https://opensea.io/">OpenSea</a></li>
                            <li className="collectionItem"><a href="https://marketplace.axieinfinity.com/">Axie Infinity</a></li>
                            <li className="collectionItem"><a href="https://rarible.com/">Rarible</a></li>
                            <li className="collectionItem"><a href="https://market.decentraland.org/">Decentraland</a></li>
                            <li className="collectionItem"><a href="https://superrare.com/">Super Rare</a></li>
                        </ul>
                    </div>
                    <div class="collectionList">
                        <h2 className="collectionHeader">Markets on Solana<span>  <img className="symbol" src="https://thumbor.forbes.com/thumbor/trim/0x104:692x565/fit-in/692x461/smart/https://specials-images.forbesimg.com/imageserve/60be57e131b5299078734980/Solana-logo/0x0.jpg" /></span></h2>
                        <ul>
                            <li className="collectionItem"><a href="https://solanart.io/">Solanart</a></li>
                            <li className="collectionItem"><a href="https://digitaleyes.market/">DigitalEyes</a></li>
                            <li className="collectionItem"><a href="https://magiceden.io/">Magic Eden</a></li>
                            <li className="collectionItem"><a href="https://solsea.io/">Solsea</a></li>
                            <li className="collectionItem"><a href="https://www.metaplex.com/">Metaplex</a></li>
                        </ul>
                    </div>
                    <div class="collectionList">
                        <h2 className="collectionHeader">Markets on Cardano<span>  <img className="symbol" src="https://pbs.twimg.com/profile_images/1454155381236588544/OVDyxkw3_400x400.jpg" /></span></h2>
                        <ul>
                            <li className="collectionItem"><a href="https://cnft.io/">CNFT</a></li>
                            <li className="collectionItem"><a href="https://tokhun.io/">Tokhun</a></li>
                            <li className="collectionItem"><a href="https://www.galaxyof.art/">Galaxy of Art</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketContainer;