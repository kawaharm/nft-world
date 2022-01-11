// Components 
import { Collections } from '../Collections';
import OpenSeaRanking from './OpenSeaRanking';

// Imports
import React, { Component } from 'react';
import '../css/RankingContainer.css'
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

// const CollectionData = ({ key, index, name, image_url, description, floor_price, seven_day_sales, thirty_day_sales }) => (
//     <div className="tableRow">
//         <div className="rowCell">{index + 1}</div>
//         <div className="rowCell">{name}</div>
//         <div className="rowCell">
//             <img className="collectionImage" src={image_url} alt="collection image" />
//         </div>
//         <div className="rowCell">{floor_price} ETH</div>
//         <div className="rowCell">{seven_day_sales} ETH</div>
//         <div className="rowCell">{thirty_day_sales} ETH</div>
//         {/* <div className="rowCell">
//             <i onClick={handleLike.bind(this)} className="material-icons">favorite_border</i>
//         </div> */}
//     </div>
// );

// const handleLike = () => {
//     this.setState({
//         likes: this.state.likes + 1
//     });
// }

class RankingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Collections,
            apiData: [],
            likedCollection: [],
            updateLikedCollection: []
        };
    }

    // Access Collections from backend API
    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/collections/test`)
            .then((response) => {
                console.log('YOU ARE CONNECTED TO BACKEND!!!!');
                console.log('collection array response:');
                console.log(response.data);
                this.setState({
                    apiData: response.data.collections
                })
                console.log('API DATA', this.state.apiData)
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
    }

    render() {
        const displayCollections = this.state.apiData.map((c, idx) => <OpenSeaRanking
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
                <h2 className="tableName">OpenSea Rankings</h2>
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



