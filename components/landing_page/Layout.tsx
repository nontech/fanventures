import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import styles from './Layout.module.css';
 
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <Navbar />
      </div>

      {/* Main content */}
      <main className={styles.main}>
        {children}
      </main>

      {/* Footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}