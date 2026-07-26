
import React, { useState } from 'react'
import Container from '../components/layout/Container'
import faq from '../assets/images/faq.webp'
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "How can I order?",
      answer: "You can order directly through our website by browsing products, adding them to your cart, and proceeding to checkout."
    },
    {
      question: "How can I make payment?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and other secure online payment options."
    },
    {
      question: "How can I cancel an order?",
      answer: "You can cancel your order within 24 hours of placing it by contacting our customer support team."
    },
    {
      question: "Is my personal information kept private?",
      answer: "Yes, we prioritize your privacy and use industry-standard security measures to protect your personal information."
    },
    {
      question: "What shipping methods are available?",
      answer: "We offer standard shipping, express shipping, and in-store pickup options depending on your location."
    },
    {
      question: "How do I return a product?",
      answer: "You can return products within 30 days of delivery. Please contact our support team for return instructions."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Container className='py-20'>
      <div className='flex items-center justify-between gap-10'>
        <div className='w-1/2'>
          <h2 className='text-hsize font-bold font-pop mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            {faqData.map((item, index) => (
              <div key={index} className='border border-gray-200 rounded-lg overflow-hidden'>
                <button
                  onClick={() => toggleAccordion(index)}
                  className='w-full flex items-center justify-between p-5 bg-gry hover:bg-gray-200 transition-colors'
                >
                  <span className='font-pop font-semibold text-left'>{item.question}</span>
                  {openIndex === index ? <FaMinus className='text-primary'/> : <FaPlus className='text-primary'/>}
                </button>
                {openIndex === index && (
                  <div className='p-5 bg-white'>
                    <p className='font-pop text-sm text-gray-600'>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2'>
          <img src={faq} alt="faq" className='w-full rounded-lg' />
        </div>
      </div>
    </Container>
  );
};

export default Faq