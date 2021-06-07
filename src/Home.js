import { Card,Carousel, Alert, Container, Row, Col, Jumbotron, Button, Dropdown } from 'react-bootstrap';
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      {/* <Card>
        <Card.Img className="homeimg" variant="top" src="https://nmgprod.s3.amazonaws.com/media/files/61/ec/61ec17e3f18408c70a77798299cd3c81/cover_image_1583512897.jpg.760x400_q85_crop_upscale.jpg" />
      </Card> */}
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-A7ViewDIlAfK_gYPQzE8jVqpmE61afyUBu4B4sUTwxzpFoAvF3lOh0sBm-flRNMPg&usqp=CAU"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.bank-abc.com/Home%20Page%20Slider/Digital-Banking.png"
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bank-abc.com/Home%20Page%20Slider/02-en.png"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5XPikrH9F4llH5VNPAoFoKavu4tfY5atjg&usqp=CAU"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bank-abc.com/En/AboutABC/Media/Press/PublishingImages/PR/2q2019/FS-En-Banner.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bank-abc.com/Home%20Page%20Slider/Pandemic-Fund.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

      {/* <Alert variant="info">By clicking on "Login" button, you agree to the Terms of Service (Terms & Conditions) of usage of Banking of ABC.</Alert> */}
      <hr />
      <Container>
        <Row>
          <Col><Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48Fl33hCZ0JfUIq8YOs98-EJkiaRVQdNfoA&usqp=CAU"/>
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Loans
  </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Personal Loan</Dropdown.Item>
                  <Dropdown.Item >Home Loan</Dropdown.Item>
                  <Dropdown.Item>Vehicle Loan</Dropdown.Item>
                  <Dropdown.Item>Education Loan</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card></Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Digital Banking
  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item>Internet Banking</Dropdown.Item>
                  <Dropdown.Item >Self Banking</Dropdown.Item>
                  <Dropdown.Item>Mobile Banking</Dropdown.Item>
                  <Dropdown.Item>ATM Banking</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          </Col>
          <Col> <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://indianmoney.com/images/fixed-deposit.jpg"/>
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Deposit
  </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item>Salary Account</Dropdown.Item>
                  <Dropdown.Item >Demat Account</Dropdown.Item>
                  <Dropdown.Item>Saving Account</Dropdown.Item>
                  <Dropdown.Item>Fixed Deposit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card></Col>

        </Row>

      </Container><br></br>
      <Container>

        <Row>

          <Col>
            <Card style={{ width: '19rem' ,backgroundColor:"lightblue"}}>
              <Card.Body>
                <Card.Title><Alert variant="secondary"> <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSDQTDraTvpUB2bsbFW1rDdH51ARR7TcNTA&usqp=CAU"
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />ALWAYS</Alert></Card.Title>
                <Card.Text>
                  Change your passwords<br />periodically
                                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '19rem' ,backgroundColor:"lightblue"}}>
              <Card.Body>
                <Card.Title><Alert variant="secondary"> <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSDQTDraTvpUB2bsbFW1rDdH51ARR7TcNTA&usqp=CAU"
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />EVER</Alert></Card.Title>
                <Card.Text>
                  Respond to any communication<br />seeking your passwords
    </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '19rem',backgroundColor:"lightblue" }}>
              <Card.Body>
                <Card.Title><Alert variant="secondary"> <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSDQTDraTvpUB2bsbFW1rDdH51ARR7TcNTA&usqp=CAU"
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />NEVER EVER</Alert></Card.Title>
                <Card.Text>
                  Reveal your passwords <br />or card details to anyone
    </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <hr />
      <Alert variant="light" className="alert1"><center><h4 style={{ color: "teal" }}>FOR YOUR OWN SECURITY</h4></center></Alert>
      <Container>
        <Row>
          <Col>
            <Alert variant="secondary">Please ensure the following before logging into OnlineABC</Alert>
            <ul>
              <li>The URL in your browser address bar begins with "https".The address or status bar displays the padlock symbol.</li>
              <li>Click the padlock to view and verify the security certificate.The address bar turns green indicating that the site is secured with an SSL Certificate that meets the Extended Validation Standard.</li>
            </ul>
          </Col>
          <Col>
            <Alert variant="secondary">Beware of Phishing attacks</Alert>
            <ul>
              <li>Phishing is a fraudulent attempt, usually made through email, phone calls, SMS etc seeking your personal and confidential information.</li>
              <li>ABC Bank or any of its representative never sends you email/SMS or calls you over phone to get your personal information,password or one time SMS (high security) password.</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      <Jumbotron style={{ backgroundColor: 'skyblue' }}>
        <Row>
          <Col>
            <h5>About Us</h5>
            <ul>
              <li>
                Overview</li>
              <li>Other Stakeholders' Information</li>
              <li>Investor Relations</li>
              <li>News Room</li>
              <li>Corporate Governance</li>
              <li>Careers</li>
              <li>CSR</li>
              <li>Regulatory Disclosu</li>

            </ul>
          </Col>
          <Col>
            <h5>Resources</h5>
            <ul>
              <li>We Care For You</li>
              <li>Rates</li>
              <li>Glossary</li>
              <li>Watch Videos</li>
              <li>Learning Centre</li>
              <li>Important Notices</li>
              <li>Forms Centre</li>
              <li> Fees & Charges</li>
              <li>Online Service</li>
            </ul>
          </Col>
          <Col>
            <h5>Calculations</h5>
            <ul>
              <li>Personal Loan EMI Calculator</li>
              <li>Car Loan EMI Calculator</li>
              <li>Two Wheeler EMI Calculator</li>
              <li>Recurring Deposit Calculator</li>
              <li>Fixed Deposit Calculator</li>
            </ul>
          </Col>
          <Col>
            <h5>Need Help</h5>
            <ul>
              <li>FAQs</li>
              <li>Customer Care</li>
              <li>Contact Us</li>
              <li>Use Of Unparliamentary Language By Customers</li>
              <li>Active Channel Partners</li>
              <li>DNC Dedupe</li>
              <li> Locate Us</li>
              <li>Do-Not-Call-Regist</li>
            </ul></Col>
          <Col>
            <h5>Connect</h5>
            <ul>
              <li>
                <img
                  alt="user"
                  src="https://th.bing.com/th/id/Rf8d945f7e943938cc287e25303825a88?rik=CRIwDEexRHLbew&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fofficial-facebook-icon-png-4.png&ehk=TeN6WlGE91iCxKHC5FtOYZU52YqSr3cwzNle1iACbXM%3d&risl=&pid=ImgRaw"
                  width="30"
                  height="20"
                  className="d-inline-block align-top"
                />Facebook</li>
              <li><img
                alt="user"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_(2013-2017).svg/512px-YouTube_play_button_square_(2013-2017).svg.png"
                width="30"
                height="20"
                className="d-inline-block align-top"
              />YouTube</li>
              <li><img
                alt="user"
                src="https://tse4.mm.bing.net/th/id/OIP.4F21mhsSQSqVbAtH6DBalQAAAA?pid=ImgDet&rs=1"
                width="30"
                height="20"
                className="d-inline-block align-top"
              />Twitter</li>
              <li><img
                alt="user"
                src="https://www.quest.nhs.uk/wp-content/themes/haelo-quest/images/linkedin-icon-rollover.png"
                width="30"
                height="20"
                className="d-inline-block align-top"
              />Linkedin</li>
              <li><img
                alt="user"
                src="https://www.lawforgood.org.uk/wp-content/uploads/2017/09/Email-Icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />Email:<br />ABCRetailBanking@abc.com</li>
            </ul>
          </Col>
        </Row>

      </Jumbotron>

    </div>
  )

}

export default Home;