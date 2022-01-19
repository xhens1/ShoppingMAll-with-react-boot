import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../../../css/itemWriter.css';
import axios from 'axios';
import AuthenticationService from '../../../../../login/jwt/AuthenticationService'

const Rule = ({ px }, { color }) => (
    <hr
      style={{
        borderWidth: px,
      }}
    />
);

const logined_user = AuthenticationService.getLoggedInUserName();

class itemWrite extends Component{

    // 상품의 정보를 입력하고 POST
    constructor(props){
        super(props);        
        this.state = { title: '', content: '', writer: '', category: '', cost: '', file: null};
        axios.get(`/user/${logined_user}`)
          .then(res => {
            const userInfo = res.data;
            this.setState({ writer: userInfo.userName });
          });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 이미지 업로드
    fileUpload(file){
        const url = '/upload';
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
    }

    handleSubmit(event){
        var { title, content, writer, category, cost } = this.state;
        event.preventDefault();
        /*
        "청바지

        삽니다"
        => "청바지\n\n삽니다" => "청바지<br><br>삽니다" 로 바꿔서 DB저장
        */
        content = content.replace(/\r\n|\r|\n/g,"<br>")

        axios.post('/item', {
            "title": title,
            "content": content,
            "writer": writer,
            "category": category,
            "cost": cost,
        })
            .then((result) => {
                window.location = "/";
            })
            .catch((error) => {
                console.log(title)
            });
        
        setTimeout(()=> {
            for(let i=0; i<this.state.length; i++){
                event.preventDefault();
                this.fileUpload(this.state.file[i]).then((response) => {
                    console.log(response.data)
                })
            }
        }, 1000)

        alert('등록되었습니다');
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    fileChange = (e) => {
        this.setState({ file: e.target.files, length: e.target.files.length})
    }

    render(){
        return (
            <Router>
                <br/>
                <div encType="multipart/form-data">
                    <table>
                        <tbody>
                            <tr>
                                <label className="Nanum">분류</label>
                                <Form.Control as="select" id="sell_category" name="category" onChange={this.handleChange} value={this.state.category} custom>
                                    <option value="">선택</option>
                                    <option value="clothes">의류</option>
                                    <option value="books">도서</option>
                                    <option value="electronics">전자제품</option>
                                </Form.Control>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_title" className="Nanum">판매 제목</label>
                                <br />
                                <label for="sell_title"><small>판매 상품의 제목을 입력해 주세요</small></label>
                            </tr>
                            <tr>
                                <input name="title" value={this.state.title} onChange={this.handleChange} class="form-control" id="sell_title"/>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_content" className="Nanum">판매 내용</label>
                                <br />
                                <label for="sell_content"><small>판매 상품에 대한 내용을 입력해 주세요</small></label>
                            </tr>
                            <tr>
                                <textarea name="content" value={this.state.content} rows="10" cols="50" onChange={this.handleChange} class="form-control" id="sell_content" onKeyUp={this.EnterNewLine}></textarea>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_content" className="Nanum">판매 가격</label>
                                <br />
                                <label for="sell_content"><small>판매 상품 가격을 입력해 주세요</small></label>
                            </tr>
                            <tr>
                                <input name="cost" value={this.state.cost} onChange={this.handleChange} class="form-control" id="sell_cost"></input>
                            </tr>
                            <Rule px="3px" />
                            <input multiple="multiple" type="file" onChange={this.fileChange} name="file" />
                        </tbody>
                    </table>
                    <br/>
                    <Button type="submit" variant="secondary" onClick={this.handleSubmit}>판매 등록</Button>
                </div>
            </Router>
        )
    }
}

export default itemWrite;
