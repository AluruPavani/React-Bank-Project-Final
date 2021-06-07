import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const UserView = () => {
    const [user, setUser] = useState({
        id: '',
        name: '',
        accno: '',
        email: '',
        phone: '',
        AadharNo: ''
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }
    return (
            // <Container>
            //     <Form >
                <Fragment>
                    {/* <div background="https://cdn.shopify.com/s/files/1/1268/9705/products/DREAMY_MINKY_SOLID_ds120-babypink_530x.jpg?v=1518633161" > */}
                    <div
                 style={{
                   backgroundImage: `url("https://cdn.shopify.com/s/files/1/1268/9705/products/DREAMY_MINKY_SOLID_ds120-babypink_530x.jpg?v=1518633161")`, backgroundRepeat: 'repeat', width: '1300px', height: '550px'
                }}>
        <center>
        <Card style={{ width: '24rem' }}>
            <Card.Body>
            <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/t87Out7/AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=" style={{height:'100px'}} />
                <Card.Text>
                    <ListGroup>
                        <Card.Title >User Id:{user.id}</Card.Title><br />
                        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                        <ListGroup.Item>Account No: {user.accno}</ListGroup.Item>
                        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                        <ListGroup.Item>Mobile No: {user.phone}</ListGroup.Item>
                        <ListGroup.Item>Aadhar No: {user.AadharNo}</ListGroup.Item>
                        <br />
                        <Link className="btn btn-primary" to="/adminaxios">Back</Link>
                    </ListGroup>
                    </Card.Text>
                            </Card.Body>
                        </Card>
                        </center>
                {/* </Form>
            </Container> */}
            </div>
            </Fragment>
    )
}
export default UserView;