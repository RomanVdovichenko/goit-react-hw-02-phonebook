import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({
  contactId,
  contactName,
  contactNumber,
  onDeleteContact,
}) => {
  return (
    <li>
      <span className={css.user}>{contactName}:</span>
      <span className={css.contact}>{contactNumber}</span>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
