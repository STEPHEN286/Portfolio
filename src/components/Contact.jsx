import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom" placeholder="Your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom" placeholder="Your email" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom" placeholder="Subject" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom" placeholder="Your message"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-custom text-white py-2 px-4 !rounded-button hover:bg-custom-dark transition duration-300">
                        Send Message
                    </button>
                </div>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/STEPHEN286"  rel="noopener noreferrer" target='_blank'className="text-gray-600 hover:text-custom">
                        <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/STEPHEN286"  rel="noopener noreferrer" target='_blank' className="text-gray-600 hover:text-custom">
                        <AiFillGithub />
                        </a>
                      
                    </div>
                    <div className="text-gray-600">
                        <i className="fas fa-envelope mr-2"></i>
                        kwofie286@gmail.com
                    </div>
                    <div className="text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        San Francisco, CA
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
