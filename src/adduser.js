import React, { Fragment, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';


const Adduser = () => {


    const [user, setUser] = useState({
        name: '',
        accno: '',
        email: ' ',
        phone: ' ',
        AadharNo: '',
        balance:0,
        currentBalance:0,
        password: '',
        transaction: [],
        role: ''


    });

    const history = useHistory();

    const { name, accno, email, phone, AadharNo, balance, currentBalance, password, transaction, role } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        history.push("/adminaxios")

    }
    return (
        <Fragment className="body">
            
           
                   
                <Card className="addusercard" style={{backgroundColor:"lightgrey", marginLeft:'400px',width:'500px'}}>
                    <Card.Title className="t1" style={{textAlign:'relative'}}><h2><small>Add User</small></h2></Card.Title><br></br>
                    <Form onSubmit={e => onSubmit(e)}>
                        <Form.Group controlId="formBasicNmae">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name='name' value={name} onChange={e => onInputChange(e)} />

                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Account No</Form.Label>
                            <Form.Control type="text" placeholder="Account No" name='accno' value={accno} onChange={e => onInputChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={e => onInputChange(e)} />

                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={e => onInputChange(e)} />

                        </Form.Group>
                        <Form.Group controlId="formBasicMobile">
                            <Form.Label>MobileNumber</Form.Label>
                            <Form.Control type="number" placeholder="Mobile Number" name='phone' value={phone} onChange={e => onInputChange(e)} />

                        </Form.Group>
                        <Form.Group controlId="formBasicAdhar">
                            <Form.Label>Aadhar Number</Form.Label>
                            <Form.Control type="number" placeholder="AadharNumber" name='AadharNo' value={AadharNo} onChange={e => onInputChange(e)} />

                        </Form.Group>

                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" placeholder="Role" name='role' value={role} onChange={e => onInputChange(e)} />

                        </Form.Group>

                        <Button variant="primary" type="submit" block> Submit </Button>
                    </Form>

                </Card>
                
           
        </Fragment>
    )
}
export default Adduser;