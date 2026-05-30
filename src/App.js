import './App.css';
import NavbarComponent from './components/NavbarComponent';
import News from './components/News';
// import News setProgress = {this.setProgress}  from './components/News setProgress = {this.setProgress} ';
import React, { Component } from 'react'
import LoadingBar from "react-top-loading-bar";
// import News setProgress = {this.setProgress} Item from './components/News setProgress = {this.setProgress} Item';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  state ={
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavbarComponent />
          <LoadingBar
          height={3}
        color="#f11946"
        progress={this.state.progress}
      />
          <Routes>

            <Route
              path="/"
              element={<News setProgress = {this.setProgress}  key="general" pageSize={this.pageSize} country="us" category="general" />}
            />

            <Route
              path="/business"
              element={<News setProgress = {this.setProgress}  key="business" pageSize={this.pageSize} country="us" category="business" />}
            />

            <Route
              path="/entertainment"
              element={<News setProgress = {this.setProgress}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />}
            />

            <Route
              path="/"
              element={<News setProgress = {this.setProgress}  key="entertainment" pageSize={this.pageSize} country="us" category="general" />}
            />

            <Route
              path="/health"
              element={<News setProgress = {this.setProgress}  key="health" pageSize={this.pageSize} country="us" category="health" />}
            />

            <Route
              path="/science"
              element={<News setProgress = {this.setProgress}  key="science" pageSize={this.pageSize} country="us" category="science" />}
            />

            <Route
              path="/sports"
              element={<News setProgress = {this.setProgress}  key="sports" pageSize={this.pageSize} country="us" category="sports" />}
            />

            <Route
              path="/technology"
              element={<News setProgress = {this.setProgress}  key="technology" pageSize={this.pageSize} country="us" category="technology" />}
            />

          </Routes>
        </Router>
      </div>
    )
  }
}

