import React from 'react'
import ChevronDown from './ChevronDown'


export default function FaqItems({ question, children, isOpen, onToggle, id }) {
  return (
    <>
    <h3 id={`accordion-heading-${id}`}>
      <button
        type="button"
        className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
          isOpen 
            ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white' 
            : 'text-gray-500 dark:text-gray-400'
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${id}`}
      >
        <span>{question}</span>
        <ChevronDown 
          className={`w-6 h-6 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </h3>
    <div 
      id={`accordion-body-${id}`}
      className={isOpen ? '' : 'hidden'}
      aria-labelledby={`accordion-heading-${id}`}
    >
      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </div>
  </>
  )
}
