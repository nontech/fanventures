// components
import TopNav from './TopNav'
import SideNav from './SideNav'
import Footer from '../../common/Footer'

import React, { useState } from 'react';


// style
import styles from './Layout.module.css';
 
export default function Layout({ children }) {
  return (
    <div className={`${styles.layout}`}>
      
      {/* TopNav */}
      <div className={styles.topnav}>
        <TopNav />
      </div>

      {/* <div className="flex flex-col flex-1"> */}
      <div className={`flex`}>

        {/* Side Navigation */}
        <SideNav />

        {/* Main content */}
        <main>
          {children}
        </main>

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}