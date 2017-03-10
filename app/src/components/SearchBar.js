/**
 * Created by Cgrs on 05/03/2017.
 */
import React from 'react'

export default class SearchBar extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <input onChange={this.props.onChange} type="text"/>
                <input type="checkbox"/>
            </div>
        )
    }

}