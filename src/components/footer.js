import styled from 'styled-components'
import React, { useState } from 'react';

const Foot = styled.footer`
  background: #211457;
  height: 20vh;
`

function Footer() {
  const [items] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
  <Foot className="py-6">
    <p className="text-bold">© Tutor Services 2024</p>
    <hr className="my-6" />
    <ul>
      <li>
        <a href="#home">Back to top <i className="fa-solid fa-angle-up"></i></a>
      </li>
    </ul>
    {/* dynamically displaying data - mapping over a stateful array to render in browser  */}
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Foot>
  );
}

export default Footer;