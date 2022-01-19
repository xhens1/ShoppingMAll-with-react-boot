import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

import AuthenticationService from '../../../../login/jwt/AuthenticationService';

const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    color: black;
    border-top: 3px solid black;
    font-size: 25px;
    min-width: 1300px;

    padding: 10px 60px;
`;

const logined_user = AuthenticationService.getLoggedInUserName();

//로그인 정보 받아옴
const MyPage = ({match}, {props}) => {
    const [isLoading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState();

  useEffect(() => {
      axios.get(`/user/${logined_user}`)
          .then(response => {
            setUserInfo(response.data);
            setLoading(false);
          });
  });

  if (isLoading) {
      return null;
  }

  return (
    <Wrapper>
      <div className="wrapper2">
        <p className="userID">로그인 ID : {userInfo.userID}</p>
        <p className="userID">이름 : {userInfo.userName}</p>
        <p className="userID">성별 : {userInfo.userSex}</p>
        <p className="userID">E-mail : {userInfo.userEmail}</p>
        <p className="userID">Phone : {userInfo.userPH}</p>
        <p className="userID">가입날짜 : {userInfo.created}</p>
        <p className="userID">수정날짜 : {userInfo.modified} </p>
        <button style={{float:"right"}}><Link style={{textDecoration: "none", color: "black"}}>수정</Link></button>
        <button style={{float:"right"}}><Link style={{textDecoration: "none", color: "black"}}>탈퇴</Link></button>
      </div>

    </Wrapper>
  )
}

export default MyPage;