import React from 'react'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <div className="content">
            { children }
        </div>
        <Footer />
    </div>
  )
}
