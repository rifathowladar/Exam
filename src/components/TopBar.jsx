import React, { useRef, useState } from "react";
import Container from "./layout/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick ";
import { Link } from "react-router";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRefTwo = useRef(null);

  useOutsideClick(dropdownRef, () => setOpen(false), open);
  useOutsideClick(dropdownRefTwo, () => setOpenTwo(false), openTwo);
 
  return (
    <div className="border border-solid border-b-gry font-pop text-[#666666] text-[10px] sm:text-xs md:text-sm py-[3.5px] lg:py-5">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 relative">
          <div className="flex items-center gap-x-1">
            <CiLocationOn />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center"
                onClick={() => setOpen(!open)}
              >
                Eng <FaAngleDown />
              </div>
              {open && (
                <div className="absolute top-[25px] bg-gray-200 py-3 px-3 z-10">
                  <ul>
                    <li>BA</li>
                    <li>CH</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative" ref={dropdownRefTwo}>
              <div
                className="flex items-center"
                onClick={() => setOpenTwo(!openTwo)}
              >
                USD <FaAngleDown />
              </div>
              {openTwo && (
                <div className="absolute top-[25px] bg-gray-200 py-3 px-3 z-10">
                  <ul>
                    <li>BA</li>
                    <li>CH</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex items-center relative after:w-[2px] after:h-[15px] after:bg-[#E6E6E6] after:content-[] after:absolute after:top-[2px] after:left-[-10px]">
              <Link to='/registration'>Sign Up</Link>/<Link to ='/login'>Sign In </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

