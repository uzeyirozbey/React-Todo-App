import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import OgrenciPge from "./components/pages/OgrenciPage"
import OgrenciEkle from "./components/pages/OgrenciEkle";
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container text>
          <Route exact path='/ogrenci'     component = { OgrenciPge }></Route>
          <Route exact path='/OgrenciEkle' component = { OgrenciEkle }></Route>
            <Route exact path='/ogrenci/:ID' component = { OgrenciEkle }></Route>
        </Container>
        <Footer/>
      </div>
    )
  }
}

export default App;
