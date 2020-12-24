import React from 'react';

const ContactDetail = (props) => {
  const {
    contact,
  } = props;

  return (
    <div>
      <h5>Contact ID: {contact.id}</h5>
      <h5>Name: {contact.first_name + ' ' + contact.last_name}</h5>
      <h5>Country: {contact.country.iso}</h5>
      <h5>Email: {contact.email}</h5>
      <h5>Phone: {contact.phone_number}</h5>
    </div>
  );
};

export default ContactDetail;