import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Server from '../components/Server/Server'
import { useNavigate } from 'react-router-dom'


const Servers = () => {

  const navigate  = useNavigate()
  useEffect(()=>{
      const cookie = document.cookie
      const splitCookie = cookie.split('=')
      const accessToken = splitCookie[1]?.toString()

      if(!accessToken){
        navigate('/')
      }
  },[navigate])

  return (
    <>
    <Navbar />
    <Server />
    </>
  )
}

export default Servers