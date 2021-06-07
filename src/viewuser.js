import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert ,Card,Row,Col,Nav} from 'react-bootstrap';

const Viewuser = (props) => {

    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        AadharNo: ' ',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentBalance: 0,

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/subamount');
    }
    const currentSubAmount = () => {
        props.history.push('/currentsub');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    const setData = (falg) => {
        sessionStorage.setItem('from', falg)
    }
    return (

        <div
                style={{
                    backgroundImage: `url("https://cdn.hipwallpaper.com/i/3/4/KCu1jQ.jpg")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '754px'
                }}>
                    <Nav className="justify-content-end">

<Nav.Link ><Link className= "btn btn-light"  to="/">Logout</Link></Nav.Link>
</Nav>
        <center>

            <div>
                <h1 className="display-4">Hi {user.name}</h1>
                <Row>
                    <Col className="currentImage">
                        <Card className="gallery" style={{ width: '15rem' }}>
 
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoPb-ZxDJMRk63hvIbgabCzJxwCtpgWKjyA&usqp=CAU" />
                            <Button variant="dark" onClick={currentButton}>Current</Button>
                        </Card>
                    </Col>
                    <Col className="savingImage">
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://image.slidesharecdn.com/savingaccountv2-161122105425/95/saving-account-1-638.jpg?cb=1479812225" />
                            <Button variant="dark" onClick={savingsButton}>Savings</Button>
                        </Card>
                    </Col>
                </Row><br></br>

                {
                    showButton === true && (<div>
                        <Link class="btn " onClick={userButton}>Add Amount</Link>
                        <Link class="btn " onClick={userButton1}>Withdraw Amount</Link>
                        <Link class='btn '  onClick={setData('Savings')} to={`/mini/${user.id}`}>MiniStatement</Link>
                        <ul className="list-group w-50" >
                            <li className="list-group-item">Name : {user.name}</li>
                            <li className="list-group-item">Account No : {user.accno}</li>
                            <li className="list-group-item">Email: {user.email}</li>
                            <li className="list-group-item">Account Type:Savings</li>
                            <li className="list-group-item">Mobile : {user.phone}</li>
                            <li className="list-group-item">AadharNo: {user.AadharNo}</li>
                            <li className="list-group-item">Balance : {user.balance}</li>
                
                        </ul>
                    </div>


                    )}{(showButton === false &&
                        <div>
                            <Link class="btn " onClick={currentAddAmount}>Add Amount</Link>
                            <Link class="btn " onClick={currentSubAmount}>Withdraw Amount</Link>
                            <Link class='btn ' onClick={setData('Current')} to={`/mini/${user.id}`}>MiniStatement</Link>
                            <ul className="list-group w-50">
                                <li className="list-group-item">Name : {user.name}</li>
                                <li className="list-group-item">Account No : {user.accno}</li>
                                <li className="list-group-item">Email: {user.email}</li>
                                <li className="list-group-item">Account Type:Current</li>
                                <li className="list-group-item">Mobile : {user.phone}</li>
                                <li className="list-group-item"> AdharNo: {user.AadharNo}</li>
                                <li className="list-group-item">Balance : {user.currentBalance}</li>
                               
                            </ul>
                        </div>


                    )}



            </div>


        </center>
        </div>
    )
}

export default Viewuser;