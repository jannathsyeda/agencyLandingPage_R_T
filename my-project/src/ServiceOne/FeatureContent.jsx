import React from 'react'
import FeaturesList from './FeaturesList'

export default function FeatureContent({ title, description, features, additionalText }) {
  return (
    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h2>
    <p className="mb-8 font-light lg:text-xl">
      {description}
    </p>
    
    <FeaturesList features={features} />
    {additionalText && (
      <p className="mb-8 font-light lg:text-xl">
        {additionalText}
      </p>
    )}
  </div>
  )
}
