import React from 'react'
import Facebook from '../Svg/Facebook';
import Instagram from '../Svg/Instagram';
import Twitter from '../Svg/Twitter';
import Github from '../Svg/Github';
import Dribbble from '../Svg/Dribbble';

export default function SocialLinks({ icons }) {
    
   
    //   console.log(socialIcons[0].icon)
  return (
    <ul className="flex justify-center mt-5 space-x-5 ">
    {icons.map((social, index) => {
      const IconComponent = social.icon;
      return (
        <li key={index}>
          <a 
            href={social.href} 
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 transition-colors duration-200"
            aria-label={`Follow us on ${social.name}`}
          >
            <IconComponent />
          </a>
        </li>
      );
    })}
  </ul>
  )
}
