import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .sendForm(
        "service_7vzjejp",
        "template_4ugpe29",
        form.current,
        "iysjws0MNMB5d17JM",
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Thank you for reaching out! I will contact you as soon as I receive your message."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );

    //clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      id="contact"
      className="h-screen py-8 lg:pt-24 px-4 mx-auto max-w-screen-sm"
    >
      <h2 className="my-4 text-2xl tracking-tight text-center ">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            onChange={(event) => setName(event.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your email address"
            onChange={(event) => setEmail(event.target.value)}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 "
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Curious or Committed? Drop me a message!"
            onChange={(event) => setMessage(event.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>
      <div className="flex items-center justify-evenly text-4xl pt-5">
        <a
          href="https://www.facebook.com/profile.php?id=61552441323706"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 bg-white mx-2 hover:ring-4 rounded "
          title="facebook"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://maps.app.goo.gl/hESEYSKd2zvz9pbeA"
          target="_blank"
          rel="noopener noreferrer"
          title="Location"
          className="flex hover:text-blue-400 p-1 font-sans text-sm md:text-lg"
        >
          <h1>Training Location</h1>
          <FaLocationDot className="text-red-500 mx-2 text-xl sm:text-3xl" />
        </a>
        <a
          href="https://calendar.app.google/mhRPuPNwP4aApuDbA"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
        >
          Book now
        </a>
      </div>
    </div>
  );
};

export default Contact;
