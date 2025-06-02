import React from 'react'
import CheckIcon from './CheckIcon'

export default function FeatureItem({text}) {
  return (
   <li className="flex space-x-3">
<CheckIcon/>      
 <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
         {text}
       </span>
     </li>
  )
}
