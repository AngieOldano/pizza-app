import React from 'react';
import { Fragment } from 'react';


const Formulario = () => {
    return (
        <Fragment>
            <Form>
                <Form.Group 
                    className="mb-3">
                    <Form.Label>Name </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="name" />
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Last Name" />
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" />
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" />
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" />
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Check 
                        type="checkbox" 
                        label="Check me out" />
                </Form.Group>

                <Button 
                    variant="primary" 
                    type="submit">
                        Submit
                </Button>
            </Form>
        </Fragment>
    );
}

export default Formulario;