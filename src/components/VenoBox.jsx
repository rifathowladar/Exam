import React, { useRef, useState } from 'react'
import Container from '../components/layout/Container'
import useDropdown from '../hooks/useDropdown'
import venobox1 from '../assets/images/venobox1.webp'
import venobox2 from '../assets/images/venobox2.webp'
import venobox3 from '../assets/images/venobox3.webp'
import venobox4 from '../assets/images/venobox4.webp'
import venobox5 from '../assets/images/venobox5.webp'
import venobox6 from '../assets/images/venobox6.webp'
import { FaInstagram } from "react-icons/fa";

const images = [venobox1, venobox2, venobox3, venobox4, venobox5, venobox6]

const VenoBox = () => {
  const [dropdown, setDropdown] = useState(null)
  const venoRef = useRef(null)

  useDropdown(venoRef, () => setDropdown(null), dropdown !== null)

  return (
    <Container>
      <div className="">
        <div className="text-center my-8">
          <h4 className="text-xl lg:text-hsize font-semibold">Follow us on Instagram</h4>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 pb-15" ref={venoRef}>
          {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setDropdown(index)}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
          >
            <img
              src={img}
              alt="venobox"
              className="duration-300 group-hover:scale-110"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-300"></div>

            {/* Instagram Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 z-10">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
        </div>
      </div>

      {dropdown !== null && (
        <div
          onClick={() => setDropdown(null)}
          className="w-full h-screen bg-[#00000072] top-0 left-0 fixed z-20 flex justify-center items-center"
        >
          <img className="w-100" src={images[dropdown]} alt="venobox" />
        </div>
      )}
    </Container>
  )
}

export default VenoBox