import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartState } from "./Context";

export default function Singleproduct({prod}){

  const{state:{cart},dispatch}=CartState();
  return(
    <>
     <Card style={{ width: '18rem' }}>
      <img src={prod.image} alt=''/>
      <Card.Body key={prod.id}>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          
        <p>  {prod.desc}</p>
        <h5>${prod.price}</h5>
      
        </Card.Text>
        {cart.some((p)=>p.id==prod.id)?(
        <Button variant="danger" onClick={()=>dispatch({type:"removefromcart",
      payload:prod})}>Remove</Button>):
      
       ( <Button variant="primary" 
       onClick={()=>dispatch({type:"addtocart",
      payload:prod})}
       
       className="m-3" disabled={!prod.stock}>{!prod.stock?"Out of Stock " :"Add to Cart"}
        </Button>)}
      </Card.Body>
    </Card>
    </>
  )
}