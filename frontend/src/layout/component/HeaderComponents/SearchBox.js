import axios from 'axios';
import React, {useState, useEffect, Component} from 'react';
import searchIcon from '../../img/searchIcon.png';

const SearchBoxOptions = {
    float: 'left',
    display: 'flex',
    width: '87%',
    height: '40px',
    borderRadius: '25px',
    border: 'none',
    marginLeft: '8px',
    marginRight: '0px',
    outline: 'none',
}

const searchIconOptions = {
    display: 'flex',
    borderRadius: '25px', 
    border: 'none',
    outline: 'none',
}

class SearchBox extends Component{
    
    

    constructor(props){
        super(props);
        this.state = {search: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ search : event.target.value})
    }

    // 검색바에 입력한 값을 뷰로 전달
    handleSubmit(event){
        var search = this.state;
        event.preventDefault();
        window.location = `/SearchViews/${search.search}`;
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input style={SearchBoxOptions} onChange={this.handleChange} className="searchBox" className='search' name="search"/>
                <button type="submit" className="search_Icon" style={searchIconOptions}><img src={searchIcon} width='120%' height='38px'></img></button>
            </form>
        )
    }
}

export default SearchBox;