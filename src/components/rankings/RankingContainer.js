// Imports
import React, { Component } from 'react';
import '../css/RankingContainer.css'

// Components 
import { Collections } from '../Collections';
import OpenSeaRanking from './OpenSeaRanking';

const CollectionData = ({ key, index, name, slug, description, image_url, floor_price }) => (
    <div className="tableRow">
        <div className="rowCell">{index}</div>
        <div className="rowCell">{name}</div>
        <div className="rowCell">{slug}</div>
        <div className="rowCell">{floor_price}</div>
    </div>
);

class RankingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Collections
        };
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy.bind(key));
        this.setState({ data: arrayCopy });
    }

    render() {
        const displayCollections = this.state.data.map((c, idx) => <CollectionData
            key={idx}
            index={idx}
            name={c.name}
            slug={c.slug}
            description={c.description}
            image_url={c.image_url}
            floor_price={c.floor_price} />);
        return (
            <div className="table">
                <div className="tableName">OpenSea Ranking
                    <div className="tableHeader">
                        <div className="headerCell" onClick={() => this.sortBy.bind('')} >#</div>
                        <div className="headerCell" onClick={() => this.sortBy.bind('name')} >Name</div>
                        <div className="headerCell" onClick={() => this.sortBy.bind('title')}>Slug</div>
                        <div className="headerCell" onClick={() => this.sortBy.bind('priority')}>Floor Price</div>
                    </div>
                    <div className="tableBody">
                        {displayCollections}
                    </div>
                </div>
            </div>
        )
    }
}

export default RankingContainer;



