import React, { useEffect, useState } from "react";
import { CartState } from "./Context";
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export default function Cart(){
    const{state:{cart},dispatch}=CartState();
    const[total,setTotal]=useState();
    useEffect(()=>{
        setTotal(
            cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0)
        )
    },[cart])
    return(
        <>
        <div className="container mt-5" >
            
      
         {cart.map((prod)=>(
        <ListGroup>
        <ListGroup.Item key={prod.id}>
            <Row>
                <Col md={2}>
                <img src={prod.image} alt={prod.name} className="container" height="100" width="80"/>
                </Col>
                <Col md={2}>
                    {prod.name}
                </Col>
                <Col md={2}>
                    {prod.price}
                </Col>
                <Col md={2}>
                <Form.Select value={prod.qty} onChange={(e)=>dispatch({
                    type:"changeqty",
                    payload:{id:prod.id, qty:e.target.value},
                })}>
                    {[...Array(prod.stock).keys()].map((x)=>(
                        <option key={x}>{x}</option>
                    ))}
                       </Form.Select>
                           </Col>
                          <Col>
                    <i class="fa-solid fa-trash" onClick={()=>dispatch({
                        type:"removefromcart",payload:prod,
                    })}></i>
                </Col>
            </Row>
        </ListGroup.Item>
        
      </ListGroup>
     
      ))}
      </div>
      <div>
<span>Subtotal({cart.length}) items</span>
<h4>Total:{total}</h4>
<Button variant="success" disabled={cart.length==0}>Proceed To Checkout</Button>
      </div>
      
         </>
    )
}