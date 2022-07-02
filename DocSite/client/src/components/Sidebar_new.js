import React, {Component} from "react";
import styled from 'styled-components'
 
import "./Sidebar.css"


import {Link, renderMatches} from "react-router-dom";




// function Sidebar(props, {defaultActive,}) {
//     console.log(props);
    // const location = props.history.location;
    // const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    // const lastActiveIndex = Number(lastActiveIndexString);
    // const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    // function changeActiveIndex(newIndex) {
    //     localStorage.setItem("lastActiveIndex", newIndex)
    //     setActiveIndex(newIndex)
    // }

    // function getPath(path) {
    //     if (path.charAt(0) !== "/") {
    //         return  "/" + path;
    //     }
    //     return path;
    // }

    // useEffect(()=> {
    //     const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
    //     changeActiveIndex(activeItem);
   
    
    export default class Sidebar_new extends Component {
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
                    background: "#FFEBCD"
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
  background: ${props => props.active ? "#b15b00" : ""};
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


            
    


    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed'}}>
                    {
                        SidebarItems.map((item, index)=> {
                            return (
                                <div>
                                <Link to={item.route}>
                                     <SidebarItem 
                                    key={item.name}  >
                                        <div style={{ backgroundColor: `{item.background}` }} >
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
        </>
    );
}


    }

