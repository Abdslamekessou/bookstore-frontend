import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx';
import AuthProvider from './context/AuthContext.jsx'

function App() {

  return (
    <>
      <AuthProvider>
          <Navbar />
            <main className='min-h-screen max-w-screen-lg mx-auto px-4 py-6'>
                <Outlet />
            </main>
          <Footer />
      </AuthProvider>
    </>
  )
}

export default App
