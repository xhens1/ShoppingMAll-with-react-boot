import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';




const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 40%;
    width: 100%;
    z-index: 5;
    
    color: black;
    
    font-size: 2.5rem;
`;

const fixImages = {
    marginTop: '10px',
}

const properties = {
    duration: 2000,
    transitionDuration: 650,
}

const HotProductV = () => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState();

    // 조회수가 가장 높은 3개의 상품의 정보 GET
    useEffect(() => {
        axios.get("/item/best3")
            .then(response => {
                setItems(response.data);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="App">상품을 불러오는중...</div>;
    }

    return(
        // 슬라이드 형식으로 얻어온 베스트 상품의 이미지를 보여줌
        <Wrapper>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-fade">
                            <div className="image-container">
                                <a href={`/ItemPages/${items[0].id}`}><img alt="No IMAGE" style={fixImages} src={`/showimage/${items[0].id}/0`} width='100%' height='408px'/></a>
                            </div>
                            </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <a href={`/ItemPages/${items[1].id}`}><img alt="No IMAGE" style={fixImages} src={`/showimage/${items[1].id}/0`} width='100%' height='408px'/></a>
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <a href={`/ItemPages/${items[2].id}`}><img alt="No IMAGE" style={fixImages} src={`/showimage/${items[2].id}/0`} width='100%' height='408px'/></a>
                            </div>
                        </div>
                    </Slide>
                </div>
                </Grid>
            </Grid>
        </Wrapper>
    )

}
export default HotProductV;