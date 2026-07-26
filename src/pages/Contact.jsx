import React, { useState } from 'react'
import Container from '../components/layout/Container'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import { toast } from 'react-toastify'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent! We will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <Container className="py-12">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h1 className="font-pop text-3xl font-bold mb-6">Contact Us</h1>
          <p className="font-pop text-gray-600 mb-8">
            Have a question or need help? Reach out to us and our team will respond within 24 hours.
          </p>
          <ul className="space-y-4 font-pop text-sm">
            <li className="flex items-center gap-3">
              <CiLocationOn className="text-primary text-xl" />
              Lincoln- 344, Illinois, Chicago, USA
            </li>
            <li className="flex items-center gap-3">
              <FiPhoneCall className="text-primary text-xl" />
              (219) 555-0114
            </li>
            <li className="flex items-center gap-3">
              <CiMail className="text-primary text-xl" />
              Proxy@gmail.com
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-gry p-8 rounded-xl space-y-4">
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="fromInput"
          />
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="fromInput"
          />
          <input
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="fromInput"
          />
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="fromInput resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-full font-pop text-sm font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </Container>
  )
}

export default Contact
