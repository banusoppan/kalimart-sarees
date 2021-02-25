import React from 'react';
import './sign-in-styles.scss';
import FormInput from '../form-input/form-input-component'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state ={
            email : '',
            password : ''

        }
    }
    onFormSumbit = (event) =>{
        // console.log("submit")
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    onChange=(event)=>{
        // console.log(event)\
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.onFormSumbit}>
                    <FormInput name="email" value={this.state.email} required handleChange={this.onChange} label="Email"/>
                    
                    <FormInput name="password" value={this.state.password} required handleChange={this.onChange} label="Password" type="password"/>
                   
                    <input type="submit" value="Submit form" />
                </form>
            </div>
        )
    }
}

export default SignIn;