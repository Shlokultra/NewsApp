import './App.css';
import NavbarComponent from './components/NavbarComponent';
import News from './components/News';
import React, { Component } from 'react'
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <News pageSize={19} />
      </div>
    )
  }
}

