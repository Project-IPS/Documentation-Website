import React from "react";
import {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiPhoneCall, BiLink} from "react-icons/bi"
import {BsInfoCircle, BsBookmarkHeart} from "react-icons/bs"
import {AiOutlineHome, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin} from "react-icons/ai"
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import axios from "axios";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'

//import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';




export default class App extends React.Component{
  

    constructor(props) {
        super(props);
    
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4=this.toggle4.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.onMouseEnter = this.onMouseEnter.bind(this); 
        // this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
          dropdownOpen1: false,
          dropdownOpen2: false,
          dropdownOpen3: false,
          dropdownOpen4: false,
          testimonial:[],
          value: '',
          blogs:[]
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
      
  
        axios.get("http://127.0.0.1:8000/blogs/")
            // .then((res) => 
            //     res.json())
            .then(res=> {
                
                this.setState({
                    blogs: res.data,
                });
            })
            .catch((err) => {});
    }
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      handleGet(event) {
  
        event.preventDefault();
        let data =event.target.data;
  
        axios.get('http://localhost:8000/api/formData')
        .then(res => {
            
            this.setState({
                value : data   
            });
        })
        .catch(err => {})
    }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);


        axios.post('http://127.0.0.1:8000/api/formData',
        {
            name : this.state.value,
        },
        {
            headers:{
                "Content-Type":"application/json"
            },
        }
        )
        .then(res => {
            this.setState({ name:"" });
        })
        .catch(error => console.err(error))


        // axios({
        //     method: 'post',
        //     url: 'http://127.0.0.1:8000/api/formData',
        //     data: {
        //     'name':this.state.value,
        //     }
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        
        // fetch("http://localhost:8000/api/formData",
        // {
        //   method: "POST",
        //   cache: "no-cache",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(this.state.value),
        // })
        // .then(res => res.json())
        // .catch(error => console.err(error))
        

      }
    
    //   onMouseEnter() {
    //       console.log("pressed");
    //     this.setState({ dropdownOpen: true });
    //   }   
    //   onMouseLeave() {
    //     this.setState({ dropdownOpen: false });
    //   }

    onButtonClick(){
        console.log("pressed");
        window.location.href="http://google.com";
    }
  
        
  
        
  

   render()
   {
    return(
        <div style={{ margin:"10", fontFamily:"Calibri", backgroundColor:"LavenderBlush"}}>
  


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
    
        <br></br>
        <div className="video-container" style={{position:"absolute",zIndex:"0", display:"flex"}}>
            <div style={{marginLeft:350, marginTop:200,padding:30, height:"max-height",zIndex:5, color:"white", borderRadius:"30",backgroundColor:"rgba(255,255,255,0.5)"}}
                id="overlay justify-content-center align-content-stretch">
                <h1 style={{textAlign:"center"}}><em><b>Project IPS,<br></br> Lightstone Technologies
                            Group</b></em></h1>
                <Button  class="btn btn-light " style={{marginLeft:180, align:"center",zIndex:5, backgroundColor:"rgba(255,255,255,0.5)"}} id="overlay justify-content-center align-content-stretch" >
                <Link to="/aboutUs" style={{color:"black", textDecoration:"none"}}>Know more</Link> 

                </Button>
                
                {/* <button id="bt" onClick={this.onButtonClick}>Click</button> */}
                
            </div>
        </div>
        
        <div style={{ zIndex:"0"}}>
            <video autoPlay="1" muted="1" loop="true"
                style={{  zIndex:"0", right: 0, top: 0, minWidth:"100%",objectFit: "cover", height:"500px", overflowY:"hidden"}}>
                <source src="./images/video.mp4" type="video/mp4">
                </source>
            </video>
        </div>
    
        {/* <br></br> */}
        <div style={{ backgroundColor:"rgba(100,0,0,0.5)"}}>
            <hr>
            </hr>
            <div style={{padding:"30 30 30 30",}}>
                <p style={{margin:50, fontFamily:"Calibri", color:"white", fontSize:"200" }}>What is an Indoor Positioning System?<br></br>
                </p>
            </div>
            <hr>
            </hr>
    
        </div>
    
    
        {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name='value' type="text" value={this.state.value} onChange={this.handleChange}  placeholder="Enter your name"/>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    
    
    
    
    
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
                    <Card style={{ width: '25rem', height:'15rem', backgroundColor:"rgba(100,0,0,0.5)" }}>
    
                        <Card.Body style={{scrollbarWidth:"none"}}>
                            <Card.Title style={{color:"white"}}>sample name</Card.Title>
                            <Card.Text style={{color:"white"}}>
                                sample text
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </li>
        
        
                <li className="navbar-item px-1">
                    <Card style={{ width: '25rem', height:'15rem', backgroundColor:"rgba(100,0,0,0.5)" }}>
    
                        <Card.Body style={{scrollbarWidth:"none"}}>
                            <Card.Title style={{color:"white"}}>sample name</Card.Title>
                            <Card.Text style={{color:"white"}}>
                            sample text
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </li>
                <li className="navbar-item px-1" style={{loading:"lazy"}}>
                    <Card style={{ width: '25rem', height:'15rem', backgroundColor:"rgba(100,0,0,0.5)" }}>
    
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
                    <Card style={{ width: '25rem', height:'15rem', backgroundColor:"rgba(100,0,0,0.5)" }}>
    
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
                    <Card style={{ width: '25rem', height:'15rem', backgroundColor:"rgba(100,0,0,0.5)" }}>
    
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

<div>
<nav className="navbar  bg-secondary navbar-expand-sm container-fluid">
            <ul className="navbar-nav">
                <li className="navbar-item px-5"><h3 style={{color:"white"}}>Blogs:</h3> </li>
        {this.state.blogs.slice(0,1).map((content) =>{
            console.log(content);
            return(
                <Card style={{ width: '30rem', height: '22rem' }}>
                <Card.Img variant="top" src="../images/cat1.jpg" style={{height:"10rem", width:"30rem"}} />
                <Card.Body>
                  <Card.Title>{content.title}</Card.Title>
                  <Card.Text>
                  {content.description}
                  <br></br>
                  <br></br>
                  <Button variant="primary"><Link to="/blogs" style={{color:"white", textDecoration:"none"}}>Read more</Link></Button>
                  <br></br>
                  <nav className="navbar  navbar-expand-sm container-fluid">
                  <ul className="navbar-nav ms-auto">
                  <li className="navbar-item px-1"><AiOutlineTwitter size="20" /></li>
                  <li className="navbar-item px-1"><AiOutlineFacebook size="20"/></li>
                  <li className="navbar-item px-1"><AiOutlineLinkedin size="20"/></li>
                  <li className="navbar-item px-1"><BiLink size="20"/></li>
                  <li className="navbar-item px-1"><BsBookmarkHeart size="30"/></li>
                  
                  
                  </ul>
                 
                  </nav>
                  
                  </Card.Text>
                  
                </Card.Body>
              </Card>

            );
        })}
        </ul>
        </nav>
    </div>
    <br></br>
    <div style={{backgroundColor:"white", padding: 20}}>
            <nav  className="navbar  bg-light navbar-expand-sm container-fluid">
                <ul  className="navbar-nav ">
            <li className="navbar-item px-5"><h2>So what are you waiting for?</h2></li>
            <li className="navbar-item" ><br></br><button  type="button" class="btn btn-secondary " style={{marginLeft:180, align:"center", padding:25, fontSize:20, fontFamily:"Verdana"}}><Link to="/contactUs" style={{textDecoration:"none", color:"white"}}>Book a free demo today!</Link></button ></li>
            </ul>
            </nav>

        </div>
                    
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
  
