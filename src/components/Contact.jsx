import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false); // To control the popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult(""); // Clear previous result
    setIsPopupVisible(true); // Show the popup

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "2bfd616f-a72b-43ee-aa32-ff8f1b5f2f2f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center text-black">
      <div className="w-full bg-transparent">
        <h1 className="text-5xl md:text-7xl lg:text-10xl font-bold text-white mb-8">
          LET'S CONNECT <br /> <span className="text-[#353334]">TOGETHER</span>
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-[#2C2A29] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46C38]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-[#2C2A29] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46C38]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-[#2C2A29] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46C38] resize-none"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#F46C38] text-white rounded-lg hover:bg-[#d05626] transition-all"
          >
            Submit
          </button>
        </form>

        {isPopupVisible && (
          <div className="fixed inset-0 bg-[#2C2A29] bg-opacity-50 flex justify-center items-center text-white">
            <div className="bg-[#2C2A29] p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3 className="text-lg font-semibold">{result}</h3>
              <button
                onClick={closePopup}
                className="mt-4 px-4 py-2 bg-[#F46C38] text-white rounded-md hover:bg-[#d05626]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;