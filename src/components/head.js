import heroScience from '../hero-science.png';

function Head() {
  return (
    <header className="Header-section flex flex-col md:flex-row">
      <section>
        <h1 className="text-3xl">Tutoring Services</h1>
        <p className="my-5 text-justify">Secondary Science Teacher specialising in A level Physics. I can tutor; Biology, Chemistry, Physics and Maths up to GCSE and A level Physics.</p>
        <div className='justify-between'>
          <button className='cta-1'>Schedule a session</button>
          <a href="#services">Learn more</a>
        </div>
      </section>
      <img src={heroScience} className="logo" alt="logo" />
    </header>
  );
}

export default Head;