import React, { Component } from 'react';
import './index.css';
import ProfileCard from "./ProfileCard"

class App extends Component {
  state = { 
    loading:true,
    data:[],
    random:0
  }
  handleClick = (event) => {
    if (event.target.innerText === "&lt") {
      this.prev();
    } else {
      this.next();
    }
    console.log(event.target.innerText, this.state.random)
  }
  prev = () => {
    if (this.state.random === 0) {
      this.setState({random:5})
    }
    else{
      this.setState((prevState) => ({
        random: prevState.random - 1,
      }));
    }
  }
  next = () => {
    if (this.state.random === 5) {
      this.setState({random:0})
    }
    else{
      this.setState((prevState) => ({
        random: prevState.random + 1,
      }));
    }
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then(
        (data) => 
          this.setState({
            data: data.data,
            loading: false,
          }),
        
      );
  }
  render() {
    const style = {
      color: "black",
      fontSize: "40px",
    }
    const {random, data} = this.state;
    return (
      
      this.state.loading
      ? <p style = {style}>Loading....</p>
      :  <ProfileCard 
      key = {this.state.data[random].id} 
      firstName={data[random].first_name} 
      lastName={data[random].last_name} 
      email={data[random].email} 
      avatar={data[random].avatar} 
      click = {this.handleClick}
      />);
  }
}

export default App;