/**
 * Created by Cgrs on 05/03/2017.
 */

import React from 'react';

export default class ProductRow extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div><h6>{this.props.product}{this.props.price}</h6></div>
        )
    }

}