import React, { Component, useEffect } from 'react';
import './css/NftPage.css';


function NftAsset(props) {
    return (
        <div className="card" style={{ backgroundColor: "#292D38" }}>
            <div className="header">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={props.collection_image_url} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div style={{ color: "white" }}>
                        <a href={props.permalink} className="assetName">{props.name}</a>
                        <br />
                        {/* Convert price to ETH */}
                        <p className="assetPrice">Last Sale: {props.last_sale * (10 ** -18)} ETH</p>
                    </div>
                </div>
            </div>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.image_url} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="level is-mobile">
                    <div className="level-left">
                        <div className="level-item has-text-centered">
                            <a href="">
                                <i className="material-icons">favorite_border</i>
                            </a>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <a href="">
                                    <i className="material-icons">chat_bubble_outline</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content" style={{ color: "white" }}>
                    <p className="likeCounter">
                        <strong></strong>
                    </p>
                    <p className="assetTraits">
                        <strong style={{ fontSize: 30 }, { color: "#10E5E2" }}>TRAITS: </strong>{props.trait_value}
                    </p>
                    <br />
                </div>
            </div>
            <div className="card-footer">
                <div className="columns is-mobile">
                    <div className="column is-11">
                        <div className="field">
                            <div className="control">
                                <input className="input is-medium" type="text" placeholder="Add a comment . . ." />
                            </div>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <button className="button">
                            <i className="material-icons">more_horiz</i>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NftAsset;