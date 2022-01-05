import React, { Component } from 'react';
import axios from 'axios';

class CryptoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            slug: '',
            description: '',
            image_url: '',
            floor_price: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/cryptopunks', {
            header: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(function (response) {
                console.log(response.data);
                // this.setState({
                //     title: response.data.cryptopunksArray[0]
                // })
            })
            .catch((err) => {
                console.log('error error error', err);
            })
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h1>{this.state.name}</h1>

            </div>

        )
    }
}

export default CryptoContainer;