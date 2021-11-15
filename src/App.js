import React, { Component } from 'react';
import Header from './components/header';
import Robolist from './components/robolist';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(){
        super()
        this.state = {
            robots: [],
            searchkeyword: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.setState({ robots: response.data})
          })
    }

    SearchChange = (event) => {
        this.setState({ searchkeyword: event.target.value })
    }

  render() {
    const { robots,searchkeyword } = this.state
    const filterData =  robots.map(robot => { 
      return robot.name.toLowerCase().includes(searchkeyword.toLowerCase()) })
     
    return (
      <React.Fragment>
        <Header SearchChange={this.SearchChange}/>
        <Robolist robots={robots} filterData={filterData} />
      </React.Fragment>
    );
  }
}

export default App;
