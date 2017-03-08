/**
 * Created by Cgrs on 05/03/2017.
 */

import React from 'react';

import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'

export default class FilterableProductTable extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <ProductTable products={this.props.store}/>
            </div>
        )
    }

}