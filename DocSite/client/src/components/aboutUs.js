import React, {Component} from "react";
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiPhoneCall} from "react-icons/bi"
import {BsInfoCircle} from "react-icons/bs"
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import {AiOutlineHome, AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin} from "react-icons/ai"
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <h1>
        <FaQuoteLeft></FaQuoteLeft><br></br>
        <div style={{padding:20}}>At Project IPS, our aim is to blah blah blah blah <br></br></div>
        <FaQuoteRight />
    </h1>

    <div class="card mb-3" style={{maxWidth: "100%"}}>
        <div class="row no-gutters">
            <div class="col-md-4">
                {/* <img src="#" class="card-img" alt="hi" /> */}
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Lightstone Technologies Group</h5>
                    <p class="card-text">Headquartered in XYZ, we are a group of .......</p>
                    <p class="card-text"><small class="text-muted">more sample text<br></br>more sample text</small></p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3>Meet our team members:</h3>
    <div style={{padding:10}}>   
    <div
      className="card-business"
      style={{
        background: "#fff",
        width: "100mm",
        height: "50mm",
        borderRadius: "5px",
        boxShadow: "#9E9E9E 0px 0px 10px"}}>
      <div
        style={{
        background: "grey",
          height: "15mm",
          padding: 10,
          paddingTop: 15,
          paddingLeft: 20,
          position: "relative",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        
        }}
      >
        <img src="DocSite/client/public/images/cat3.jpg"
          width="60mm"
          height="60mm"
          alt="photo"
          style={{
            position: "absolute",
            right: 15,
            top: 5,
            borderRadius: "100%",
            float: "right",
            background: "#fff"
          }}
        
        />
        
        <h1
          style={{
            fontSize: "17pt",
            margin: 0,
            marginRight: -50,
            
          }}
        >
          {/* {people.displayName} */}
          Sample Name
        </h1>
        {/* {people.tagline && ( */}
          <p
            style={{
              margin: 0,
              fontSize: "10pt",
              marginRight: -50,
              color: "#ccc"
            }}
          >
            {/* <span>{people.tagline}</span> */}
          </p>
        {/* ) } */}
      </div>
      <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
        <img
          alt="qr-code"
          style={{
            position: "absolute",
            right: 15,
            top: 10,
            float: "right"
          }}
          src="#"
        />
        <ul
          style={{
            fontSize: "10pt",
            listStyle: "none",
            lineHeight: "15pt",
            margin: 0,
            padding: 0
          }}
        >
            <li>

            </li>
          {/* {people.title && ( */}
            <li>
              <AiOutlineFacebook/> Btech at IIT Bombay
            </li>
          {/* )} */}
          {/* {people.phone && ( */}
            <li>
              <AiOutlineLinkedin/>
            </li>
          {/* )} */}
          {/* {people.mail && ( */}
            <li>
              <AiOutlineTwitter/>
            </li>
          {/* )} */}
          {/* {people.socials && people.socials.length > 0 && ( */}
            <li>
              {/* <Share />{" "}
              {people.socials.map(([type, text]) => (
                <span style={{ marginRight: 5 }}>{text}</span>
              ))} */}
              <AiOutlineMail/>
            </li>
          {/* )} */}
          {/* {people.location && ( */}
            <li>
              {/* <MapMarker2 /> {people.location} */}
              
            </li>
          {/* )} */}
        </ul>
      </div>
    </div>
  {/* ); */}
{/* } */}

{/* function App() {
  const list = [
    {
      avatar: "/avatar.png",
      qr: "/qr.png",
      displayName: "Elon Musk",
      tagline: "Entrepreneur",
      title: "CEO Boring Company",
      phone: "+123-456-789",
      mail: "m@spacex.com",
      location: "United State , Califonia",
      socials: [["twitter", "@elonmusk"], ["linkedin", "/in/elonmusk"]]
    }
    {
      avatar: "/avatar.png",
      qr: "/qr.png",
      displayName: "Bill Gates",
      tagline: "Entrepreneur",
      title: "CEO Gate Foudation",
      phone: "+123-456-789",
      mail: "bill@microsoft.com",
      location: "United State , Califonia",
      socials: [["twitter", "@billgates"], ["linkedin", "/in/billgates"]]
    }
  ];
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ul style={{ listStyle: "none" }}>
        {list.map(it => (
          <li style={{ margin: 30 }}>
            <BusinessCard people={it} />
          </li>
        ))}
      </ul>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
        .card-business * {
          font-family:  'Quicksand',sans-serif;
        }
     `}
      </style>
    </div>
  );
} */}

</div>
<h3>Our Technology</h3>
<br></br><br></br>
    </div>
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