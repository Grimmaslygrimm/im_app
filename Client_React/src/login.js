import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.setInput = this.setInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setInput = (btnClick) => {
        this.setState({ [btnClick.target.name]: btnClick.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        console.log("submit login request");
        
        try {
            const response = await fetch("http://localhost:8080/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username, password: password })
            });

            if (response.ok) {
                console.log("successful login");
                //insert bootstrap modal here
            } else {
                console.log("Invalid Credentials");
                //throw fail modal
            }
        } catch (err) {
            console.log("error on login:", err);
        }
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="align-items-center justify-content-center">
                    <h1>MessagePro</h1>

                    <label htmlFor="username" className="col-sm-2 col-form-label">Username: </label>
                    <input id="username" name="username" type="text" className="form-control" value={this.state.username} onChange={this.setInput}></input>

                    <label htmlFor="password" className="col-sm-2 col-form-label">Password: </label>
                    <input id="password" name="password" type="password" className="form-control" value={this.state.password} onChange={this.setInput}></input>

                    <button type="submit" className="btn btn-primary" >Login</button>
                </div>
            </form>
        )
    }
}