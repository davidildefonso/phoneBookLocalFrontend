import React,{useState} from 'react';
import Button from './button.js';
import Input from './input.js';


const Form=({handleSubmit,nameInputValue,
  phoneInputValue,
  handleContactNameChange,
  handleContactPhoneChange
  
 })=>{
  return (
    <form onSubmit={handleSubmit}>

      <Input value={nameInputValue}
        onChange={handleContactNameChange}></Input>

      <Input value={phoneInputValue}
        onChange={handleContactPhoneChange}></Input> 

      <Button type="submit" text="Save"></Button>

    </form>
  )
}

export default Form;