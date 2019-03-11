import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [
        {
          name: 'Carolyn',
          imageUrl: 'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1504106954-monkey.jpg'
        },
        {
          name: 'Anna',
          imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/11/animal-hybrids-19.jpg'
        }
      ],
      newFriend: '',
      newFriendImageUrl: ''
    }

    this.handleFriendChange = this.handleFriendChange.bind(this)
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
  }

  handleFriendChange(e) {
    this.setState({
      newFriend: e.target.value
    })
  }

  handleImageUrlChange(e) {
    this.setState({
      newFriendImageUrl: e.target.value
    })
  }

  handleAddFriend = () => {
    let { newFriend, newFriendImageUrl } = this.state
    let friends = this.state.friends.slice()
    friends.push({ name: newFriend, imageUrl: newFriendImageUrl })
    this.setState({
      friends
    })
  }

  render() {
    let { friends } = this.state
    return (
      <div className="App">
        <h1>These are my friends</h1>
        <input 
          type="text" 
          placeholder="friends name"
          onChange={this.handleFriendChange}/>
        <input 
          type="text" 
          placeholder="friends image" 
          onChange={this.handleImageUrlChange}/>
        <button onClick={this.handleAddFriend}>add friend</button>
        {friends.map((friend, i) => {
          return (
            <div key={i}>
              <p>{friend.name}</p>
              <img src={friend.imageUrl} alt="" width="200"/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
