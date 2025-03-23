import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class FriendRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friendName: ''
        };
        
        this.changeName = this.changeName.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeName(btnClick) {
        this.setState({
            friendName: btnClick.target.value
        });
    }

    submitForm(btnClick) {
        btnClick.preventDefault();

        this.props.onFriendRequest({
            title: this.state.friendName,
            completed: false
        });

        this.setState({itemTitle: ''})
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="row mb-3">
                    <label htmlFor="friendName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="friendName"
                            value={this.state.friendName}
                            onChange={this.changeName}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button
                            className="btn btn-primary"
                        >Confirm</button>
                    </div>
                </div>
            </form>
        );
    }
}