import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full bg-transparent">
        <h1 className='text-5xl md:text-7xl lg:text-10xl font-bold text-white mb-8'>
          LET'S CONNECT <br /> <span className='text-[#353334]'>TOGETHER</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-[#F46C38] p-3 text-white rounded-lg mt-4 hover:bg-[#d05626] focus:outline-none focus:ring-2 transition-all duration-500 outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;