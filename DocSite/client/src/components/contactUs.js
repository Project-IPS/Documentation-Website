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




export default class contactUs extends Component{
  
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
                  firstName: "",
                  lastName: "",
                  email:"",
                  contactNumber:"",
                  companyName:"",
                  companyType:"",
        
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
    
    handleInput = (e) => {
      this.setState({
        //   [e.target.firstName]: e.target.value,
        //   [e.target.lastName]: e.target.value,
        //   [e.target.email]: e.target.value,
        //   [e.target.contactNumber]: e.target.value,
        //   [e.target.companyName]: e.target.value,
        //   [e.target.companyType]: e.target.value,
        [e.target.name]:e.target.value

      });
    }
        
     handleSubmit = (e) => {
      e.preventDefault(); 
      console.log(this.state.firstName); 
      console.log(this.state.lastName); 
      console.log(this.state.email); 
      console.log(this.state.contactNumber); 
      console.log(this.state.companyName); 
      console.log(this.state.companyType);   
      axios
          .post("http://localhost:8000/contactDetails/", {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email:this.state.email,
              contactNumber:this.state.contactNumber,
              companyName:this.state.companyName,
              companyType:this.state.companyType,

          })
          .then((res) => {
              this.setState({
                firstName: "",
                lastName: "",
                email:"",
                contactNumber:"",
                companyName:"",
                companyType:""

              });
          })
          .catch((err) => {});
    };
    
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
                    <Dropdown className="d-inline" // onMouseOver={this.onMouseEnter} //
                        onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                        <DropdownToggle caret>
                            < AiOutlineHome size={30} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                            </DropdownItem>
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
                            <DropdownItem>
                                <Link to="/about" style={{textDecoration:"none"}}>About</Link>
                            </DropdownItem>
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
                            {/* <DropdownItem><a href="" style={{textDecoration:"none"}}>Contact Us</a></DropdownItem>
                            */}
                            <DropdownItem>
                                <Link to="/contactUs" style={{textDecoration:"none"}}>Contact Us</Link>
                            </DropdownItem>


                        </DropdownMenu>
                    </Dropdown>

                </li>
                <li className="navbar-item px-3">

                    <Dropdown className="d-inline ml-auto" // onMouseOver={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen4} toggle={this.toggle4}
                        drop="end">
                        <DropdownToggle caret drop="end">
                            < GiHamburgerMenu size={30} />
                        </DropdownToggle>
                        <DropdownMenu drop="end" className="me-auto">
                            {/* <DropdownItem header>Our Solutions</DropdownItem>
                            <DropdownItem><a href="#" style={{textDecoration:"none"}}>Products</a></DropdownItem>
                            <DropdownItem><a href="#" style={{textDecoration:"none"}}>Request Demo</a></DropdownItem>
                            */}
                            <DropdownItem header>Documentation</DropdownItem>
                            <DropdownItem><Link to="/login"  style={{textDecoration:"none"}}>Documentation</Link></DropdownItem>
                            <DropdownItem header>Blogs</DropdownItem>
                            <DropdownItem>
                                <Link to="/blogs" style={{textDecoration:"none"}}>Blogs</Link>
                            </DropdownItem>
                            <DropdownItem header>Contribute</DropdownItem>
                            <DropdownItem>
                                <Link to="/careers" style={{textDecoration:"none"}}>Careers</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </li>
            </ul>
        </nav>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <form onSubmit={this.handleSubmit}>
        <span className="input-group-text" id="basic-addon1">
            <label style={{paddingLeft:"40px", paddingRight:"20px", paddingTop:"20px", paddingBottom:"20px"}}>
                First Name : {" "}</label>
            {" "}
            <input value={this.state.firstName} name="firstName" onChange={this.handleInput}
                placeholder="   Enter your first name" style={{width:"100%" }} />
        </span>
        <span className="input-group-text" id="basic-addon1">
            <label style={{paddingLeft:"40px", paddingRight:"20px", paddingTop:"20px", paddingBottom:"20px"}}>
                Last Name : {" "}</label>
            {" "}
            <input value={this.state.lastName} onChange={this.handleInput} placeholder="   Enter your last name"
                name="lastName" style={{width:"100%" }} />
        </span>
        <span className="input-group-text" id="basic-addon1">
            <label style={{paddingLeft:"70px", paddingRight:"20px", paddingTop:"20px", paddingBottom:"20px"}}>
                email : {" "}</label>
            {" "}
            <input type="email" value={this.state.email} name="email" onChange={this.handleInput}
                placeholder="   Enter your email" style={{width:"100%" }} />
        </span>
        <span className="input-group-text" id="basic-addon1">
            <label style={{paddingLeft:"0", paddingRight:"20px", paddingTop:"20px", paddingBottom:"20px"}}>
                Contact Number : {" "}</label>
            {" "}
            <input pattern="[1-9]{1}[0-9]{9}" value={this.state.contactNumber} name="contactNumber" onChange={this.handleInput}
                placeholder="   Enter your contact number( without country code)" style={{width:"100%" }} />
        </span>
        <span className="input-group-text" id="basic-addon1">
            <label style={{paddingLeft:"5px", paddingRight:"20px", paddingTop:"20px", paddingBottom:"20px"}}>
                Company Name : {" "}</label>
            {" "}
            <input value={this.state.companyName} name="companyName" onChange={this.handleInput}
                placeholder="   Enter company name" style={{width:"100%" }} />
        </span>
        <span className="input-group-text" id="basic-addon1">
            <label style={{padding:"11px"}}>
                Company Type : {" "}</label>
            {" "}
            <select value={this.state.companyType} onChange={this.handleInput} style={{padding:"10px"}} name="companyType">


                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>

        </span>
        <span className="input-group-text" id="basic-addon1">
            <input type="submit" value="Submit" style={{padding:"10px", width:"30%"}} />
        </span>

    </form>
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
            
        );
    }
}