import React, { Component } from 'react';
import API from '../../config/axios';

class Signup extends Component {
  state = {
    company_name: '',
    company_url: '',
    owner_name: '',
    owner_email: '',
    owner_phone: '',
    owner_password: '',
    dupComp: false
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      ...this.state,
      dupComp: false,
      [target.name]: target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();
    API.post('/company', this.state)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        if (err.response) {
          if (err.response.data.msg) {
            return this.setState({
              ...this.state,
              dupComp: true
            });
          }
        }

        console.log(err);
      });
  };

  render() {
    const {
      company_name,
      company_url,
      owner_name,
      owner_email,
      owner_phone,
      dupComp,
      owner_password
    } = this.state;
    return (
      <div>
        <form onSubmit={this.submitFormHandler}>
          <div>
            <label htmlFor="owner_name">Name</label>
            <input
              id="owner_name"
              name="owner_name"
              value={owner_name}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="owner_email">email</label>
            <input
              id="owner_email"
              name="owner_email"
              value={owner_email}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="owner_phone">Phone</label>
            <input
              id="owner_phone"
              name="owner_phone"
              value={owner_phone}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="owner_password">Password</label>
            <input
              id="owner_password"
              name="owner_password"
              value={owner_password}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="company_name">Company Name</label>
            <input
              id="company_name"
              name="company_name"
              value={company_name}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="company_url">Company url</label>
            <input
              id="company_url"
              name="company_url"
              value={company_url}
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div hidden={dupComp ? false : true}>
            Company exists. do you have an account? try signing in.
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
