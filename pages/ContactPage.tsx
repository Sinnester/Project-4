import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <h2 className="title">Contact Us</h2>
      <p className="description">
        We would love to hear from you! If you have any questions, feedback, or
        special requests, please don't hesitate to get in touch with us. Our
        friendly staff will be happy to assist you.
      </p>
      <div className="contactDetails">
        <p className="detailItem">
          <span className="detailLabel">Phone:</span> +1 123-456-7890
        </p>
        <p className="detailItem">
          <span className="detailLabel">Email:</span> info@bakery.com
        </p>
        <p className="detailItem">
          <span className="detailLabel">Address:</span> 123 Bakery Street, City,
          Country
        </p>
      </div>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
