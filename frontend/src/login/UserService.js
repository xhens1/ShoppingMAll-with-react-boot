import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/";

//DB와 axios통신
class BoardService {
    getUser(user) {
       return axios.post(BOARD_API_BASE_URL+'login', user);
    }

    createUser(user) {
        return axios.post(BOARD_API_BASE_URL+'user', user);
    }

    changeUserInfo(user){
        return axios.post(BOARD_API_BASE_URL+'changeInfo', user);
    }

    deleteUser(user){
        return axios.post(BOARD_API_BASE_URL+'delete',user);
    }

}

export default new BoardService();