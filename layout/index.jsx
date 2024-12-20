import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { FooterSection } from '@/components/FooterSection';

export default function RootLayout({ children }) {
  return (
     <>
        <Header />
        {children}  
        {/* <FooterSection /> */}
        
        <Footer />
    
    </>
  )
}





