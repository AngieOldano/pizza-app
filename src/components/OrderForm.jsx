import { React, Fragment, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const OrderForm = ({closeForm,showForm}) => {

    const [partner, editPartner] = useState({
        name: "",
        lastName: "",
        email: "",
        address: ""
    });

    const {name, lastName, email, address} = partner;


    const [error, setError] = useState(false);

    const handleChange = (e) => {
        editPartner({
            ...partner,
            [e.target.name] : e.target.value
        })
        console.log("Tomando datos")
    }

    const sumbitForm = (e) => {
        e.preventDerfault();

        if(name.trim() === "" || lastName.trim() === "" || email.trim() === "" || address.trim() === ""){
            setError(true);
            return;
        }
        setError(false);

        console.log("Form sent");



    }

    return (
        <Fragment>
            <Modal 
                show={showForm} 
                onHide={closeForm}>

                <Modal.Header closeButton>
                    <Modal.Title>Register to Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={sumbitForm}>
                        <Form.Group
                            className="mb-3">
                            <Form.Label>Name </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name" 
                                onChange={handleChange}
                                value={name}/>
                        </Form.Group>

                        <Form.Group
                            className="mb-3">
                            <Form.Label>Last Name </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                value={lastName} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChange}
                                value={email} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                name="address"
                                onChange={handleChange}
                                value={address} />
                        </Form.Group>

                    </Form>

                    {
                        error
                        ? <h4>Form Incomplete</h4>
                        : null

                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={closeForm}>
                    Close
                    </Button>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={closeForm}>
                    Submit
                    </Button>

                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default OrderForm;



