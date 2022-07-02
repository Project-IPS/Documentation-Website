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
import Sidebar from './Sidebar_new.js'
import styled from 'styled-components'




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
        const SidebarItems = [
            {
                name: "PROJECT_IPS_DOCS",
                route: '/',
                background: "#FFEBCD"
            },
            {
                name: "Algorithms Overview",
                route: '/documentation/algorithms',
                background: "#FF7F50"
            },
            {
                name: "Android Overview",
                route: '/documentation/android',
                background: "#FFEBCD"
            },
            {
                name: "C++ Overview",
                route: '/documentation/cpp',
                background: "#FFEBCD"
            },
            
        ];
        const SidebarParent = styled.div`
   background: #FFEBCD;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
    
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  margin: 4px 12px;
  border-radius: 4px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
    background: #FF7F50;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

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


    <div style={{display:"flex"}}>
    <SidebarParent>
                <div style={{position: 'fixed'}}>
                    {
                        SidebarItems.map((item, index)=> {
                          const bgcolor= item.background;
                            return (
                                <div  style={{ backgroundColor: bgcolor }}>
                                <Link to={item.route} >
                                     <SidebarItem 
                                    key={item.name}  >
                                        <div style={{ backgroundColor: `"{item.background}"` }} >
                                        {item.name}
                                        </div>
                                    </SidebarItem>
                                 </Link>
                                 </div>
                            );
                        })
                    }

                </div>
                <div className="behind-the-scenes"/>
            </SidebarParent>
    </div>


    </div>
        );

}
}