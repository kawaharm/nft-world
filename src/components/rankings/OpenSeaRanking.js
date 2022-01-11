// Imports
import React, { Component } from 'react';

function OpenSeaRanking(props) {
    return (
        <div className="tableRow">
            <div className="rowCell">{props.index + 1}</div>
            <div className="rowCell">{props.name}</div>
            <div className="rowCell">
                <img className="collectionImage" src={props.image_url} alt="collection image" />
            </div>
            <div className="rowCell">{props.floor_price} ETH</div>
            <div className="rowCell">{props.seven_day_sales} ETH</div>
            <div className="rowCell">{props.thirty_day_sales} ETH</div>
            {/* <div className="rowCell">
            <i onClick={handleLike.bind(this)} className="material-icons">favorite_border</i>
        </div> */}
        </div>
    );
}

export default OpenSeaRanking;

