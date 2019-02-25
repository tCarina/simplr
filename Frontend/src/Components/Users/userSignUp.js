import React from 'react';
import Axios from 'axios';

class AddUser extends React.Component {
    state = {
        username: '',
        password: '',
        message: ''
    };

    handleUsername = e => {
        this.setState({
            username: e.target.value
        });
    };


    handlePassword = e => {
        this.setState({
            password: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const {
            username,
            password
        } = this.state;
        if (username.length < 3) {
            this.setState({
                message: 'Username must be at least 3 characters.'
            });
            return;
        }

        Axios.post('users/new', {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res.data);
                this.setState({
                    username: '',
                    password: '',
                    message: 'User added successfully.'
                });
            })
            .catch(err => {
                console.log('Error:', err);
                this.setState({
                    username: '',
                    password: '',
                    message: 'Error adding user.'
                })
            });
    }

    render() {
        const {
            username,
            password,
            message
        } = this.state;
        return( 
        
              <div>
            <h1> Register </h1> <form onSubmit = {this.submitForm }>
            <label> Username:
            <input type = "text"
            name = "username"
            value = {
                usernameInput
            }
            onChange = { this.handleUsername }/> </label>
            
             <label> Password:
            <input type = "text"
            name = "username"
            value = {
                passwordInput
            }
            onChange = { this.handlePassword }/> </label> 
            <input type = "submit" value = "Submit"/>



            </form>

            </div>
        )
    }

}