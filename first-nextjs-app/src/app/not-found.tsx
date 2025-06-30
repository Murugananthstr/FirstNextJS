import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    
        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-xl bg-white max-w-lg mx-auto my-auto">
          <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">Oops! The resource you requested could not be found.</p>
          <Link href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
            Go to Homepage
          </Link>
        </div>
     
  )
}

export default NotFound