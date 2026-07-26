import Container from './layout/Container'
import Logo from '../assets/images/logo.webp'
import React, { Suspense,  } from "react";
import { CiSearch } from "react-icons/ci";
import Heart from '../icons/Heart.jsx';
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router';


const SearchBar = () => {
  return (
    <div className="border-b border-solid border-b-gry">
        <Container>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between lg:items-center gap-4 my-4 md:my-5 lg:my-6 relative">
                <Link to="/">
                    <img src={Logo} alt='logo' fetchPriority='high' loading="lazy" className="max-w-[150px] md:max-w-full"/>
                </Link>
                <div className="relative flex w-full md:w-[400px] lg:w-auto">
                    <input className='border border-[#808080] w-full md:w-[400px] lg:w-80 py-2 md:py-3 pl-9 md:pl-11 placeholder:text-[#808080] placeholder:text-xs md:placeholder:text-sm border-r-0 rounded-l-md' type='text' placeholder='Search'/>
                    <CiSearch className="absolute top-0 translate-y-1/2 left-3 md:left-4 text-xl md:text-2xl"/>
                    <button className="font-semibold text-xs md:text-sm bg-primary text-white px-3 md:px-6 py-2.5 md:py-3.5 rounded-r-md">Search</button>
                </div>
                <div className="flex absolute top-0 right-0 lg:static lg:top-auto lg:right-auto gap-x-3 md:gap-x-4 lg:gap-x-8">
                    <div className="relative after:w-px after:h-5 md:after:h-6 after:content-[''] after:absolute after:top-1 md:after:top-1.25 after:-right-1.5 md:after:-right-2 lg:after:-right-4 after:bg-[#CCCCCC] gap-2">
                        <Heart className=""/>
                    </div>
                    <div className="flex gap-2 md:gap-3 items-center">
                        <div className="text-[24px]">
                            <SlHandbag className="text-[28px] md:text-[28px] lg:text-[34px]"/>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-xs md:text-sm text-[#4D4D4D]">Shopping cart:</span><br/>
                            <span className="font-bold text-sm md:text-md">$57.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default SearchBar