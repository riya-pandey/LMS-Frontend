import { Component } from "react"

import { Nav,  Navbar, Form, Button } from 'react-bootstrap';
import { FaEnvelopeOpenText,  FaShareSquare,  FaPlusCircle, FaRegEye, FaUserCog } from 'react-icons/fa'

const id  = localStorage.getItem('id')

class Header extends Component {
  
 
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('id')
    localStorage.removeItem('fullname')
    localStorage.removeItem('userdetails')
    window.location.href = '/'
  }
  render() {
    {
    if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
      var menu =

           <Navbar.Collapse id="basic-navbar-nav">
                     <Navbar.Brand href="/dashboard">
                     <div className="row "><  img style={{height:"80px",width:"120px"} }src="/images/use.png" className="d-inline-block align-top" alt="logo" /><h3 style={{color:"#7A4988",marginTop:"20px",marginLeft:"20px"}}>LearnMe</h3>  </div> 

        </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/addproduct"><FaPlusCircle/> Add module</Nav.Link>
      <Nav.Link href="/viewproduct"><FaRegEye/> View module</Nav.Link>

    </Nav>
    <Form inline>
    <Nav.Link href="/subscribers"><FaEnvelopeOpenText/> Subscribers</Nav.Link>
  
    <Nav.Link href="/userdetails"><FaUserCog/> Users</Nav.Link>
      <Button Link to="/logout" className="btn btn-primary" onClick={this.logout}><FaShareSquare/> Sign out</Button>
    
    </Form>
    
  </Navbar.Collapse>
          
         



    }
    else if (localStorage.getItem('token')  && localStorage.getItem('userType') === 'Customer')  {
       menu =

        
      <div></div>
    }
    else
    {
       menu=
       
       <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/">
       <div className="row "><  img style={{height:"80px",width:"120px"} }src="/images/use.png" className="d-inline-block align-top" alt="logo" /><h3 style={{color:"#7A4988",marginTop:"20px",marginLeft:"20px"}}>LearnMe</h3>  </div> 

        </Navbar.Brand>
     
       <Nav className="mr-auto">
      
         
       </Nav>
       <Form inline>
       <Button href="/login" className="btn btn-primary">Sign in</Button>
       </Form>
      
     </Navbar.Collapse>


    }


    }
    return (



     
        <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
  

          {menu}
         
         
       
      </Navbar>

    )
  }
}
export default Header;