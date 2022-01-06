// Imports
import React, { Component } from 'react';

// Components 
import { Collections } from '../Collections';


function OpenSeaRanking(props) {
    const { collection } = props;
    console.log(collection);
    return (

        <tbody>
            <tr key={props.idx}>
                <td>{props.name}</td>
                <td>{props.slug}</td>
                <td>{props.description}</td>
                <td>{props.floor_price}</td>
            </tr>
        </tbody>

    );
}

export default OpenSeaRanking;