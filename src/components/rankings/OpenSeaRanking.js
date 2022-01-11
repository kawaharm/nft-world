// Imports
import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const { REACT_APP_SERVER_URL } = process.env;

function OpenSeaRanking(props) {
    // Set user "like" value for profile 
    const [isLiked, updateLike] = useState(false);

    const handleLike = () => {
        let currentLikedCollection = props.likedCollection;
        if (!isLiked) {
            updateLike(true);
            // if (!currentLikedCollection.includes(props.name))
            //   props.updateLikedBands([...currentLikedCollection, name]);
        } else {
            updateLike(false);
            // if (currentLikedCollection.includes(name))
            //   props.updateLikedBands(currentLikedCollection.filter(band => band !== name));
        }
    };

    // const handleClick = () => {
    //     axios.post(`${REACT_APP_SERVER_URL}/collections/assets`, props.slug)
    //         .then((response) => {
    //             console.log('SLUG RESPONSE', response.data.assetsArray[0].name);
    //         })
    //         .catch(err => {
    //             console.error('ERROR: ', err);
    //         });
    // }

    return (
        <div className="tableRow">
            <div className="rowCell">{props.index + 1}</div>
            <div className="rowCell">
                {/* <a onClick={handleClick.bind(this)}>{props.name}</a> */}
                <Link to={`/nft/${props.slug}`}>{props.name}</Link>
            </div>
            <div className="rowCell">
                <img className="collectionImage" src={props.image_url} alt="collection image" />
            </div>
            <div className="rowCell numbers">{props.floor_price} <span><img className="ethSymbol" src="https://miro.medium.com/max/486/1*L8ODr3uJlh44i1SgjlMv7w.png" /></span></div>
            <div className="rowCell numbers">{props.seven_day_sales}</div>
            <div className="rowCell numbers">{props.thirty_day_sales}</div>
            <div className="rowCell">
                <button onClick={handleLike} disabled={isLiked}>
                    <FontAwesomeIcon icon={faThumbsUp} style={{ paddingRight: 5 }} />
                </button>
                <button onClick={handleLike} disabled={!isLiked}>
                    <FontAwesomeIcon icon={faThumbsDown} style={{ paddingLeft: 5 }} />
                </button>
                <p>{isLiked ? "Following!" : "Follow?"} </p>
            </div>
        </div >
    );
}

export default OpenSeaRanking;
