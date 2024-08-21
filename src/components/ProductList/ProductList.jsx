import axios from "axios";
import { useState,useEffect } from "react";
import Card from '../Card/Card';

const ProductList = ({category,limit}) => {
    const [data,setData] = useState ([]);
    useEffect (()=>{
        axios (
            limit === null
            ? `https://fakestoreapi.com/products/category/${category}`
            : `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
        )
        .then (({data}) =>{
            setData (data)
        })
    },[])

    return (
        <div className="container">
         
            <div className="row">
                {
                    data.map((item)=>{
                        return <div className="col-3"key={item.id}>
                            <Card item = {item}/>



                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;
