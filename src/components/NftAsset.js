import React, { Component, useEffect } from 'react';
import './css/NftPage.css';


function NftAsset(props) {
    return (
        <div className="card">
            <div className="header">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={props.collection_image_url} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <a href={props.permalink} className="title is-4">{props.name}</a>
                        <br />
                        <p className="subtitle is-6">Last Sale: {props.last_sale} ETH</p>
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
                <div className="content">
                    <p>
                        <strong>32 Likes</strong>
                    </p>
                    <strong>TRAITS: </strong>{props.trait_value}
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
        </div>
    )
}

export default NftAsset;