import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: props.completed
        }
    }

    //button needs to be send message to db to be then sent to user

    render() {

        return (
            
          <div className="message-field">
              <input className="message" type="text" placeholder='MessagePro' required></input>
              <button type="submit" formAction="">Send</button> 
          </div>
                  
        );
    }

}