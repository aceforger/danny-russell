import React, { useState } from 'react'

const StorePage = ({ onBackToHome }) => {
  const amazonLink = "https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS"
  const [selectedFormat, setSelectedFormat] = useState('paperback')

  const formats = {
    paperback: { name: 'Paperback', sku: 'ISBN-13: 978-1954168046', pages: 290 },
    kindle: { name: 'Kindle', sku: 'ASIN: B08N7V22LS', pages: 290 },
    audiobook: { name: 'Audiobook', sku: 'Coming Soon', pages: 'Narrated' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 pt-24">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-700 to-stone-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Buy The World Was Too Flat</h1>
          <p className="text-xl text-amber-200">Choose your preferred format</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Main Book Display */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Book Cover Display */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-stone-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-stone-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-[2/3] relative">
                <img 
                  src="/images/world.jpg"
                  alt="The World Was Too Flat - Book Cover by Danny Russell"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x900/78350f/fbbf24?text=The+World+Was+Too+Flat";
                  }}
                />
                {/* Hover overlay with rating */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex justify-center gap-1 text-amber-400 text-2xl mb-2">
                      ★★★★★
                    </div>
                    <p className="text-sm">5.0 out of 5 stars</p>
                    <p className="text-xs mt-1">Based on reader reviews</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Book details badge */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm whitespace-nowrap">
              <span className="text-stone-600">📖 290 pages</span>
              <span className="mx-2 text-stone-300">|</span>
              <span className="text-stone-600">📅 Nov 13, 2020</span>
            </div>
          </div>

          {/* Purchase Options */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">The World Was Too Flat</h2>
            <p className="text-amber-600 mb-4">Danny Russell · Flat World Series Book 2</p>
            
            {/* Format Selector */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {Object.keys(formats).map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  className={`px-6 py-2 rounded-full transition transform hover:scale-105 ${
                    selectedFormat === format 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                  }`}
                >
                  {formats[format].name}
                </button>
              ))}
            </div>

            {/* Details */}
            <div className="bg-stone-100 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-stone-500">Format:</span> <span className="text-stone-700 font-medium">{formats[selectedFormat].name}</span></div>
                <div><span className="text-stone-500">{selectedFormat === 'paperback' ? 'Pages:' : 'Length:'}</span> <span className="text-stone-700 font-medium">{formats[selectedFormat].pages}</span></div>
                <div className="col-span-2"><span className="text-stone-500">SKU/ISBN:</span> <span className="text-stone-700 font-medium">{formats[selectedFormat].sku}</span></div>
              </div>
            </div>

            {/* Buy Button */}
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl shadow-xl overflow-hidden transform transition hover:scale-105 mb-4"
            >
              <div className="p-6 text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="text-xl font-bold mb-1">Buy on Amazon</h3>
                <p className="text-sm opacity-90">Get your copy today</p>
                <div className="inline-block bg-white/20 rounded-lg px-6 py-2 mt-3 text-lg font-semibold hover:bg-white/30 transition">
                  Shop Now →
                </div>
              </div>
            </a>

            {/* Additional Retailers */}
            <div className="text-center">
              <p className="text-stone-500 text-sm mb-3">Also available at:</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-stone-600 hover:text-amber-600 transition text-sm">Barnes & Noble</a>
                <span className="text-stone-300">|</span>
                <a href="#" className="text-stone-600 hover:text-amber-600 transition text-sm">Apple Books</a>
                <span className="text-stone-300">|</span>
                <a href="#" className="text-stone-600 hover:text-amber-600 transition text-sm">Google Play</a>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-stone-200">
          <h3 className="text-2xl font-serif font-bold text-center text-stone-800 mb-8">What Readers Are Saying</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105">
              <div className="flex text-amber-400 mb-2">★★★★★</div>
              <p className="text-stone-600 italic mb-3">"A wonderful book, filled with 'real' people with 'real' lives. If you are from small town or rural America, do not miss this book."</p>
              <p className="text-stone-500 font-medium">— Ben Stover</p>
              <p className="text-stone-400 text-sm">Verified Purchase</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105">
              <div className="flex text-amber-400 mb-2">★★★★★</div>
              <p className="text-stone-600 italic mb-3">"Well worth reading. Very easy to read and I am going to find my copy of the first book and reread it."</p>
              <p className="text-stone-500 font-medium">— Max E. Brown</p>
              <p className="text-stone-400 text-sm">Verified Purchase</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={onBackToHome}
            className="text-stone-600 hover:text-amber-600 transition flex items-center gap-2 mx-auto group"
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            Back to Author Website
          </button>
        </div>
      </div>
    </div>
  )
}

export default StorePage