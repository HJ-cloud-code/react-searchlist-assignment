import React, { Component } from 'react';
import classes from '../assets/SearchItem.module.css';

class SearchItem extends Component {
    render () {
        return (
            <div className={classes.SearchItem}>
                <input type="text"  onChange={this.props.change} placeholder="Search for Products.."/>                
                <button><i className="fa fa-search"></i></button>
            </div>
        )
    }
}

export default SearchItem;