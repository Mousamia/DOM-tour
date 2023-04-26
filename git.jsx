/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SignUp.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SignUp = () => {
    const [email, setEmail] = useState("zud");

    const handelSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        const password = event.target.password.value;
        console.log(email, password);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePwd = (event) => {
        console.log(event.target.value);
    }

    return (
        <Form onSubmit={handelSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' onBlur={handlePwd} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept Terms and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SignUp;