import React, {Component} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiPhoneCall} from "react-icons/bi"
import {BsInfoCircle} from "react-icons/bs"
import {AiOutlineHome, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin} from "react-icons/ai"
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import { DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default class App extends Component{
  render()
  {
      
    return(
        

        <div style={{margin:10, fontFamily:"Calibri", backgroundColor:"Thistle"}}>


    <nav className="navbar  navbar-expand-sm container-fluid" style={{backgroundColor:"LavenderBlush",position:"fixed", zIndex:"5"}}>
        <ul className="navbar-nav me-auto">
            <li className="navbar-item px-3"><b>Project IPS</b>, Lightstone Technologies</li>
        </ul>
        <ul className="navbar-nav ms-auto">
            <li className="navbar-item px-3">
                < AiOutlineHome size={30} />
            </li>
            <li className="navbar-item px-3">
            <button  >< BsInfoCircle size={30} /></button>
            </li>
            <li className="navbar-item px-3">
            <button  >< BiPhoneCall size={30} /></button>
            </li>
            <li className="navbar-item px-3">
           
            <div className="dropdown"  >

            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            < GiHamburgerMenu size={30} />
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{position:"fixed", zIndex:"7"}}>
                <ul>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
            

            </div>              
            </li>
        </ul>
    </nav>

    <div className="video-container" style={{position:"absolute",zIndex:"0", display:"flex"}}>


        <div style={{marginLeft:350, marginTop:200,padding:30, height:"max-height",zIndex:5, color:"white", borderRadius:"30",backgroundColor:"rgba(255,255,255,0.5)"}}
            id="overlay justify-content-center align-content-stretch">
            <h1 style={{textAlign:"center"}}><em><b>Project IPS,<br></br> Lightstone Technologies
                        Group</b></em></h1>

            <button type="button" class="btn btn-light " style={{marginLeft:180, align:"center"}}>
                Know more
            </button>

        </div>


    </div>
    <div style={{ zIndex:"0"}}>
        <video autoPlay="1" muted="1" loop="true" 
            style={{  zIndex:"0", right: 0, top: 0, minWidth:"100%",objectFit: "cover", height:"500px", overflowY:"hidden"}}>
            <source src="./images/video.mp4" type="video/mp4">
            </source>
        </video>
    </div>



    



    <br></br>


    <div style={{ backgroundColor:"rgba(100,0,0,0.5)"}}>
        <hr>
        </hr>
        <div style={{padding:"30 30 30 30",}}>
            <p style={{margin:50, fontFamily:"Calibri", color:"white", fontSize:"100" }}>At Project IPS, Lightstone
                Technologies, we aim to blah
                blah </p>
        </div>
        <hr>
        </hr>

    </div>

    <Carousel>
        <Carousel.Item style={{height:"500px"}}>
            <img className="d-block w-100 h-100" height="200" src="./images/cat2.jpg" alt="First slide" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Sample sentence.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"500px"}}>
            <img className="d-block w-100 h-100" height="200" src="./images/cat3.jpg" alt="Second slide" />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Sample sentence</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"500px"}}>
            <img className="d-block w-100 h-100" height="200" src="./images/cat1.jpg" alt="Third slide" />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Sample sentence.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>


    <br></br>

    <h4>What our customers have to say about us:</h4>
    <br></br>
    <nav className="navbar  bg-light navbar-expand-sm container-fluid">
        <ul className="navbar-nav me-auto" style={{ display: "grid",
gridAutoFlow: "column",
overflowX: "auto",
overscrollBehaviorInline: "contain"}}>
            <li className="navbar-item px-1" style={{loading:"lazy"}}>
                <Card style={{ width: '18rem', height:'10rem', backgroundColor:"rgba(100,0,0,0.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>

            <li className="navbar-item px-1">
                <Card style={{ width: '18rem', height:'10rem', backgroundColor:"rgba(100,0,0,0.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
            <li className="navbar-item px-1" style={{loading:"lazy"}}>
                <Card style={{ width: '18rem', height:'10rem', backgroundColor:"rgba(100,0,0,0.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
            <li className="navbar-item px-1" style={{loading:"lazy"}}>
                <Card style={{ width: '18rem', height:'10rem', backgroundColor:"rgba(100,0,0,0.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
            <li className="navbar-item px-1" style={{loading:"lazy"}}>
                <Card style={{ width: '18rem', height:'10rem', backgroundColor:"rgba(100,0,0,0.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
        </ul>
    </nav>
    <br></br>
    <br></br>

    <nav className="navbar  bg-light navbar-expand-sm container-fluid">
        <ul className="navbar-nav">
            <li className="navbar-item px-6">REACH US: </li>
            <li className="navbar-item px-5">Indian Institute of Technology<br></br>IIT Main Gate Area<br></br>Powai,
                Mumbai- 400076<br></br>Maharashtra, India <br></br> <br></br>+(91) 98XXXXXXXX</li>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4119848635537!2d72.91107921393095!3d19.13343525513893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1653554650391!5m2!1sen!2sin"
                width="800" height="200" style={{border:0}} loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </ul>
    </nav>

    <br></br>
    <div style={{height:"200px"}}>

        <nav className="navbar  navbar-expand-sm container-fluid"
            style={{height:"max-height",backgroundColor:"Sienna"}}>




            <ul className="navbar-nav me-auto" style={{color:"white"}}>
                <li className="navbar-item px-5"><br></br>
                    <h3>Position yourself with precision</h3>
                    <br></br><small>Call us at: +(91)98XXXXXXX</small> <br></br> <small>Email us at:
                        info@example.com</small>
                </li>
                <li className="navbar-item px-5"><br></br>QUICK LINKS:<br></br><br></br>Home<br></br>About
                    Us<br></br>Technology<br></br>Careers<br></br>Documentation<br></br>Contact Us</li>
                <li className="navbar-item px-5"><br></br>ADDRESS:<br></br><br></br>Indian Institute of
                    Technology<br></br>IIT Main Gate Area<br></br>Powai, Mumbai- 400076<br></br>Maharashtra, India
                    <br></br> <br></br>+(91) 98XXXXXXXX</li>
                <li className="navbar-item px-5"><br></br>SOCIAL:<br></br><br></br>
                    <AiOutlineFacebook size={30} />
                    <AiOutlineTwitter size={30} />
                    <AiOutlineLinkedin size={30} />
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>Copyright@2022</li>
            </ul>
        </nav>
    </div>



</div>
    )
  }
  
}