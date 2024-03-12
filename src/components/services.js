function Services() {
  return (
    <section id="services" className="flex flex-col text-left">
      <h2>Services</h2>
      <div className="container flex flex-col grow md:flex-row">
        <div className="grow">
          <h3>Virtual</h3>
          <p>Engaging online sessions tailored to individual student needs.</p> 
        </div>
        <div className="grow">
          <h3>Face to Face</h3>
          <p>Personalized, in-person instruction to support academic growth.</p> 
        </div>   
      </div>  
    </section>
  );
}

export default Services;