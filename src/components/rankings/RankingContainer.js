// Imports
import React, { Component } from 'react';

// Components 
import { Collections } from '../Collections';
import OpenSeaRanking from './OpenSeaRanking';

const displayCollections = Collections.map((c, idx) => {
    return (
        <OpenSeaRanking
            key={idx}
            name={c.name}
            slug={c.slug}
            description={c.description}
            image_url={c.image_url}
            floor_price={c.floor_price}
        />
    );
});

class RankingContainer extends Component {
    render() {
        return (
            <div>
                <table>
                    <caption>Top OpenSea NFT Collections</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Description</th>
                            <th>Floor Price</th>
                        </tr>
                    </thead>
                    {displayCollections}
                </table>
            </div >
        )
    }
}

export default RankingContainer;
