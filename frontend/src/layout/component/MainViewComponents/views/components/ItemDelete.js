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

const ItemDelete = ({match}) => {
    const [isLoading, setLoading] = useState(true);

    // 해당 상품의 id따라 삭제
    useEffect(()=>{
        axios.delete(`/item/${match.params.id}`)
        .then(response => {
            axios.delete(`/deleteimage/${match.params.id}`)
                .then(result => {})
            setLoading(false);
            alert('삭제되었습니다.');
            window.location.href="/";
        })
    }, []);

    if(isLoading) {return "삭제중"}
    
    return (
        <div>존재하지 않는 게시물입니다.</div>
    )
}

export default ItemDelete;
