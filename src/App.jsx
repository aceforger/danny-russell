import React, { useState, useEffect } from 'react'
import BookCover from './components/BookCover'
import Synopsis from './components/Synopsis'
import AuthorBio from './components/AuthorBio'
import ContactForm from './components/ContactForm'
import StorePage from './components/StorePage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    if (currentPage === 'home') {
      window.scrollTo(0, 0)
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  const scrollToSection = (sectionId) => {
    setCurrentPage('home')
    setMobileMenuOpen(false)
    
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Get the height of the fixed navbar
        const navbar = document.querySelector('nav')
        const navbarHeight = navbar ? navbar.offsetHeight : 80
        
        // Calculate position with proper offset
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    })
  }

  const handleStoreClick = () => {
    setCurrentPage('store')
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  if (currentPage === 'store') {
    return (
      <>
        <nav className={`fixed top-0 w-full transition-all duration-300 z-50 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button onClick={handleBackToHome} className="text-2xl font-serif font-bold text-stone-800 hover:text-amber-600 transition transform hover:scale-105">
                Danny Russell
              </button>
              <button 
                onClick={handleBackToHome}
                className="text-stone-600 hover:text-amber-600 transition flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition">←</span>
                Back to Home
              </button>
            </div>
          </div>
        </nav>
        <StorePage onBackToHome={handleBackToHome} />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full transition-all duration-300 z-50 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-3 transition transform hover:scale-105"
            >
              <img 
                src="/images/logo.png" 
                alt="Danny Russell Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-2xl font-serif font-bold text-orange-800 hover:text-amber-600 transition">
                Danny Russell
              </span>
            </button>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-amber-600 transition relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('book')} className="text-stone-600 hover:text-amber-600 transition relative group">
                Book
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('author')} className="text-stone-600 hover:text-amber-600 transition relative group">
                Author
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-600 hover:text-amber-600 transition relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={handleStoreClick} className="bg-amber-600 text-white px-5 py-2 rounded-full hover:bg-amber-700 transition transform hover:scale-105 shadow-md">
                Buy Now →
              </button>
            </div>
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-stone-800 text-2xl focus:outline-none">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-3 pb-4">
              <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-amber-600 transition py-2 text-left">Home</button>
              <button onClick={() => scrollToSection('book')} className="text-stone-600 hover:text-amber-600 transition py-2 text-left">Book</button>
              <button onClick={() => scrollToSection('author')} className="text-stone-600 hover:text-amber-600 transition py-2 text-left">Author</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-600 hover:text-amber-600 transition py-2 text-left">Contact</button>
              <button onClick={handleStoreClick} className="bg-amber-600 text-white px-5 py-2 rounded-full hover:bg-amber-700 transition text-center">Buy Now →</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Banner */}
        <section id="home" className="relative bg-stone-500 text-white min-h-[100vh] flex items-center -mt-20 pt-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/50 to-stone-900"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Danny Russell</h1>
            <p className="text-xl md:text-2xl text-amber-400 mb-2">Author of "The World Was Too Flat"</p>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">A heartfelt journey through small-town Texas in the 1950s</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <button onClick={handleStoreClick} className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition shadow-lg transform hover:scale-105">
                Buy Now →
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition transform hover:scale-105">
                Contact Author
              </button>
            </div>
          </div>
        
        </section>

        {/* Book Section */}
        <section id="book" className="py-14 scroll-mt-30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-stone-800">The Book</h2>
              <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-3"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
              <BookCover />
              <Synopsis />
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section id="author" className="py-16 bg-stone-100 scroll-mt-24">
          <div className="container mx-auto px-4">
            <AuthorBio />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-stone-100 scroll-mt-24">
          <div className="container mx-auto px-6">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2026 Danny Russell. All rights reserved.</p>
          <div className="mt-3 flex justify-center space-x-6">
            <a href="mailto:drussell5@embarqmail.com" className="text-stone-400 hover:text-amber-400 transition text-sm">✉️ Email</a>
            {/* <a href="https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition text-sm">📚 Amazon</a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition text-sm">⭐ Goodreads</a> */}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App