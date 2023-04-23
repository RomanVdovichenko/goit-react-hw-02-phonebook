import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <ul>
      {!contact.length ? (
        <p>
          <b>No contacts</b>
        </p>
      ) : (
        contact.map(({ id, name, number }) => (
          <li key={id}>
            <span className={css.user}>{name}:</span>
            <span className={css.contact}>{number}</span>
            <button
              className={css.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
