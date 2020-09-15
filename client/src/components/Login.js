import React from "react"
import { axiosWithAuth } from "./util/axiosWithAuth";

// make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

 
class  Login extends React.Component{
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  
   theSubmit = e =>{
    e.preventDefault();
    axiosWithAuth()
    .post("/api/login",this.state.credentials)
    .then (res => {
      window.localStorage.setItem('token', res.data.payload)
      this.props.history.push('/protected')
  })
  .catch (err => console.log(err))
  }


  render() {
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={this.theSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
    </div>
  );
  }
};

export default Login;
