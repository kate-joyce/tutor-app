import heroScience from '../hero-science.png';
import styled from 'styled-components'

const Cta = styled.a`
    background: linear-gradient(135deg, #4400FF 10%, #BE28EE 90%);
    padding: 9px;
    border-radius: 1em;
    color: white;
    font-weight: bold;
`

function Head() {
  return (
    <header className="Header-section flex flex-col h-lvh lg:flex-row p-6">
      <div>
        <h1>Tutoring Services</h1>
        <p className="my-4 text-justify">Secondary Science Teacher specialising in A level Physics. I can tutor; Biology, Chemistry, Physics and Maths up to GCSE and A level Physics.</p>
        <div className='flex justify-evenly items-center'>
          <Cta href="mailto:someone@example.com" className='cta-1'>Schedule a session</Cta>
          <a href="#services">Learn more</a>
        </div>
      </div>
      <img src={heroScience} className="logo mt-4" alt="logo" />
    </header>
  );
}

export default Head;