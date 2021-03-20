import React, { Component } from "react";
import Input from "./commen/input";

class Login extends Component {
    state={
        account:{username:'', password:''},
        errors: {}
    }
 
    validat = ()=>{
        const errors ={}
        const {account} = this.state
        if(account.username.trim() ==='')
           errors.username = "Username is required."
        if(account.password.trim() ==='')
           errors.password = "Password is required."
        return Object.keys(errors).length === 0? null: errors
    }
    validateProperty = ({name, value})=>{
      if(name === "username"){
         if(value.trim() === "") return "Username is required."
        }
      if(name === "password"){
         if(value.trim() === "") return "Password is required."
        }
    }

    handleChange =({target})=>{
      const errors = {...this.state.errors}
      const errorMessage = this.validateProperty(target)
      if(errorMessage) errors[target.name] =errorMessage
      else delete errors[target.name]
      const account = {...this.state.account}
      account[target.name] = target.value
      this.setState({account, errors})
    }
    handleSubmit = e=>{
        e.preventDefault()
        const errors = this.validat()
        console.log(errors)
        this.setState({errors : errors || {}})
        if(errors) return
        console.log("Submited")
    }
  render() {
      const { account, errors } = this.state
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input name='username' label='Username' error={errors.username} value={account.username} onChange={this.handleChange} />
          <Input name='password' label='Password' error={errors.password} value={account.password} onChange={this.handleChange} />
          <button className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
