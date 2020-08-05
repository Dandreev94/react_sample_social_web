import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
      <BrowserRouter>
        <div className='global'>
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path='/profile/:id' component={ProfileContainer}/>
                <Route path='/users' component={UsersContainer}/>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
