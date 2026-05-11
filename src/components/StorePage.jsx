import React, { useState } from 'react'

const StorePage = ({ onBackToHome }) => {
  const [selectedBookId, setSelectedBookId] = useState('worldTooFlat')
  const [selectedFormat, setSelectedFormat] = useState('paperback')

  const books = {
    worldTooFlat: {
      id: 'worldTooFlat',
      title: "The World Was Too Flat",
      subtitle: "Flat World Series Book 2",
      coverImage: "/images/world.png",
      description: "Five young boys are about to finish high school in the mid-fifties, not sure of their future or where they may wind up. They have spent their lives in this town of Sunset, Texas.",
      publishDate: "Nov 13, 2020",
      pages: 290,
      rating: "5.0",
      formats: {
        paperback: { 
          name: 'Paperback', 
          sku: 'ISBN: 979-8887034386', 
          pages: 290,
          storeLinks: {
            amazon: 'https://www.amazon.com/World-Was-Flat-Too-Paperback/dp/9798887034386',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        },
        kindle: { 
          name: 'Kindle', 
          sku: 'ISBN: 978-1-5246-9054-0', 
          pages: 344,
          storeLinks: {
            amazon: 'https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        },
        ebook: { 
          name: 'eBook', 
          sku: 'ISBN: 9798887034393', 
          pages: 344,
          storeLinks: {
            amazon: 'https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        },
        audiobook: { 
          name: 'Audiobook', 
          sku: 'Coming Soon', 
          pages: 'Narrated',
          storeLinks: {
            amazon: '#',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        }
      }
    },
    // Add more books here in the future
  }

  const currentBook = books[selectedBookId]
  const currentFormat = currentBook.formats[selectedFormat]

  // Store configuration with icons and link keys
  const stores = [
    { name: 'Amazon', key: 'amazon', icon: '📚', url: currentFormat.storeLinks.amazon },
    { name: 'Barnes & Noble', key: 'barnes', icon: '📖', url: currentFormat.storeLinks.barnes },
    { name: 'Apple Books', key: 'apple', icon: '🍎', url: currentFormat.storeLinks.apple },
    { name: 'Google Play', key: 'google', icon: '▶️', url: currentFormat.storeLinks.google }
  ]

  // Get list of books for navigation
  const bookList = Object.keys(books).map(key => books[key])

  // Update store URLs when format changes
  const getStoreUrl = (storeKey) => {
    return currentFormat.storeLinks[storeKey] || '#'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 pt-24">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-700 to-stone-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Buy Books by Danny Russell</h1>
          <p className="text-amber-200">Choose your format and store</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Book Selector - Shows if multiple books exist */}
        {bookList.length > 1 && (
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {bookList.map((book) => (
              <button
                key={book.id}
                onClick={() => setSelectedBookId(book.id)}
                className={`px-4 py-2 rounded-full transition text-sm ${
                  selectedBookId === book.id 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {book.title}
              </button>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Book Cover */}
          <div className="relative group max-w-sm mx-auto w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-stone-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-stone-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-[2/3] relative">
                <img 
                  src={currentBook.coverImage}
                  alt={`${currentBook.title} - Book Cover by Danny Russell`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x900/78350f/fbbf24?text=" + encodeURIComponent(currentBook.title);
                  }}
                />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap">
              <span className="text-stone-600">📖 {currentBook.pages} pages</span>
              <span className="mx-1 text-stone-300">|</span>
              <span className="text-stone-600">📅 {currentBook.publishDate}</span>
            </div>
          </div>

          {/* Purchase Options */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-1">{currentBook.title}</h2>
            <p className="text-amber-600 text-sm mb-4">{currentBook.subtitle}</p>
            
            {/* Format Selector */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {Object.keys(currentBook.formats).map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  className={`px-4 py-1.5 rounded-full transition text-sm ${
                    selectedFormat === format 
                      ? 'bg-amber-600 text-white shadow-md' 
                      : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                  }`}
                >
                  {currentBook.formats[format].name}
                </button>
              ))}
            </div>

            {/* Book Details */}
            <div className="bg-stone-100 rounded-lg p-3 mb-4 text-sm">
              <div className="grid grid-cols-2 gap-1">
                <div><span className="text-stone-500">Format:</span> <span className="text-stone-700">{currentFormat.name}</span></div>
                <div><span className="text-stone-500">{selectedFormat === 'paperback' ? 'Pages:' : 'Length:'}</span> <span className="text-stone-700">{currentFormat.pages}</span></div>
                <div className="col-span-2"><span className="text-stone-500">ISBN:</span> <span className="text-stone-700 text-xs">{currentFormat.sku}</span></div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-amber-500">★★★★★</span>
              <span className="text-stone-600 text-sm ml-1">{currentBook.rating} out of 5 stars</span>
            </div>

            {/* Store Icons - Links change based on selected format */}
            <div>
              <p className="text-stone-600 text-sm mb-3 text-center">Buy {currentFormat.name} from:</p>
              <div className="flex justify-center gap-6 flex-wrap">
                {stores.map((store, idx) => (
                  <a
                    key={idx}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg transition group ${store.url === '#' ? 'opacity-40 cursor-not-allowed' : 'hover:bg-stone-100'}`}
                    onClick={(e) => {
                      if (store.url === '#') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition">{store.icon}</span>
                    <span className="text-xs text-stone-600 group-hover:text-amber-600">{store.name}</span>
                    {store.url === '#' && (
                      <span className="text-[10px] text-stone-400">Coming Soon</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Format hint */}
            <p className="text-center text-xs text-stone-400 mt-4">
              📖 Store links update based on selected format
            </p>
          </div>
        </div>

        {/* Customer Reviews - Compact */}
        <div className="max-w-3xl mx-auto mt-10 pt-6 border-t border-stone-200">
          <h3 className="text-xl font-serif font-bold text-center text-stone-800 mb-5">What Readers Are Saying</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex text-amber-400 text-sm mb-1">★★★★★</div>
              <p className="text-stone-600 italic text-sm mb-2">"A wonderful book, filled with 'real' people with 'real' lives."</p>
              <p className="text-stone-500 text-xs">— Ben Stover</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex text-amber-400 text-sm mb-1">★★★★★</div>
              <p className="text-stone-600 italic text-sm mb-2">"Well worth reading. Very easy to read."</p>
              <p className="text-stone-500 text-xs">— Max E. Brown</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <button
            onClick={onBackToHome}
            className="text-stone-600 hover:text-amber-600 transition flex items-center gap-2 mx-auto group text-sm"
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