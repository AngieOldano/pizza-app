import React, { Fragment } from 'react';
import {Badge, Button} from 'react-bootstrap';

const Cliente = ({client, deleteClient}) => {
    return ( 
        <Fragment>
            <Badge 
                bg="secondary">
                    <p>Name: {client.name}</p>
                    <p>LastName: {client.lastName}</p>
                    <Button 
                        variant="light"
                        onClick={() => deleteClient(client.id)}>
                            Delete
                    </Button>
            </Badge>
        </Fragment>
     );
}
 
export default Cliente;