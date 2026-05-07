import React from 'react'

const AuthorBio = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif font-bold text-center text-stone-800 mb-12">About the Author</h2>
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="rounded-full overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" 
              alt="Russell - Author"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg text-stone-700 leading-relaxed">
            <span className="font-bold text-2xl text-amber-600">Danny Russell</span> is an award-winning author of speculative fiction whose work explores the intersection of technology, memory, and human identity.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            Born in San Francisco and raised across three continents, Russell developed a unique perspective on cultural identity and technological progress. Before becoming a full-time writer, he worked as a software engineer, journalist, and philosophy teacher—experiences that deeply inform his nuanced understanding of both human nature and emerging technologies.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            His debut novel, "Shadows of Tomorrow," spent 26 weeks on the New York Times bestseller list and won the 2024 Hugo Award for Best Novel. Russell's short fiction has appeared in The New Yorker, Clarkesworld, and Best American Short Stories.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            When not writing, Russell can be found hiking the Pacific Northwest trails with his rescue dog, Nova, or experimenting with sourdough recipes. He currently lives in Portland, Oregon, where he's working on his next novel, a speculative thriller set in a world without sleep.
          </p>
          
          <div className="pt-4">
            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-stone-600">
              "I write about the futures we're creating, not to predict them, but to understand who we might become."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorBio