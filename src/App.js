import React from 'react';
import './App.css';
import PostList from './PostList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: 'youtubehaiku'
    }
  }
  render() {
    return  (
      <div className="App">
        <h3>SnooView by <a href="https://github.com/gb92">@gb92</a></h3>
        <input type="text" value={this.state.subreddit} onChange={(e) => {
          this.setState({
            subreddit: e.target.value
          });
        }}></input>
        <PostList subReddit={this.state.subreddit}></PostList>
      </div>
    );
  }
}

export default App;
