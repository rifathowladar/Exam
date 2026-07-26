import React from 'react'
import Container from './layout/Container'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const FooterTop = () => {
  return (
    <div className="bg-[#F7F7F7] w-full py-6 sm:py-8 md:py-10">
        <Container>
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
                <div className="text-center md:text-left">
                    <h5 className="font-semibold text-xl sm:text-2xl">Subscribe our Newsletter</h5>
                    <p className="max-w-full md:max-w-md text-xs sm:text-sm text-[#999999] mt-2">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
                    <div className="relative w-full lg:w-auto">
                        <input className='border bg-white border-[#808080] sm:border-r-0 w-full lg:w-96 py-2.5 sm:py-3 pl-9 sm:pl-11 placeholder:text-[#808080] placeholder:text-xs sm:placeholder:text-sm sm:rounded-tl-full sm:rounded-bl-full outline-none rounded-full' type='text' placeholder='Your email address'/>
                        <IoIosMail className="absolute top-0 translate-y-1/2 left-3 sm:left-4 text-[#808080] text-xl sm:text-2xl"/>
                        <button className="font-semibold mt-5 sm:mt-0 text-xs sm:text-sm bg-primary text-white px-6 sm:px-10 py-3 sm:py-4 relative top-0 sm:top-[-2px] left-0 sm:left-[-35px] rounded-full w-full sm:w-auto">Subscribe</button>
                    </div>
                    <div className="flex gap-3 sm:gap-4 ml-0 lg:ml-4">
                        <Link to="#" className="footerIcon"><FaFacebookF className="text-base sm:text-lg"/></Link>
                        <Link to="#" className="footerIcon"><FaTwitter className="text-base sm:text-lg"/></Link>
                        <Link to="#" className="footerIcon"><FaPinterestP className="text-base sm:text-lg"/></Link>
                        <Link to="#" className="footerIcon"><FaInstagram className="text-base sm:text-lg"/></Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterTop