import React from 'react'
import Container from '../components/layout/Container'
import CompanyLogo1 from '../assets/images/CompanyLogo-1.webp'
import CompanyLogo2 from '../assets/images/CompanyLogo-2.webp'
import CompanyLogo3 from '../assets/images/CompanyLogo-3.webp'
import CompanyLogo4 from '../assets/images/CompanyLogo-4.webp'
import CompanyLogo5 from '../assets/images/CompanyLogo-5.webp'
import CompanyLogo6 from '../assets/images/CompanyLogo-6.webp'
const CompanyLogo = () => {
  return (
    <Container>
        <div className="flex flex-wrap justify-center gap-y-5 py-15">
          <img
            src={CompanyLogo1}
            alt="CompanyLogo1"
            className="pr-[5%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={CompanyLogo2}
            alt="CompanyLogo2"
            className="px-[5%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={CompanyLogo3}
            alt="CompanyLogo3"
            className="px-[5%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={CompanyLogo4}
            alt="CompanyLogo5"
            className="px-[5%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={CompanyLogo5}
            alt="CompanyLogo5"
            className="px-[5%] border-r-1 border-[#E6E6E6]"
          />
          <img src={CompanyLogo6} alt="CompanyLogo6" className="pl-[6%]" />
        </div>
    </Container>
  )
}

export default CompanyLogo