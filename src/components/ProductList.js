import React from 'react';
import classes from '../assets/ProductList.module.css';

const productList = (props) => {
    const { productList, searchString } = props;
    let productItemList = <p>No records found</p>;
    let prodList = [];
    if(productList && productList.length) {
            productList.forEach((item, index) => {
                if(item.prodName.toUpperCase().includes(searchString.toUpperCase())) {
                    prodList.push(item);
                }
            });
            const newArray = prodList.slice(0,5);
            const isListMore = (newArray.length === 5) ? <li style={{justifyContent:"center",color:"#58595b"}}><h5>VIEW ALL PRODUCTS</h5></li> : "";
            productItemList = (
                <ul>
                    <li style={{backgroundColor:"#f2f2f2",fontSize: "12px",margin:"0px",padding:"0px"}}><p>Showing results for <span style={{fontStyle: "italic"}}>{searchString}</span></p></li>
                    {newArray.map(el => {
                        return (
                            <li key={el.prodID}>
                                <p style={{width:"60%"}}>{el.prodName}</p>
                                <p style={{width:"10%"}}>{el.prodQty}</p>
                                <p style={{width:"10%"}}>{el.prodQtyType}</p>
                            </li>
                        )
                    })}
                    {isListMore}
                </ul>
            );
    }
    return (
        <div className={classes.ProductList}>
            {productItemList}
        </div>
    )
}

export default productList;