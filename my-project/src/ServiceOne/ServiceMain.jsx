import React from 'react'
import FeatureBlocks from './FeatureBlocks';
import FeatureImages from '../assets/features/feature-1.png'
import featuresImagesTwo from '../assets/features/feature-2.png'

export default function ServiceMain() {
    const firstBlockFeatures = [
        "Continuous integration and deployment",
        "Development workflow",
        "Knowledge management"
      ];
    
      const secondBlockFeatures = [
        "Dynamic reports and dashboards",
        "Templates for everyone",
        "Development workflow",
        "Limitless business automation",
        "Knowledge management"
      ];
    
  return (
  <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <FeatureBlocks
          title="Work with tools you already use"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          features={firstBlockFeatures}
          additionalText="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          imageAlt="dashboard feature image"
          imageLeft={false}
          src={FeatureImages}
        />
        
        <FeatureBlocks
          title="We invest in the world's potential"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          features={secondBlockFeatures}
          additionalText="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          imageAlt="feature image 2"
          imageLeft={true}
          src={featuresImagesTwo}
        />
      </div>
    </section>  )
}
