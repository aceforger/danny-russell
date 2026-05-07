import React from 'react'

const Synopsis = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-1">The World Was Too Flat</h2>
        <p className="text-amber-600 font-medium text-sm mb-3">Book Two in the Flat World Series</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Historical Fiction</span>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Coming of Age</span>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Small Town Life</span>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">290 pages</span>
        </div>
      </div>
      
      <div className="prose prose-stone max-w-none">
        <p className="text-base text-stone-700 leading-relaxed mb-3">
          Five young boys are about to finish high school in the mid-fifties, not sure of their future or where they may wind up. They have spent their lives in this town of Sunset, Texas.
        </p>
        <p className="text-stone-600 leading-relaxed mb-3 text-sm">
          This heartfelt novel follows a group of childhood friends as they stand on the precipice of adulthood in 1950s rural Texas. Their bond, forged through shared experiences in the small town of Sunset, faces the ultimate test as graduation approaches and life pulls them in different directions.
        </p>
        <p className="text-stone-600 leading-relaxed mb-3 text-sm">
          "The World Was Too Flat" picks up where the first book left off, following these characters into their sixties and chronicling their journeys until their final days. It's a touching exploration of friendship, memory, and the roads not taken—a testament to the enduring power of small-town connections.
        </p>
        
        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 my-4">
          <p className="text-stone-700 font-medium italic text-sm mb-1">
            "It is a wonderful book, filled with 'real' people with 'real' lives doing 'real' things. If you are from small town or rural America, do not miss this book."
          </p>
          <p className="text-stone-500 text-xs">— Ben Stover, Amazon Review ★★★★★</p>
        </div>
        
        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-stone-400 my-4">
          <p className="text-stone-700 font-medium italic text-sm mb-1">
            "This picks up when they are in their sixties and continues until their deaths. Very easy to read... Well worth reading."
          </p>
          <p className="text-stone-500 text-xs">— Max E. Brown, Amazon Review ★★★★★</p>
        </div>
      </div>
      
      <div className="pt-3 border-t border-stone-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-center">
            <span className="block text-xl font-bold text-amber-600">5.0</span>
            <span className="text-xs text-stone-500">⭐ Customer Rating</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-amber-600">#1</span>
            <span className="text-xs text-stone-500">Series Bestseller</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-amber-600">1st</span>
            <span className="text-xs text-stone-500">Edition</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-amber-600">2020</span>
            <span className="text-xs text-stone-500">Publication</span>
          </div>
        </div>
      </div>
      
      <div className="bg-stone-100 p-3 rounded-lg">
        <h3 className="font-semibold text-stone-800 text-sm mb-2">Book Details</h3>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div><span className="text-stone-500">ASIN:</span> <span className="text-stone-700">B08N7V22LS</span></div>
          <div><span className="text-stone-500">Publisher:</span> <span className="text-stone-700">Danny Russell Publishing</span></div>
          <div><span className="text-stone-500">Publication date:</span> <span className="text-stone-700">Nov 13, 2020</span></div>
          <div><span className="text-stone-500">ISBN-13:</span> <span className="text-stone-700">978-1954168046</span></div>
          <div><span className="text-stone-500">Print length:</span> <span className="text-stone-700">290 pages</span></div>
          <div><span className="text-stone-500">Edition:</span> <span className="text-stone-700">1st</span></div>
        </div>
      </div>
    </div>
  )
}

export default Synopsis