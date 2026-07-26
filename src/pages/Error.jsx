import React from 'react'
import error from '../assets/images/error.webp'
import Container from '../components/layout/Container'
import { useNavigate } from 'react-router';
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
    <Container>
        <div className='flex items-center justify-center my-20'>
          <img onClick={() => navigate("/")} src={error} alt="error" />
        </div>
    </Container>
    </>
  )
}

export default Error