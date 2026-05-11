import React from 'react'

const BookCover = () => {
  return (
    <div className="relative group max-w-md mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-stone-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-stone-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="aspect-[2/3] relative">
          <img 
            src="/images/world.png"
            alt="The World Was Too Flat - Book Cover by Danny Russell"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x600/78350f/fbbf24?text=The+World+Was+Too+Flat";
            }}
          />
        </div>
      </div>
      
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap">
        <span className="text-stone-600">📖 290 pages</span>
        <span className="mx-1 text-stone-300">|</span>
        <span className="text-stone-600">📅 Nov 13, 2020</span>
      </div>
    </div>
  )
}

export default BookCover