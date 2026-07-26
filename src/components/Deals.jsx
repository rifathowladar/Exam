import React from "react";
import Container from "../layouts/Container";
import bestDeal from "../../../public/bestDeals.webp";
import summer from "../../../public/summerSale.webp";
import meat from "../../../public/meat.webp";
import { UseCountDown } from "../../hooks/UseCountDown";
import { IoWarningOutline } from "react-icons/io5";

const Deals = () => {
  const { day, hour, min, sec, expired, message } = UseCountDown("Jun 17 2027");

  const banners = [bestDeal, meat, summer];
  return (
    <section className="py-15 px-4">
      <Container>
        <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((img, index) => (
            <div
              className="overflow-hidden cursor-pointer relative w-full group"
              key={index}
            >
             {
              index === 0 && (
                 <div className="absolute top-[23%]  md:top-[22%] left-1/2 -translate-x-1/2 bg-transparent max-w-[85%] w-full z-10 h-20 ">
          {
            expired ? (
           
                <p className="font-poppins font-medium text-xl w-full text-red-800 capitalize flex items-center">{message} <IoWarningOutline className="text-xl" /></p>
             
            ) : (
              <div className="">
                   <div className="flex items-start gap-x-3 font-poppins text-xl md:text-2xl font-medium text-gray-0 uppercase w-full justify-center">

              {/* Days */}
                    <div className="flex flex-col gap-y-2">
                         <p className="text-center">{day} 
                          <span className="block text-xs font-normal text-center">Days</span>
                          </p>
                    </div>
                    
                    <span>
                      :
                    </span>

                    {/* Hours */}
                     <div className="flex flex-col gap-y-2">
                         <p className="text-center">{hour < 10 ? '0'+hour : hour} 
                          <span className="block text-xs font-normal text-center">Hours</span>
                          </p>
                    </div>

                    <span>
                      :
                    </span>

                    {/* Minutes */}
                     <div className="flex flex-col gap-y-2">
                         <p className="text-center">{min < 10 ? '0'+min : min} 
                          <span className="block text-xs font-normal">mins</span>
                          </p>
                    </div>

                    <span>
                      :
                    </span>

                    {/* secs */}
                     <div className="flex flex-col gap-y-2">
                         <p className="text-center">{sec < 10 ? '0'+ sec : sec}
                          <span className="block text-xs font-normal text-center">secs</span>
                          </p>
                    </div>
             </div>
              </div>
            )
          }
              </div>
              )
             }
              <img src={img} alt="deals" className="group-hover:scale-[1.02] transition-all duration-300"/>
            </div>
          ))}
 
        </div>
      </Container>
    </section>
  );
};

export default Deals;