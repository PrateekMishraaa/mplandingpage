import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full flex items-center justify-center p-6 bg-gray-100">
        <form className="w-full max-w-lg p-10 border border-gray-300 rounded-3xl shadow-2xl bg-white flex flex-col gap-6">
          <p className="font-bold text-5xl font-sans text-center text-black mb-4">Contact Us</p>

          <div className="flex flex-col gap-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-lg text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="h-12 border border-gray-300 rounded-lg px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-lg text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-12 border border-gray-300 rounded-lg px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold text-lg text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="h-32 border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-blue-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </>
  )
}

export default Contact
