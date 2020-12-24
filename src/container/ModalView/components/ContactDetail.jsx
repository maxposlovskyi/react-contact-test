import React from 'react';

const ContactDetail = (props) => {
  const {
    contact,
  } = props;
  const { id, first_name, last_name, country, email, phone_number } = contact;

  return (
    <div>
      <div className="mb-3">
        <div className="contact-label">Contact ID:</div>
        <div className="contact-information">{id}</div>
      </div>
      {(first_name || last_name) && (
        <div className="mb-3">
          <div className="contact-label">Name:</div>
          <div className="contact-information">{first_name + ' ' + last_name}</div>
        </div>
      )}
      {country.iso && (
        <div className="mb-3">
          <div className="contact-label">Country:</div>
          <div className="contact-information">{country.iso}</div>
        </div>
      )}
      {email && (
        <div className="mb-3">
          <div className="contact-label">Email:</div>
          <div className="contact-information">{email}</div>
        </div>
      )}
      {phone_number && (
        <div className="mb-3">
          <div className="contact-label">Phone:</div>
          <div className="contact-information">{phone_number}</div>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;