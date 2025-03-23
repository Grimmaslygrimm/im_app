import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FriendRequest from './FriendRequest';
import EditModal from './EditModal';
import Friends from './friends';
import MessageField from './messageField';
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FriendGrid: props.FriendGrid
        }

        this.addFriend = this.addFriend.bind(this);
    }

    saveItem(index, {title, description}) {
        let FriendGrid = this.state.FriendGrid.slice();
        FriendGrid[index].title = title;
        FriendGrid[index].description = description;
        this.setState(FriendGrid);
    }

    saveItems(FriendGrid) {
        this.setState({FriendGrid});
        this.props.onSaveItems(FriendGrid);
    }

    addFriend(friend) {
        let FriendGrid = this.state.FriendGrid.slice();
        FriendGrid.push(friend);
        this.setState({FriendGrid});
    }

    toggleCompleted(index) {
        let FriendGrid = this.state.FriendGrid.slice();
        FriendGrid[index].completed = !FriendGrid[index].completed;
        this.setState({FriendGrid});
    }

    render() {

        //let user = username; //this needs the DB to pull the user info and display username

        let items = this.state.FriendGrid.map((item, index) => (
            <div className="row align-items-center p-3">
                <div className="col-11">
                    <Friends 
                        title={item.title} //{user} 
                        description={item.description} 
                        completed={item.completed}
                        onToggleCompleted={() => this.toggleCompleted(index)}
                    />
                </div>
                <div className="col">
                    <EditModal 
                        title={item.title}
                        description={item.description}
                        onItemEdited={(editedItem) => this.saveItem(index, editedItem)}
                    />
                </div>
            </div>

            
        ));

        return (
            <div className="container">
                <div className="mb-5 mt-2">
                    Message Pro
                    <FriendRequest 
                    
                        onFriendRequest={this.addFriend}

                    />
                </div>
                  <div className="friend-select">
                    {items}
                  </div>
                <div className="message-pane">
                    <MessageField />
                </div>
            </div>
        );
    }
}