import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import testImage from '../../../../img/testImage.png';
import '../../../../css/items.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const SearchViews = ({match}) => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState();

    // 검색바에서 입력받은 값으로 해당 값을 포함하는 상품을 뷰에 나타냄
    useEffect(() => {
        axios.get(`/search/${match.params.search}`)
            .then(response => {
                console.log(response);
                setItems(response.data);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="App">상품을 불러오는중...</div>;
    }
    
    var rows = [];
    for(var i=0; i < items.length; i++){

        if(items.length < 4)
        {
            rows.push(
                <Grid item xs={12}>
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

export default SearchViews;
