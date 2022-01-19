import axios from 'axios'

class AuthenticationService {

    // Backend 서버에 userID, userPW 전달
    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    // 로그인 성공시 토큰저장
    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
    }

    // 토큰 생성
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    //토큰
    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    //로그아웃시 토큰 제거
    logout() {
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
        window.location.href='http://localhost:3000/';
    }

    //로그인토큰 확인
    isUserLoggedIn() {
        
        //let user = sessionStorage.getItem('authenticatedUser')
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        //if(user===null) return false
        return false;
    }
    
    //로그인한 유저ID 확인
    getLoggedInUserName() {
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }


}

export default new AuthenticationService()