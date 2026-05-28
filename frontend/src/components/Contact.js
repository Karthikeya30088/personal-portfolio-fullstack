import { useState } from "react";

import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    message: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(formData);

    try {

      const response = await axios.post(

        "https://personal-portfolio-fullstack-r2s1.onrender.com/contact",

        formData

      );

      alert(response.data);

      setFormData({

        name: "",

        email: "",

        message: ""

      });

    } catch (error) {

      console.log(error);

      alert("Error Sending Message");

    }

  };

  return (

    <section id="contact" className="card">

      <h2>Contact Me</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="btn"
        >
          Send Message
        </button>

      </form>

    </section>

  );

}

export default Contact;
