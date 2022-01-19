import React, { useEffect, Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../../../css/itemWriter.css';
import axios from 'axios';
const Rule = ({ px }, { color }) => (
    <hr
      style={{
        borderWidth: px,
      }}
    />
);

const ItemBoxup = ({match}) => {
    const [isLoading, setLoading] = useState(true);

    // 상품을 담기 위해 상품정보 GET 이후 basket으로 POST
    useEffect(()=>{
        axios.get(`/item/${match.params.id}`)
        .then(response => {
            axios.post(`/boxup/${match.params.userID}`,{
                "id": match.params.userID,
                "item_id": response.data.id,
                "title": response.data.title,
                "cost": response.data.cost,
            }
            )
                .then(result => {})
            setLoading(false);
            alert('상품을 담았습니다.');
            window.location.href="/";
        })
    }, []);

    if(isLoading) {return "상품 담는중"}
    
    return (
        <div>이미 상품을 담았습니다.</div>
    )
}

export default ItemBoxup;
