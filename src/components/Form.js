import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import functions from '../utils/functions.js';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            carURL: 'https://joes-autos.herokuapp.com/api/vehicles',
            carsToDisplay: []
        }
        this.updateForm = this.updateForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        functions.getCars(this.state.carURL).then(data => this.setState({ carsToDisplay: data }));
    }

    updateForm(e, category) {
        this.setState({
            [category]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        let { email, age } = this.state;
        if (functions.emailCheck(email) && functions.ageCheck(age)) {
            alert('Signed up!')
        } else {
            alert('Problem with email and/or age.')
        }
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                {JSON.stringify(this.state.carsToDisplay, null, 2)}
                <h4>Please sign up:</h4>
                <form onSubmit={this.submitForm}>
                    <TextField
                        onChange={(e) => this.updateForm(e, 'firstName')}
                        hintText="Type your first name"
                        floatingLabelText="First Name"
                    /><br />
                    <TextField
                        onChange={(e) => this.updateForm(e, 'lastName')}
                        hintText="Type your last name"
                        floatingLabelText="Last Name"
                    /><br />
                    <TextField
                        type='number'
                        onChange={(e) => this.updateForm(e, 'age')}
                        hintText="Type your age"
                        floatingLabelText="Age"
                    /><br />
                    <TextField
                        onChange={(e) => this.updateForm(e, 'email')}
                        hintText="Type your email address"
                        floatingLabelText="Email"
                    /><br />
                    <RaisedButton type='submit' label="Sign up" primary={true} />
                </form>
            </div>
        )
    }
}
