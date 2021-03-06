import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import UserList from './components/UserList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: ''
    };

    axios
      .get('https://api.github.com/users/juhrard')
      .then(response => {
        console.log(response)
        this.setState({
          users: [response.data],
          logins: []
        });
      })

    console.log('Constructor is running')
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/juhrard/followers')
      .then(response => {
        console.log('followers axios call: ', response.data)
        response.data.map(user => {
          axios
          .get(`https://api.github.com/users/${user.login}`)
          .then(response => {
            this.setState({
              users: [...this.state.users, response.data]
            });
          })
        })
      }) 
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      console.log('Inside first if');
      if (this.state.search === "") {
        console.log('Inside second if');
        axios
          .get('https://api.github.com/users/juhrard/followers')
          .then(response => {
            this.setState({
              users: response.data
            });
            console.log(response);
          })
          .catch(error => console.log(error));
      }
    }
  }

  handleChanges = e => {
    this.setState({
      search: e.target.value
    });
  };

  fetchUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.search}`)
      .then(response => {
        this.setState({
          users: [response.data]
        });
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log('render users ', this.state.users);
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Search</button>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
