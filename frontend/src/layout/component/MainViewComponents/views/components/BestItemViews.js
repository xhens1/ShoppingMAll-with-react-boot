import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import '../../../../css/items.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// 상품 view의 경우 같은 방식

const BestItemViews = () => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState();

    // 모든 상품을 GET
    useEffect(() => {
        axios.get("/item/all")
            .then(response => {
                setItems(response.data);
                setLoading(false);
            });
    }, []);

    // 다 불러올 때 까지
    if (isLoading) {
        return <div className="App">상품을 불러오는중...</div>;
    }
    
    // 불러온 상품을 view에 나타냄
    var rows = [];
    for(var i=0; i < items.length; i++){
        if(items.length < 4)
        {
            rows.push(
                <Grid item xs={24}>
                    <Link to={`/ItemPages/${items[i].id}`} style={{textDecoration: 'none'}} className="linkEffect"><div className="items">
                        <div className="imgWrapper">
                            <img alt="No IMAGE" src={`/showimage/${items[i].id}/0`} className="img"></img>
                        </div>
                        <div className="cardWrapper">
                            <p className="card">{items[i].title}</p>
                        </div>
                    </div></Link>
                </Grid>
            )

        }
        else{
            rows.push(
                <Grid item xs={3}>
                    <Link to={`/ItemPages/${items[i].id}`} style={{textDecoration: 'none'}} className="linkEffect"><div className="items">
                        <div className="imgWrapper">
                            <img alt="No IMAGE" src={`/showimage/${items[i].id}/0`} className="img"></img>
                        </div>
                        <div className="cardWrapper">
                            <p className="card">{items[i].title}</p>
                        </div>
                    </div></Link>
                </Grid>
             )
        }
    }

    return(
        <div>
            <Grid style={{height: '100%'}} container spacing={1}>
                <div className="row">
                    {rows}
                </div>
            </Grid>
        </div>
    )

}

export default BestItemViews;
