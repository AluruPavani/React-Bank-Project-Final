import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './App.css';


function CurrentWithBalance() {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        currentBalance:0,
        transaction: []

    });
    const [amount, setAmount] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const res = sessionStorage.getItem('user');
        let user = JSON.parse(res);
        getUser(user.id);
    }, []);

    const getUser = async (id) => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }

    const onSubmit = async e => {
        e.preventDefault();
        let date = new Date;
        let obj= {
            "type": '',
            "accountType": '',
            "dateTime": date,
            "amount":0
        };
        obj.amount = amount;
        if(parseInt(amount) > 0){
            obj.type = "Debit";
        }else {
            obj.type = "Credit";
        }
        obj.accountType = "Current";
        user.transaction.push(obj);
        user.currentBalance = parseInt(user.currentBalance) - parseInt(amount);
        await axios.put(`http://localhost:3000/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount debited successfully');

    }
    const passwordinputvalchange = (e) => {
        setAmount(e.target.value);

    }
    return (
        <div
        style={{
            backgroundImage: `url("https://cdn.hipwallpaper.com/i/3/4/KCu1jQ.jpg")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '550px'
        }}>
        <div>
       <Link class='btn' style={{marginLeft:'1000px'}} to={'/useraxios'} block >Back to Current</Link>
        
           
                <Card className="currentcard" style={{ width: '20rem',backgroundColor:'lightgray',marginLeft:'500px' }}>
                    <Form>
                       <center>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >User ID:<b>{user.name}</b></Form.Label>

                        </Form.Group>
                        <Form.Group controlId="formBasicEBal">
                            <Form.Label>Current Balance: <b>{user.currentBalance}</b></Form.Label>
                        </Form.Group>
                        </center>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ paddingLeft:"10px" }}>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter an amount" onChange={passwordinputvalchange} />
                        </Form.Group>

                        <Button class="btn btn-outline-primary" variant="primary" onClick={onSubmit} block >Submit</Button>
                    </Form>
                </Card>
            
          </div>
        </div>
    )
}


export default CurrentWithBalance;
// import React, { Fragment, useState, useEffect } from 'react';
// import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';

// function CurrentWithBalance() {
//     const [user, setUser] = useState({
//         id: '',
//         name: ' ',
//         username: ' ',
//         email: ' ',
//         phone: ' ',
//         website: ' ',
//         currentBalance: '',
//         transaction: []

//     });
//     const [amount, setAmount] = useState('');

//     const { id } = useParams();
//     useEffect(() => {
//         const res = sessionStorage.getItem('user');
//         let user = JSON.parse(res);
//         getUser(user.id);
//     }, []);

//     const getUser = async (id) => {
//         const res = await axios.get(`http://localhost:3000/users/${id}`);
//         setUser(res.data);
//     }

//     const onSubmit = async e => {
//         e.preventDefault();
//         user.currentbalance = parseInt(user.currentbalance) - parseInt(amount);
//         await axios.put(`http://localhost:3000/users/${user.id}`, user);
//         getUser(user.id);
//         alert('Amount Withdrawn successfully');

//     }
//     const passwordinputvalchange = (e) => {
//         setAmount(e.target.value);

//     }
//     return (
//         <div className='currentadd'>
//             <h3>Account No: {user.account}</h3>
//             <h4>Withdraw Amount</h4>
//            <Card style={{ width: '22rem' }}>
//                 <Card.Body style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C7nF7qzDqlU_kAykRg3KkiNYNgXnPVOQAQ&usqp=CAU")` ,backgroundSize: 'cover'}}>
//                     <Card.Text>
//                     <Form>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label style={{  marginRight: '300px', fontSize: '15px'}}>UserID: {user.name}</Form.Label>
//                             {/* <Form.Control type="email" placeholder="Enter Username" /> */}

//                         </Form.Group>
//                         <Form.Group controlId="formBasicEBal">
//                             <Form.Label style={{  marginRight: '300px', fontSize: '15px' }}>CurrentBalance: {user.currentBalance}</Form.Label>
//                         </Form.Group>
                        
//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label style={{ marginRight: "270px" }}>Amount</Form.Label>
//                             <Form.Control type="number" placeholder="Amount" onChange={passwordinputvalchange} />
//                         </Form.Group>

//                         <Button class="btn btn-outline-primary" variant="primary" onClick={onSubmit} block >Submit</Button>
//                     </Form>
//                     </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <br/>
//                 <Link class='btn btn-outline-primary btnAdd' to={'/useraxios'} block >Back to UserPage</Link>
        
//         </div>
//     )
// }
// export default CurrentWithBalance;