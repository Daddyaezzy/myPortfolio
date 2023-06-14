import React, { useEffect, useState } from "react";
import "../styles/contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Address = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the server
      const response = await axios.post(
        "https://myportfolio-uote.onrender.com/submit-form",
        {
          email,
          message,
        }
      );

      console.log(response.data);
      // Clear form inputs
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container contact">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-title">
              <span data-aos="fade-right" className="sub-title">
                CONTACT
              </span>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input
                  type="text"
                  placeholder="Your number or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Your message"
                  cols="20"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="8"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
