import React, { Component } from 'react';
import SearchItem from './SearchItem';
import ProductList from './ProductList';
import ProductListing from '../assets/ProductListing';

class Search extends Component {
    state = {
        prodList: ProductListing,
        showList: false,
        searchStr: ""
    }

    itemChangeHandler = (event) => {
        const data = event.target.value;
        if(data.trim() !== '' && data.length > 3){
            this.setState({
                showList: true,
                searchStr: data
            });
        }else{
            this.setState({
                showList: false,
                searchStr: ''
            });           
        }
    }

    render() {
        let productList = "";
        if(this.state.showList) {
            productList =  <ProductList  
                            productList={this.state.prodList} 
                            searchString={this.state.searchStr}/>;
        }
        return (
            <div>
                <SearchItem change={this.itemChangeHandler}/>
                {productList}
            </div>
        )
    }
}

export default Search;