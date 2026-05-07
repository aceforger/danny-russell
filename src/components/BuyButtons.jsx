import React from 'react'

const BuyButtons = ({ onViewStore }) => {
  return (
    <div>
      <h2 className="text-3xl font-serif font-bold text-center text-stone-800 mb-4">Get Your Copy Today</h2>
      <p className="text-center text-stone-600 mb-8">Available now in paperback, ebook, and Kindle formats</p>
      
      <div className="max-w-2xl mx-auto">
        {/* Main Store Button */}
        <button
          onClick={onViewStore}
          className="block w-full transform transition hover:scale-105 mb-6"
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">Buy The World Was Too Flat</h3>
              <p className="text-sm opacity-90 mb-3">Paperback · Kindle · Audiobook</p>
              <div className="inline-block bg-white/20 rounded-lg px-6 py-2 text-base font-semibold hover:bg-white/30 transition">
                Shop Now →
              </div>
              <div className="mt-3 flex justify-center gap-1">
                <span className="text-yellow-300">★★★★★</span>
                <span className="text-sm ml-2">5.0 out of 5 stars</span>
              </div>
            </div>
          </div>
        </button>
        
        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white rounded-lg shadow-md p-3 text-center border border-stone-200 transform transition hover:scale-105">
            <div className="text-2xl mb-1">📖</div>
            <h3 className="font-bold text-stone-800 text-sm">Paperback</h3>
            <button onClick={onViewStore} className="inline-block mt-1 text-amber-600 hover:text-amber-700 text-xs font-medium">
              View →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-3 text-center border border-stone-200 transform transition hover:scale-105">
            <div className="text-2xl mb-1">📱</div>
            <h3 className="font-bold text-stone-800 text-sm">Kindle</h3>
            <button onClick={onViewStore} className="inline-block mt-1 text-amber-600 hover:text-amber-700 text-xs font-medium">
              View →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-3 text-center border border-stone-200 transform transition hover:scale-105">
            <div className="text-2xl mb-1">🎧</div>
            <h3 className="font-bold text-stone-800 text-sm">Audiobook</h3>
            <button onClick={onViewStore} className="inline-block mt-1 text-amber-600 hover:text-amber-700 text-xs font-medium">
              Coming Soon →
            </button>
          </div>
        </div>
        
        {/* Amazon Direct Link */}
        <div className="text-center mt-4 pt-4 border-t border-stone-200">
          <a 
            href="https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-1 group text-sm"
          >
            Shop on Amazon 
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BuyButtons