import React, { useState } from "react";

const MessageForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message, timestamp: new Date().toLocaleString() };

    try {
      const response = await fetch("http://localhost:5001/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        alert("Your message has been submitted successfully!");
      } else {
        alert("Failed to submit message: " + result.error);
      }
    } catch (error) {
      alert("Error submitting message: " + error.message);
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="5"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        Submit Message
      </button>
    </form>
  );
};

export default MessageForm;
