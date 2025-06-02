import React from 'react'

export default function ServiceImage({ src, className = "" }) {
  return (
    <div className={`hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex bg-gray-200 dark:bg-gray-600 ${className}`}>
    <div className="flex items-center justify-center w-full h-64 text-gray-400 dark:text-gray-500">
      {/* <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg> */}
      <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={src}/>

    </div>
  </div>
  )
}
