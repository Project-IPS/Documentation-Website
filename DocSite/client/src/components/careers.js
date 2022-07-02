import React, {Component} from "react";
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiLocationPlus, BiPhoneCall} from "react-icons/bi"
import {BsInfoCircle, BsBookmark} from "react-icons/bs"
import {FaLocationArrow, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import {AiOutlineHome, AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin} from "react-icons/ai"
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import {GrLocation} from "react-icons/gr"
import {BiTimeFive} from "react-icons/bi"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import axios from "axios";
import {Link} from "react-router-dom";




export default class aboutUs extends Component{
  
    constructor(props) {
                super(props);
            
                this.toggle1 = this.toggle1.bind(this);
                this.toggle2 = this.toggle2.bind(this);
                this.toggle3 = this.toggle3.bind(this);
                this.toggle4 = this.toggle4.bind(this);
                // this.handleChange = this.handleChange.bind(this);
                // this.handleSubmit = this.handleSubmit.bind(this);
                // this.onMouseEnter = this.onMouseEnter.bind(this); 
                // this.onMouseLeave = this.onMouseLeave.bind(this);
                this.state = {
                  dropdownOpen1: false,
                  dropdownOpen2: false,
                  dropdownOpen3: false,
                  dropdownOpen4: false,
                  careers:[]
        
                };
              }
              toggle1() {
                        this.setState(prevState => ({
                          dropdownOpen1: !prevState.dropdownOpen1,
                          
                        }));
                      }
                      toggle2() {
                        this.setState(prevState => ({
                          dropdownOpen2: !prevState.dropdownOpen2
                        }));
                      }   
                      toggle3() {
                        this.setState(prevState => ({
                          dropdownOpen3: !prevState.dropdownOpen3
                        }));
                      }   
                      toggle4() {
                        this.setState(prevState => ({
                          dropdownOpen4: !prevState.dropdownOpen4
                        }));
                      }
                      componentDidMount() {
      
  
                        axios.get("http://127.0.0.1:8000/careers/")
                            // .then((res) => 
                            //     res.json())
                            .then(res=> {
                                
                                this.setState({
                                    careers: res.data,
                                });
                            })
                            .catch((err) => {});
                    }
    
    render()
    {
        return(
            <div style={{ margin:"10", fontFamily:"Calibri", backgroundColor:"LavenderBlush"}}>



    <div>
    <nav className="navbar  navbar-expand-sm container-fluid"
            style={{backgroundColor:"#FFE4E1",position:"fixed", zIndex:"5"}}>
            <ul className="navbar-nav me-auto">
                <li className="navbar-item px-3"><b>Project IPS</b>, Lightstone Technologies</li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="navbar-item px-3">
                    <Dropdown className="d-inline" // onMouseOver={this.onMouseEnter} // onMouseLeave={this.onMouseLeave}
                        isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                        <DropdownToggle caret>
                            < AiOutlineHome size={30} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem ><Link to="/" style={{textDecoration:"none"}}>Home</Link></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li>
                <li className="navbar-item px-3">
                    <Dropdown className="d-inline" // onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                        isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                        <DropdownToggle caret>
                            < BsInfoCircle size={30} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem ><Link to="/about" style={{textDecoration:"none"}}>About</Link></DropdownItem>
                            {/* <DropdownItem><a href="#" style={{textDecoration:"none"}}>The Company</a></DropdownItem>
                            <DropdownItem><a href="#" style={{textDecoration:"none"}}>Team</a></DropdownItem> */}
                        </DropdownMenu>
                    </Dropdown>
    
                </li>
                <li className="navbar-item px-3">
                    <Dropdown className="d-inline" // onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                        isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                        <DropdownToggle caret>
                            < BiPhoneCall size={30} />
                        </DropdownToggle>
                        <DropdownMenu>
                            {/* <DropdownItem ><a href="" style={{textDecoration:"none"}}>Contact Us</a></DropdownItem> */}
                            <DropdownItem ><Link to="/contactUs" style={{textDecoration:"none"}}>Contact Us</Link></DropdownItem>
                            
                            
                        </DropdownMenu>
                    </Dropdown>
    
                </li>
                <li className="navbar-item px-3">
                    
                    <Dropdown className="d-inline ml-auto" // onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                        isOpen={this.state.dropdownOpen4} toggle={this.toggle4} drop="end">
                        <DropdownToggle caret drop="end">
                            < GiHamburgerMenu size={30} />
                        </DropdownToggle>
                        <DropdownMenu drop="end" className="me-auto">
                            {/* <DropdownItem header>Our Solutions</DropdownItem>
                            <DropdownItem><a href="#" style={{textDecoration:"none"}}>Products</a></DropdownItem>
                            <DropdownItem ><a href="#" style={{textDecoration:"none"}}>Request Demo</a></DropdownItem> */}
                            <DropdownItem header>Documentation</DropdownItem>
                            <DropdownItem ><Link to="/login"  style={{textDecoration:"none"}}>Documentation</Link></DropdownItem>
                            <DropdownItem header>Blogs</DropdownItem>
                            <DropdownItem ><Link to="/blogs" style={{textDecoration:"none"}}>Blogs</Link></DropdownItem>
                            <DropdownItem header>Contribute</DropdownItem>
                            <DropdownItem ><Link to="/careers" style={{textDecoration:"none"}}>Careers</Link></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                </li>
            </ul>
        </nav>
    </div>
    <div style={{padding:20}}>
        <br></br><br></br><br></br>
        <h1><Link to="/about" style={{textDecoration:"none"}}>why project ips</Link></h1>
        <p>Sample paragraph text</p>
    </div>
    <div style={{padding:30}}>
    {this.state.careers.map((content) =>{
            return(
     
    <Card style={{ width: '75%', }}>
  <Card.Body>

  
    
<Card.Title>{content.positionName} </Card.Title>
            
{/* <div className="me-auto" style={{align:"right"}}><BsBookmark className="me-auto" style={{align:"right"}}/></div> */}
        


    
    <Card.Subtitle className="mb-2 text-muted">{content.techstack}</Card.Subtitle>
    <nav className="navbar  navbar-expand-sm container-fluid">
    <Card.Text>
        <ul className="navbar-nav me-auto">
            <li className="navbar-item px-3"><GrLocation/> {content.location}</li>
            <li className="navbar-item px-3"><BiTimeFive/> {content.duration}</li>
        </ul>
        <br></br>
        <h6>Qualification</h6>
        <ul>
            <li>{content.qualification1}</li>
            <li>{content.qualification2}</li>
        </ul>
      
    </Card.Text>
    </nav>
    
    <Card.Link href="#">Read more</Card.Link>
  </Card.Body>
</Card>

);
})}
</div>
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
        );
    }
}