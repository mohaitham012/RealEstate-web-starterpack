import React from 'react'
import Header from '../1-Header/Header'
import Footer from '../8-Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
      <Header />
      </div>
      <Outlet />

      <Footer /> 
    </>
  )
}

export default Layout
