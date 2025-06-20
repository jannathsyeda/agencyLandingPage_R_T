import React from 'react'



export default function PricingUpperPart({title,description}) {
  return (
    <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">{description}</p>
            </div>
  )
}
