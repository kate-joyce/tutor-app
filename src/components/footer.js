import styled from 'styled-components'

const Foot = styled.footer`
  background: #211457;
  height: 20vh;

`

function Footer() {
  return (
  <Foot>
    <p className="text-bold">© Tutor Services</p>
    <small className="text-bold">2024</small>
    <hr />
    <ul>
      <li>
        <a href="#home">Back to top <i class="fa-solid fa-angle-up"></i></a>
      </li>
    </ul>
  </Foot>
  );
}

export default Footer;