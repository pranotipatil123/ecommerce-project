  
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

  export default function Filters(){
    return(
        
        <div className="bg-dark text-white" style={{ width: '20rem' }}>
            <h4>Filter Options</h4>
            <Form.Check type="radio" label="Ascending" name="r1" aria-label="radio 1" />
      <Form.Check type="radio" label="Descending" name="r1" aria-label="radio 1" />
      <Form.Check  label="Out Of Stock" aria-label="option 1" />
      <Button variant="light" className="mt-4 mb-5">Clear Filters</Button>{' '}
        </div>
        
    )
  }