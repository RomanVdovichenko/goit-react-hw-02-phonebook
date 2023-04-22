import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <ul>
      {!contact.length ? (
        <p>
          <b>Not contacts</b>
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
