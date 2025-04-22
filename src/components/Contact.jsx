import React, { useRef, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Toaster, toast } from 'sonner';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicId = process.env.REACT_APP_PUBLIC_ID;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const validateInput = (form) => {
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInput(formRef.current)) {
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicId)
      .then(
        () => {
          toast.success('Message sent successfully!');
          setIsLoading(false);
          e.target.reset();
        },
        () => {
          toast.error('Failed to send message. Please try again later.');
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-center" expand={false} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                  name="from_name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                  name="from_email"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                name="message"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg text-white transition duration-300 ${
                  isLoading
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-700 hover:bg-custom-dark'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <a
                  href="www.linkedin.com/in/stephen-adjei-kwofie-aa4b44253"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-600 hover:text-custom"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/STEPHEN286"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-600 hover:text-custom"
                >
                  <AiFillGithub />
                </a>
              </div>
              <div className="text-gray-600">
                <a
                  href="mailto:kwofie286@gmail.com"
                  className="flex items-center space-x-2 hover:text-custom transition"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  <span>kwofie286@gmail.com</span>
                </a>
              </div>
              <div className="text-gray-600">
                <a
                  href="tel:+233578032810"
                  className="flex items-center space-x-2 hover:text-custom transition"
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span>+233578032810</span>
                </a>
              </div>
              <div className="text-gray-600">
                <a
                  href="https://maps.app.goo.gl/aw4tFworvgGZG4Dd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-custom transition"
                >
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Tantra Hill, 13 Daikon St, Accra-Achimota</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
