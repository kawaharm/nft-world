import React, { Component } from 'react';
import './NftPage.css';


class NftAsset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src={this.props.collection_image_url} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <a href={this.props.permalink} class="title is-4">{this.props.name}</a>
                            <br />
                            <p class="subtitle is-6">Last Sale: {this.props.last_sale} ETH</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={this.props.image_url} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        <strong>TRAITS: </strong>{this.props.trait_value}
                        <br />
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . ." />
                                </div>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <button class="button">
                                <i class="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NftAsset;