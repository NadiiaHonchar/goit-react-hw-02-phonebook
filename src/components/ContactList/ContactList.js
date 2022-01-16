import React from "react";
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({contacts, onDelContact}) =>{
    return(
        <>
        <ul className={style.ulStyle}>
        {contacts.map(({id, name, number})=>
            <li  key= {id}>
            <p className={style.list}>{name} : {number} </p> 
            <button type="submit" name="button" className={style.button} onClick={()=>onDelContact(id)}>Delete contact</button>
            </li>)}
        </ul>        
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired, 
    onDelContact: PropTypes.func.isRequired,
  };

export default ContactList;