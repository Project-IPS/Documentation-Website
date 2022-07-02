import React, {Component} from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Helmet} from "react-helmet";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import 'firebase/compat/auth';
import './firebaseui-styling.global.css';
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




export default class login extends Component{
  
    
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

              
              
            
            
            // ui.start('#firebaseui-auth-container', uiConfig);
            render()
            {

              const firebaseConfig = {
                apiKey: "AIzaSyAkYsJCvcD87E81yyn_eM1Y1eB8jpa2pIc",
                authDomain: "projectips.firebaseapp.com",
                projectId: "projectips",
                storageBucket: "projectips.appspot.com",
                messagingSenderId: "1043259976781",
                appId: "1:1043259976781:web:33f82027685f94403f8004",
                measurementId: "G-F310TSVE52"
              };
              firebase.initializeApp(firebaseConfig);
              // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    
               
    
    
              var uiConfig = {
                // callbacks: {
                //   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                //     // User successfully signed in.
                //     // Return type determines whether we continue the redirect automatically
                //     // or whether we leave that to developer to handle.
                //     return true;
                //   },
                //   uiShown: function() {
                //     // The widget is rendered.
                //     // Hide the loader.
                //     //document.getElementById('loader').style.display = 'none';
                //   }
                // },
                // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
                signInFlow: 'popup',
                signInSuccessUrl: 'documentation',
                
                signInOptions: [
                  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
                //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
                //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
                ],
                
                
              };
    
    
        

return(
    <div style={{ margin:"10", fontFamily:"Calibri", backgroundColor:"Thistle"}}>



<div>
<nav className="navbar  navbar-expand-sm container-fluid"
    style={{backgroundColor:"LavenderBlush",position:"fixed", zIndex:"5"}}>
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
        
      
        
        

        

            <div style={{padding:"100px"}}>
               
                
                
            <h1 style={{padding:"100", margin:"200"}}>Welcome to the whitepapers</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

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

  