import React from 'react';

function ContactCard() {
  return (
    <div className="contact-card">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <a href="#">Email: youremail@example.com</a>
        </li>
        <li>
          <a href="#">Phone: 555-555-5555</a>
        </li>
        <li>
          <a href="#">GitHub: https://github.com/yourname</a>
        </li>
        <li>
          <a href="#">LinkedIn: https://www.linkedin.com/in/yourname</a>
        </li>
      </ul>
      <a href="#">Download CV</a>
    </div>
  );
}

export default ContactCard;
