import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: ''
        }
        this.updateForm = this.updateForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    updateForm(e, category) {
        this.setState({
            [category]: e.target.value 
        })
    }
    ageCheck(age) {
        // complete this method
        // age should be at least 18 and probably not older than 108
    }
    emailCheck(email) {
        // complete this method
        // check at least for the '@' symbol
    }
    submitForm(e) {
        e.preventDefault();
        let {email, age} = this.state;
        if (this.emailCheck(email) && this.ageCheck(age)) {
            alert('Signed up!')
        } else {
            alert('Problem with email and/or age.')
        }
    }
    render() {
        return (
            <div style={{margin: 20}}>
                <h4>Please sign up:</h4>
                <form onSubmit={this.submitForm}>
                <TextField
                    onChange={(e)=> this.updateForm(e, 'firstName')}
                    hintText="type your first name"
                    floatingLabelText="First Name"
                /><br />
                <TextField
                    onChange={(e)=> this.updateForm(e, 'lastName')}
                    hintText="type your last name"
                    floatingLabelText="Last Name"
                /><br />
                <TextField
                    onChange={(e)=> this.updateForm(e,'age')}
                    hintText="type your age"
                    floatingLabelText="Age"
                /><br />
                <TextField
                    onChange={(e)=> this.updateForm(e,'email')}
                    hintText="type your email address"
                    floatingLabelText="Email"
                /><br />
                <RaisedButton type='submit' label="Sign up" primary={true} />
                </form> 
            </div> 
        )
    }
}