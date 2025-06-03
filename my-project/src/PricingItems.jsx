import React, { children } from 'react'

export default function PricingItems({icon ,children}) {
    console.log(children)
  return (
    <li class="flex items-center space-x-3">
{icon}
         
            <span>{children}</span>
    </li>
  )
}
