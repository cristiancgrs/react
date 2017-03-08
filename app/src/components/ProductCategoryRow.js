/**
 * Created by Cgrs on 05/03/2017.
 */

import React from 'react'

export default class ProductCategoryRow extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <h4>{this.props.category}</h4>
        )
    }

}