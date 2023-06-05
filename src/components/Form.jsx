import { React, Fragment } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const Formu = ({closeForm,showForm}) => {
    return (
        <Fragment>
            <Modal show={showForm} onHide={closeForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!
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

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeForm}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeForm}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default Formu;



