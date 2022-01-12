// Components 
import React, { Component } from 'react';
import axios from 'axios';
import OpenSeaRanking from './OpenSeaRanking';
import '../css/RankingContainer.css'

// Use this key to connect to the server
const { REACT_APP_SERVER_URL } = process.env;

class RankingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            likedCollection: [],
            updateLikedCollection: []
        };
    }

    // Access Collections Controller to retrieve NFT collections
    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/collections`)
            .then((response) => {
                // Store NFT collections from database
                this.setState({
                    collections: response.data.collections
                })
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
    }

    render() {
        // Create a new array that stores collections data and send to OpenSeaRanking Component 
        const displayCollections = this.state.collections.map((c, idx) => <OpenSeaRanking
            key={idx}
            index={idx}
            name={c.name}
            slug={c.slug}
            description={c.description}
            image_url={c.image_url}
            floor_price={c.floor_price}
            seven_day_sales={c.seven_day_sales}
            thirty_day_sales={c.thirty_day_sales}
            likedCollection={this.state.likedCollection}
        />);
        return (
            <div className="RankingContainer">
                <h2 className="tableName"><span><img className="tableSymbol" src="https://pbs.twimg.com/profile_images/1412527141770731523/-x5TRL-5_400x400.png" />   </span>OpenSea Rankings</h2>
                <div className="table">
                    <div className="tableName">
                        <div className="tableHeader">
                            <div className="headerCell">#</div>
                            <div className="headerCell">Name</div>
                            <div className="headerCell"></div>
                            <div className="headerCell">Floor Price (in ETH)</div>
                            <div className="headerCell">7-Days Sales Volume</div>
                            <div className="headerCell">30-Days Sales Volume</div>
                        </div>
                        <div className="tableBody">
                            {displayCollections}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RankingContainer;



