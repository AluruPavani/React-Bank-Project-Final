import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Button, Card, Form, Row, Col,Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Adduser from './adduser';
import Edituser from './edituser';
import UserView from './UserView';

function Adminaxios(props) {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        loadUsers();
    }
    const user=()=>{
        props.history.push('/adduser');
    }
    const logout=()=>{
        props.history.push('/');
    }
    
    const viewUser=(id)=>{
        props.history.push(`/userview/${id}`);
    }

    const edituser=(id)=>{
        props.history.push(`/edituser/${id}`);
    }
    return (
        <div
        style={{
            backgroundImage: `url("https://cdn.hipwallpaper.com/i/3/4/KCu1jQ.jpg")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '900px'
        }}>
        <div>
            <center>
            <h3>Users Data</h3>
            <Router>
                <Button style={{marginRight:'1000px'}}onClick={user}>Add Users</Button>
               
                <Button style={{marginLeft:'1000px'}}onClick={logout}>Logout</Button>

                <Container>
                    <div class="tab">
                    <Table striped bordered hover variant="dark" >
                        <thead >
                            <tr>
                                <th scope='col'>S.No</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Account No</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Mobile No</th>
                                <th scope='col'>Action</th>
                            </tr>

                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.accno}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td> 
                                            
                                            <Link class='btn btn-outline-primary'  onClick={() => viewUser(user.id)}  to={`/userview/${user.id}`}>View</Link>{' '}
                                            <Link class='btn btn-outline-info' onClick={() => edituser(user.id)} to={`/edituser/${user.id}`}>Edit</Link>{' '}
                                            <Link class='btn btn-outline-danger' onClick={() => deleteUser(user.id)}>Delete</Link>{' '}

                                        </td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </Table>
                    </div>
                </Container>
                <Switch>
                    <Route path="/adduser" component={Adduser}></Route>
                    <Route path="/edituser/:id" component={Edituser}></Route>
                    <Route path="/userview/:id" component={UserView}></Route>
                </Switch>
            </Router>
            </center>


        </div>
        </div>

    )
}

export default Adminaxios;