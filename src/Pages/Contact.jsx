import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
const Contact = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  });
  console.log(formData)

  const handleChange= (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  console.log(handleChange);

  const handleSubmit= async(e)=>{
    e.preventDefault();
    // if(!formData.name || !formData.email || !formData.message){
    //   toast.error("All fields are required");
    // }
    try{
        const response = await axios.post("https://mpholidaybackend.onrender.com/api/sendmail",formData,{
          headers: {
            "Content-Type": "application/json", 
        },
        });
        console.log(response);
        toast.success("Email has been sent successfully",response);
        setFormData({
          name:"",
          email:"",
          message:""
        })
    }catch(error){
      console.log(error);
      toast.error("Something went wrong | Please try again later")
    }
  }
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full flex items-center justify-center p-6 bg-gray-100">
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-10 border border-gray-300 rounded-3xl shadow-2xl bg-white flex flex-col gap-6" >
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-12 border border-gray-300 rounded-lg px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label
               htmlFor="message"
               name="message"
               value={formData.message}
               onChange={handleChange}
                className="font-semibold text-lg text-gray-800 mb-2">
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
      <ToastContainer/>
    </>
  )
}

export default Contact
