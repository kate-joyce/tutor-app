import { useState } from "react";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
    console.log(`isOpen value`, isOpen)
  }

  return (
    <section>
      <h2>Contact Information</h2>
      <div className="flex">
        <button onClick={toggle}>?</button>
        <h4>Get in touch</h4>
      </div>
      {isOpen ?
        <div>
          <p className="text-left">Starting from £35ph, depending on subject, level and whether online or face to face.</p>
        </div>
      :
      <></>
      }
    </section>
  );
}

export default Contact;