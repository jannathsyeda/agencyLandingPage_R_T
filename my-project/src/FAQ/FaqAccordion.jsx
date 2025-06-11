import React, {useState} from  'react'
import FaqItems from './FaqItems';


export default function FaqAccordion() {

 const [openItems, setOpenItems] = useState({ 1: true }); // First item open by default

const toggleItem = (id) => {
  setOpenItems(prev => ({
    ...prev,
    [id]: !prev[id]
  }));
};

const faqData = [
    {
      id: 1,
      question: "Can I use Landwind in open-source projects?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is an open-source library of interactive components built on top of Tailwind CSS 
            including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </>
      )
    },
    {
      id: 2,
      question: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is first conceptualized and designed using the Figma software so everything you see 
            in the library has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Landwind.
          </p>
        </>
      )
    },
    {
      id: 3,
      question: "What are the differences between Landwind and Tailwind UI?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Landwind are open source under the MIT license, 
            whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and 
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is 
            no technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                Landwind Pro
              </a>
            </li>
            <li>
              <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      )
    },
    {
      id: 4,
      question: "What about browser support?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind supports all modern browsers including Chrome, Firefox, Safari, and Edge. 
            The components are built with progressive enhancement in mind, ensuring graceful 
            degradation on older browsers.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Since Landwind is built on top of Tailwind CSS, it inherits the same browser support 
            that Tailwind CSS provides, which includes support for the latest stable versions of 
            Chrome, Firefox, Edge, and Safari.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        Frequently asked questions
      </h2>
      <div className="max-w-screen-md mx-auto">
        <div className="bg-white dark:bg-gray-900">
          {faqData.map((item) => (
            <FaqItems
              key={item.id}
              id={item.id}
              question={item.question}
              isOpen={openItems[item.id] || false}
              onToggle={() => toggleItem(item.id)}
            >
              {item.content}
            </FaqItems>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
