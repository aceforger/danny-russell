import React from 'react'

const AuthorBio = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif font-bold text-center text-stone-800 mb-12">About Danny Russell</h2>
      
      <div className="grid md:grid-cols-3 gap-5 items-start">
        <div className="md:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="/images/profile.png" 
              alt="Danny Russell - Author"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg text-stone-700 leading-relaxed">
            <span className="font-bold text-2xl text-amber-600">Danny Russell</span> was born in Fort Worth, Texas.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            Shortly after his birth, his parents moved outside of Fort Worth to a small rural town in Wise County, Newark. Here he grew up and attended the first 8 grades of school before the family moved to another small town, Sunset, Texas in Montague County. There he attended and graduated from Bowie High School.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            He attended and graduated from Midwestern State University in Wichita Falls, Texas. In Wichita Falls, he met his future wife Doris. They were married in 1970 and raised two sons. In 1975, they moved back to Sunset where Russell still resides.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            He had a career with the US Department of Agriculture (NRCS) as a Civil Engineering Technician, retiring in 2006. He does consult work, volunteer work, and writes in his spare time. He has written two historical books on the history of Pleasant Hill Cemetery and Fruit Stands that once filled the highway between Sunset and Bowie. He will soon release a book of 100 poems he composed.
          </p>
          
          <p className="text-stone-600 leading-relaxed">
            He is widowed and has two grown sons, three grandchildren, and two great grandchildren.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-stone-400">Born</p>
              <p className="font-medium text-stone-700">Fort Worth, Texas</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-stone-400">Education</p>
              <p className="font-medium text-stone-700">Midwestern State University</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-stone-400">Career</p>
              <p className="font-medium text-stone-700">USDA, NRCS (Retired 2006)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-xs text-stone-400">Family</p>
              <p className="font-medium text-stone-700">2 sons, 3 grandchildren, 2 great-grandchildren</p>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-stone-600 bg-white/50 p-4 rounded-r-lg mt-4">
            "Writing about the small towns and people I've known—preserving the stories that might otherwise be forgotten."
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default AuthorBio