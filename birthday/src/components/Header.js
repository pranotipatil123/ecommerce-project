import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import {BsFillCartFill} from "react-icons/bs";
import { CartState } from "./Context";
import Button from "react-bootstrap/esm/Button";
import { Link} from 'react-router-dom';

export default function Header(){
  const{state:{cart},dispatch}=CartState()

return(
<>
<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
  

<Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="m-auto"
                    aria-label="Search"
                    style={{width:500}}
                  />
                   </Form>
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        
      </Dropdown.Toggle>

      <BsFillCartFill/>
      
      <Dropdown.Menu>
        {(cart.length>0)?(<>
       {cart.map((prod)=>(
       <div className="d-flex flex-row justify-content-evenly align-items-centre" style={{width:"18rem"}}>
        <div><img src={prod.image} alt={prod.name} className="img-fluid" height="80" width="80"/></div>
        <div>{prod.name}</div>
        <div>{prod.price}</div>
        <div><i class="fa-solid fa-trash-check" onClick={()=>dispatch({
          type:"removefromcart",
          payload:prod
        })}></i>
        
        </div>
       </div>
       ))}<Link to="/Cart">
       <Button variant="primary">Go To Cart</Button>
     </Link></>)
       :
       
       (<span>Cart Is Empty</span>)}
      </Dropdown.Menu>
    </Dropdown>
    </Container>
</Navbar>
</>

)
}