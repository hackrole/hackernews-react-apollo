import React, {Component} from 'react';
import {AUTH_TOKEN} from '../constants';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';


const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!, $name: String!){
    signup(emai: $email, password: $password, name: $name){
      token
    }
  }
`

const LOGIN_MUTTION = gql`
  mutation LOGINMUTATION($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true,
    email: '',
    password: '',
    name: '',
  }

  render(){
    const {login, email, password, name} = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({name: e.target.value})}
              type="text"
              placeholder="Your name"/>
          )}
        <input
          value={email}
          onChange={e => this.setState({email: e.target.value})}
          type="text"
          placeholder="Your email address" />
        <input
          value={password}
          onChange={e => this.setState({password: e.target.value})}
          type="password"
          placeholder="Choose a safe password" />
        <div clssName="flex mt3">
          <Mutation mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ emial, password, name}}
            onCompleted={date => this._confirm(data)}>
            {mutation => (
              <div className="pointer mr2 button" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>
          <div clasName="pointer button" onClick={() => this.setState({login: !login})}>
            {login ? 'need to create an account?' : 'already have an account?'}
          </div>
        </div>
        </div>
      </div>
    )
  }

  _confirm = async () => {
    const {token} = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push('/')
  }
  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  }
}


export default Login
