import React, { useEffect, Component } from 'react';
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

class ItemUpdate extends Component{

    // 상품 등록과 같은 형식, 기존 상품의 정보를 미리 입력받아두고 PUT으로 상품을 업데이트
    constructor({props, match}){
        super(props);
        this.state = { id: match.params.id, title: match.params.title, content: match.params.content, category: match.params.category, file: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        var { id, title, content, category } = this.state;
        event.preventDefault();
        // 판매등록과 같은 방식
        content = content.replace(/\r\n|\r|\n/g,"<br>")

        axios.put(`/item/write/${id}`, {
            "id": id,
            "title": title,
            "content": content,
            "category": category,
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
        alert('수정되었습니다');
    }

    fileChange = (e) => {
        this.setState({ file: e.target.files, length: e.target.files.length})
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
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
                                {/*
                                "청바지<br><br>삽니다" 를 다시
                                "청바지
                                
                                삽니다"로 보여줌
                                */}
                                <textarea name="content" value={this.state.content.replace(/<br\s?\/?>/g,"\n")} rows="10" cols="50" onChange={this.handleChange} class="form-control" id="sell_content" onKeyUp={this.EnterNewLine}></textarea>
                            </tr>
                            <Rule px="3px" />
                            <input multiple="multiple" type="file" onChange={this.fileChange} name="file" />
                        </tbody>
                    </table>
                    <br/>
                    <Button type="submit" variant="secondary" onClick={this.handleSubmit}>수정</Button>
                </div>
                
            </Router>
        )
    }
}

export default ItemUpdate;
