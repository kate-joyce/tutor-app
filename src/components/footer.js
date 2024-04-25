import styled from 'styled-components'

const Foot = styled.footer`
  background: #211457;
  height: 20vh;
`

function Footer() {
  return (
  <Foot className="py-6">
    <p className="text-bold">© Tutor Services 2024</p>
    <hr className="my-6" />
    <ul>
      <li>
        <a href="#home">Back to top <i className="fa-solid fa-angle-up"></i></a>
      </li>
    </ul>
  </Foot>
  );
}

export default Footer;