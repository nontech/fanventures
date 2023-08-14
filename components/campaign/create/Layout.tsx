import React, { useState } from 'react';

// components
import TopNav from '../../common/Navbar'
import SideNav from './SideNav'
import Footer from '../../common/Footer'

// main content components
import Basics from './steps/Basics'
import Connect from './steps/Connect'

// style
import styles from './Layout.module.css';
 
export default function Layout({ children }) {

  const [activeContent, setActiveContent] = useState("Basics");

  return (
    <div className={`${styles.layout}`}>
      
      {/* TopNav */}
      <div className={styles.topnav}>
        <TopNav />
      </div>

      <div className={`flex`}>

        {/* Side Navigation */}
        <SideNav setActiveContent={setActiveContent} />

        {/* Main content */}
        <main>
          {children}
          {/* Additional content based on activeContent */}
          {activeContent === "Basics" && <Basics />}
          {activeContent === "Connect" && <Connect />}
        </main>

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}