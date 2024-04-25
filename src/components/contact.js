import { useState } from "react";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <section>
      <h2>Contact Information</h2>
      <div className="flex">
        <button onClick={toggle}><i className={!isOpen ? 'fa-solid fa-circle-chevron-right': 'fa-solid fa-circle-chevron-down'}></i></button>
        <h4 className="ml-2">Get in touch</h4>
      </div>
      {isOpen ?
        <div>
          <p className="text-left mt-2 ml-6">Starting from £35ph, depending on subject, level and whether online or face to face.</p>
        </div>
      :
      <></>
      }
    </section>
  );
}

export default Contact;