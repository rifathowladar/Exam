import React from 'react'
import Container from '../components/layout/Container'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay } from 'swiper/modules';
import review1 from '../assets/images/review1.webp'
import review2 from '../assets/images/review2.webp'
import review3 from '../assets/images/review3.webp'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';


const Review = () => {
    let slider1 = {
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: {
      prevEl: ".prevarrow",
      nextEl: ".nextarrow",
    },
     breakpoints:{
      769: {
        slidesPerView: 3,
      },
    },
    loop: true,
    autoplay : {
      delay: 1000,
      disableOnInteraction: false,
    },
    modules: [ Navigation, Autoplay ],
  }
  return (
    <div className="w-full bg-gray-50 py-15">
        <Container>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl lg:text-3xl font-semibold">Client Testimonial</h2>

                <div className="flex gap-3">
                    <button className="prevarrow w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <FaArrowLeft />
                    </button>

                    <button className="nextarrow w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <Swiper {...slider1} >
                <SwiperSlide>
                    <div className="bg-white w-100 p-6 rounded-lg">
                        <div>
                            <BiSolidQuoteAltRight className="text-3xl text-primary"/>
                        </div>
                        <div className="py-4 pr-4">
                            <p className="text-lg text-gray-700">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="pr-1">
                                    <img src={review1} alt="review1" />
                                </div>
                                <div>
                                    <h4 className="text-base text-gray-900">Robert Fox</h4>
                                    <p className="text-lg text-gray-400">Customer</p>
                                </div>
                            </div>
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white w-100 p-6 rounded-lg">
                        <div>
                            <BiSolidQuoteAltRight className="text-3xl text-primary"/>
                        </div>
                        <div className="py-4 pr-4">
                            <p className="text-lg text-gray-700">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="pr-1">
                                    <img src={review2} alt="review2" />
                                </div>
                                <div>
                                    <h4 className="text-base text-gray-900">Dianne Russell</h4>
                                    <p className="text-lg text-gray-400">Customer</p>
                                </div>
                            </div>
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white w-100 p-6 rounded-lg">
                        <div>
                            <BiSolidQuoteAltRight className="text-3xl text-primary"/>
                        </div>
                        <div className="py-4 pr-4">
                            <p className="text-lg text-gray-700">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="pr-1">
                                    <img src={review3} alt="review3" />
                                </div>
                                <div>
                                    <h4 className="text-base text-gray-900">Eleanor Pena</h4>
                                    <p className="text-lg text-gray-400">Customer</p>
                                </div>
                            </div>
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white w-100 p-6 rounded-lg">
                        <div>
                            <BiSolidQuoteAltRight className="text-3xl text-primary"/>
                        </div>
                        <div className="py-4 pr-4">
                            <p className="text-lg text-gray-700">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="pr-1">
                                    <img src={review1} alt="review1" />
                                </div>
                                <div>
                                    <h4 className="text-base text-gray-900">Robert Fox</h4>
                                    <p className="text-lg text-gray-400">Customer</p>
                                </div>
                            </div>
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    </div>
  )
}

export default Review
