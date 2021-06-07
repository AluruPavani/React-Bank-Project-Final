import React, { Fragment, useState } from 'react';
import { Form, Button, Container ,Col} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        accno:"",
        email: "",
        password: "",
        phone: "",
        AadharNo: "",
        role: "",
        balance:0,
        currentBalance:0,
        transaction:[]

    });

    const { name,accno, email, password, phone, AadharNo, role,balance,currentBalance ,transaction} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        history.push('/userLogin');
    };
    return (

        <div 
        >
        <Container className="container1">
           
            <Form onSubmit={e => onSubmit(e)}>
                {/* <Form.Row>
                    <Col> */}
                        
                            <Form.Label style={{ fontSize: '15px' }}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name" size="sm" name="name" value={name}
                                onChange={e => onInputChange(e)} required/>
                        {/* </Col>
                        <Col> */}
                       
                    <Form.Label style={{ fontSize: '15px' }}>Account No</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Account No" size="sm" name="accno" value={accno}
                        onChange={e => onInputChange(e)} required/>

               
                    {/* </Col>
                </Form.Row>
               <Form.Row>
                   <Col> */}
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your E-mail Address" size="sm" name="email" value={email}
                        onChange={e => onInputChange(e)} required/>

               {/* </Col>
                <Col> */}
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" size="sm" name="password" value={password}
                        onChange={e => onInputChange(e)} required/>
{/* </Col>
               </Form.Row> */}
                
                {/* <Form.Row>
                    <Col> */}
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>MobileNo</Form.Label>
                    <Form.Control type="mobile" placeholder="Enter your Phone Number" size="sm" name="phone" value={phone}
                        onChange={e => onInputChange(e)} required/>
               {/* </Col>
               <Col> */}
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>AadharNo</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Aadhar Number" size="sm" name="AadharNo" value={AadharNo}
                        onChange={e => onInputChange(e)} required/>

{/* </Col>
                </Form.Row> */}
                {/* <Form.Row>
                    <Col>
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Balance</Form.Label>
                    <Form.Control type="mobile" placeholder="Enter your Balance" size="sm" name="balance" value={balance}
                        onChange={e => onInputChange(e)} />
               </Col>
               <Col>
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>NetBalance</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Current Balance" size="sm" name="currentBalance" value={currentBalance}
                        onChange={e => onInputChange(e)} />

</Col>
                </Form.Row> */}
               
                  
                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Role" size="sm" name="role" value={role}
                        onChange={e => onInputChange(e)} required/>


               <br/>
                <button className="btn btn-primary btn-block">SignUp</button>

            </Form>
           
        </Container>
        </div>

    )
}
export default Register;
