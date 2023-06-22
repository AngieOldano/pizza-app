import Client from './Client';
import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';


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
    }

    const sumbitForm = (e) => {
        e.preventDefault();

        if(name.trim() === "" || lastName.trim() === "" || email.trim() === "" || address.trim() === ""){
            setError(true);
            return;
        }
        setError(false);
        

        partner.id = uuid();
        console.log(partner);
        addClient(partner);

        editPartner({
            name: "",
            lastName: "",
            email: "",
            address: ""
        })
    }

    let clientsSaved = JSON.parse(localStorage.getItem('clients'));
    
    if(!clientsSaved){
        clientsSaved = []
    };
    
    const [clients, editClient] = useState([]);

    useEffect( () => {
        clientsSaved
            ? localStorage.setItem('clients', JSON.stringify(clients))
            : localStorage.setItem('clients', JSON.stringify([]));
    }, [clientsSaved]);



    const addClient = (partner) => {
      editClient([
        ...clients,
        partner
      ])
    }

    const deleteClient = (id) => {
        const newClients = clients.filter(client => client.id!==id);    
        editClient(newClients);
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
                        <Button
                            variant="warning"
                            type="submit">
                                Submit
                        </Button>
                        </Form>
                        {
                            error
                                ? <h5 className='mt-3 text-danger'>Form Incomplete</h5>
                                : null
                        }

                        <Col
                            className='m-3'>
                            <h3>Users List</h3>
                            {
                                clients.map( client => 
                                    <Client
                                        client={client}
                                        key={client.id}
                                        deleteClient={deleteClient}/>
                                )
                            }

                        </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={closeForm}>
                            Close
                    </Button>
                </Modal.Footer>            
            </Modal>          
        </Fragment>
    );
}

export default OrderForm;



