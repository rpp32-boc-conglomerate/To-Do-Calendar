import React from 'react';
import $ from 'jquery';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state);
    console.log('clicked');

    var url = 'http://localhost:3333/signup';
    console.log('in submit');
    var stringified = JSON.stringify(this.state);
    console.log('stringified: ', stringified);
    if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.password !== '') {
      return new Promise((resolve, reject) => {
        $.ajax({
          'url': url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          type: 'POST',
          contentType: 'application/json',
          data: {result: stringified},
          dataType: 'json',
          success: function (response) {
            resolve (response);
          },
          failure: function (response) {
            console.log('rejected');
            reject (response);
          }
        });
      });
    } else {
      console.log('invalid form input');
    }
  }

  handleChange(e) {

    if (e.target.id === "firstName") {
      this.setState({
        firstName: e.target.value
      });
    }
    if (e.target.id === "lastName") {
      this.setState({
        lastName: e.target.value
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.id === "password") {
      this.setState({
        password: e.target.value
      });
    }

  }

  render() {
    return (
      <div>Registration form
      <form onSubmit={this.handleSubmit}>
        <label>First Name:
          <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        </label>
        <label>Last Name:
          <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange}/> </label>
        <label>Email:
          <input type="text" id="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
        <label>Number of Guests:
          <input type="text" id="password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
export default Registration;