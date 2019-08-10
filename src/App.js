import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList'

class App extends React.Component {
  render() {
    return  (
      <div className="App">
        <h3>SnooView by <a href="https://github.com/gb92">@gb92</a></h3>
        <PostList></PostList>
      </div>
    );
  }
}

export default App;
