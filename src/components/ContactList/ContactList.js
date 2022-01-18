import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import ElementContacts from "../ElementContacts";

const ContactList = ({ contacts, onDelContact }) => {
  return (
    <ul className={style.ulStyle}>
      <ElementContacts contacts={contacts} onDelContact={onDelContact} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};

export default ContactList;
