import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/NftPage.css';

// Components
import NftAsset from './NftAsset';

function NftPage(props) {
    const { id } = useParams();
    const [assets, setAssets] = useState([]);

    // Will only allow one API call at a time when needed. Or else will keep hitting API many times. 
    useEffect(() => {
        console.log('THIS IS SLUG ID: ', id);
        axios.get(`https://api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&offset=0&limit=20&collection=${id}`)
            .then((response) => {
                console.log('RESPONSE: ', response.data);
                setAssets(response.data.assets);
                console.log('THIS IS ASSETS: ', assets);
            })
            .catch((err) => {
                console.log('ERROR hitting API: ', err);
            })
    }, []); // <-- Empty array in input so would only run on mount

    const displayAssets = assets.map((a, idx) => {
        return <NftAsset
            key={idx}
            name={a.name}
            image_url={a.image_url}
            permalink={a.permalink}
            last_sale={a.last_sale.total_price}
            collection_image_url={a.collection.image_url}
            trait_type={a.traits.map(t => { return `${t.trait_type}, ` })}
            trait_value={a.traits.map(t => { return `${t.value}, ` })}
        />
    })
    console.log('DISPLAY ASSETS: ', displayAssets);

    return (
        <div>
            <div class="columns body-columns">
                <div class="column is-half is-offset-one-quarter">
                    {/* Add NftAsset Component Here */}
                    {displayAssets}

                    <footer class="footer">
                        <div class="container is-fluid">
                            <div class="content has-text-centered">
                                <p>
                                    <strong>Bulma</strong> by
                                    <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default NftPage;