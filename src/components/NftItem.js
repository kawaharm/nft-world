import React, { Component } from 'react';
import './NftContainer.css';

// Components 
import NftPage from "./NftPage";

class NftItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: ""
        }
    }

    handleCollection() {
        this.setState({
            collection: this.props.slug
        })
    }

    render() {
        return (
            <div class="column is-3">
                <article>
                    <figure class="image is-5by3">
                        <img src={this.props.image_url} />
                    </figure>
                    <h2 class="subtitle"><a onClick={this.handleCollection.bind(this)} href={`/nft/${this.state.collection}`}>{this.props.name}</a></h2>
                    <span class="tag is-rounded">Floor price: {this.props.floor_price} ETH</span>
                </article >
            </div >
        )
    }
}

export default NftItem;