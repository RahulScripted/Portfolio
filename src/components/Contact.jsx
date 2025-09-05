import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

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
      setResult("An error occurred. Please try again.", error.message);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center text-black">
      <div className="w-full px-2 bg-transparent">
        <motion.h1
          className="w-full text-5xl md:text-7xl font-bold text-white mb-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          LET'S <span className="text-[#353334]">CONNECT</span>
        </motion.h1>

        <motion.form
          onSubmit={onSubmit}
          className="space-y-4 w-full"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <label htmlFor="name" className="block text-white text-sm md:text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-[#2C2A29] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46C38] text-sm md:text-lg"
              placeholder="Enter your name"
              required
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <label htmlFor="email" className="block text-white text-sm md:text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-[#2C2A29] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46C38] text-sm md:text-lg"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <label htmlFor="message" className="block text-white text-sm md:text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-[#2C2A29] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46C38] resize-none text-sm md:text-lg"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-[#F46C38] text-white rounded-lg hover:bg-[#d05626] transition-all"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Submit
          </motion.button>
        </motion.form>

        {isPopupVisible && (
          <motion.div
            className="fixed inset-0 bg-[#2C2A29] bg-opacity-50 flex justify-center items-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#2C2A29] p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3 className="text-lg font-semibold">{result}</h3>
              <motion.button
                onClick={closePopup}
                className="mt-4 px-4 py-2 bg-[#F46C38] text-white rounded-md hover:bg-[#d05626]"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Contact;