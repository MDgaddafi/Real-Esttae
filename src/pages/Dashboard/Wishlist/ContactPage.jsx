import { useState } from "react";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To handle form submission status

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      // Send the form data to the server (replace with your API endpoint)
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank you for contacting us! We'll get back to you soon.",
          showConfirmButton: false,
          timer: 1500
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl my-24 mx-auto mt-24 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      {status && <p className="text-center text-red-500 mb-4">{status}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Write your message here"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
