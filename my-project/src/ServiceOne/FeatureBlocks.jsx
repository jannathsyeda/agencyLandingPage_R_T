import React from 'react'
import ServiceImage from './ServiceImage'
import FeatureContent from './FeatureContent'

export default function FeatureBlocks({ title, description, features, additionalText, imageAlt,src, imageLeft = false }) {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
    {imageLeft && <ServiceImage src ={src} alt={imageAlt} />}
    <FeatureContent 
      title={title}
      description={description}
      features={features}
      additionalText={additionalText}
    />
    {!imageLeft && <ServiceImage   src ={src} alt={imageAlt} />}
   
  </div>
  )
}
