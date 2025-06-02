import React from 'react'
import FeatureItem from './FeatureItem'

export default function FeaturesList({ features }) {
  return (
     <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
        {features.map((feature, index) => (
        <FeatureItem  key={index} text={feature} />
        ))}
      </ul>
  )
}
