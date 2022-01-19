import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../../Header';
import Body from '../../Body';
import Navi from '../../Navi';
import Best100 from '../MainViewComponents/views/Best100';
import Books from '../MainViewComponents/views/Books';
import Clothes from '../MainViewComponents/views/Clothes';
import Electronics from '../MainViewComponents/views/Electronics';
import TodayHot from '../MainViewComponents/views/TodayHot';
import itemWriter from '../MainViewComponents/views/components/itemWrite';
import ItemPages from '../MainViewComponents/views/components/ItemPages';
import SearchViews from '../MainViewComponents/views/components/SearchViews';
import Cart from '../HeaderComponents/views/Cart';
import ItemUpdate from '../MainViewComponents/views/components/ItemUpdate';
import ItemDelete from '../MainViewComponents/views/components/ItemDelete';
import MyPage from '../MainViewComponents/views/MyPage'
import ItemBoxup from '../MainViewComponents/views/components/ItemBoxup';

// 라우터 

export default() => (
    <Router>
        <Header/>
        <Navi/>
        <Route exact path="/" component={Body}></Route>
        <Route path="/Best100" component={Best100}></Route>
        <Route path="/Books" component={Books}></Route>
        <Route path="/Clothes" component={Clothes}></Route>
        <Route path="/Electronics" component={Electronics}></Route>
        <Route path="/TodayHot" component={TodayHot}></Route>

        <Route path="/ItemPages" component={ItemPages}></Route>
        <Route path="/Write" component={itemWriter}></Route>
        <Route path="/SearchViews/:search" component={SearchViews}></Route>
        <Route path="/itemPages/:id" component={ItemPages}></Route>
        <Route path="/deleteItem/:id" component={ItemDelete}></Route>
        <Route path="/basket/:id/:userID" component={ItemBoxup}></Route>
        <Route path="/updateItem/:id/:category/:title/:content" component={ItemUpdate}></Route>

        <Route path="/MyPage" component={MyPage}></Route>

        <Route path="/Cart/:id" component={Cart}></Route>
    </Router>
)