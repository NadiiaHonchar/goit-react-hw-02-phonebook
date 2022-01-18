import React from "react";
import PropTypes from "prop-types";
import style from "./ElementContacts.module.css";

const ElementContacts = ({ contacts, onDelContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={style.list}>
            {name} : {number}{" "}
          </p>
          <button
            type="submit"
            name="button"
            className={style.button}
            onClick={() => onDelContact(id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </>
  );
};

ElementContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};

export default ElementContacts;
