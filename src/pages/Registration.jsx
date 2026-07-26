import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Registration = () => {
  let navigate = useNavigate()
  let [showPass, setShowPass] = useState(false)
  let [confirmPass, setConfirmPass] = useState(false)
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  })
  let [errorMsg,SetErrorMsg] = useState('')
  let [successMsg,SetSuccessMsg] = useState('')


  let handleChange = (e)=>{
    let name = e.target.name
    let value = e.target.value
    if(name !== 'terms'){
      setRegData({...regData, [name]:value})
    }else{
      setRegData({...regData, terms: !regData.terms})
    }
  }
  let handleClick = async ()=>{
    let user = await axios.post("http://localhost:5000/registration",regData);
    let {success, message} = user.data
    console.log(success);
    if (!success) {
      SetErrorMsg(message);
      toast.error(message, {
        position: "top-center",
         theme: "dark",
        });
  } else {
      SetSuccessMsg(message);   
      toast.success("Registration Successful!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      navigate("/login"); 
  }
  }
 


  return (
    <div className="w-130 bg-white p-6 shadow-md rounded-lg mx-auto my-20">
      <h3 className="font-semibold text-hsize text-center">Create Account</h3>
      <input onChange={handleChange} name='email' type="email" placeholder="Email" className="fromInput"/>
      <div className="relative mt-3">
        <input onChange={handleChange} name='password' type={showPass ? "text" : "password"} placeholder="Password" className="fromInput"/>
        <div className='absolute right-4 top-3/5 -translate-y-1/2 cursor-pointer text-gray-600 text-xl' onClick={() => setShowPass(!showPass)}>
          {showPass ? <FaEye />: <FaEyeSlash />}
        </div>
      </div>
      <div className="relative mt-3">
        <input onChange={handleChange} name='confirmPassword' type={confirmPass ? "text" : "password"} placeholder="Confirm Password" className="fromInput"/>
        <div className='absolute right-4 top-3/5 -translate-y-1/2 cursor-pointer text-gray-600 text-xl' onClick={() => setConfirmPass(!confirmPass)}>
          {confirmPass ? <FaEye />: <FaEyeSlash />}
        </div>
      </div>
      <div className="flex items-center my-4 text-[#808080]">
        <label className="text-sm"><input onChange={handleChange} name='terms' type="checkbox" className="mr-2"/>Accept all terms & Conditions</label>
      </div>
      <button onClick={handleClick} className="w-full bg-primary text-white py-3.5 rounded-full text-sm">Create Account</button>
      <p className="text-center mt-4 text-sm text-[#808080]">Already have account <Link to="/login" className="cursor-pointer text-primary">Login</Link></p>
  
    </div>
  )
}

export default Registration