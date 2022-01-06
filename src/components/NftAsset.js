import React, { Component } from 'react';
import './NftPage.css';


class NftAsset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="header">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={this.props.collection_image_url} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <a href={this.props.permalink} className="title is-4">{this.props.name}</a>
                            <br />
                            <p className="subtitle is-6">Last Sale: {this.props.last_sale} ETH</p>
                        </div>
                    </div>
                </div>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.image_url} alt="Placeholder image" />
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
                        <strong>TRAITS: </strong>{this.props.trait_value}
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
}

export default NftAsset;