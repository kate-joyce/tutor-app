import heroScience from '../hero-science.png';

function Head() {
  return (
    <header className="Header-section flex flex-col md:flex-row">
      <div>
        <h1 className="text-3xl">Tutoring Services</h1>
        <p className="my-5 text-justify">Secondary Science Teacher specialising in A level Physics. I can tutor; Biology, Chemistry, Physics and Maths up to GCSE and A level Physics.</p>
        <div className='flex justify-evenly items-center'>
          <button className='cta-1'>Schedule a session</button>
          <a href="#services">Learn more</a>
        </div>
      </div>
      <img src={heroScience} className="logo" alt="logo" />
    </header>
  );
}

export default Head;