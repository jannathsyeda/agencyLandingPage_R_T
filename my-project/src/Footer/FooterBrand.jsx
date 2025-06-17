import React from "react";

export default function FooterBrand({src, imghrf,builtWithLinks,title,description}) {
  return (
    <>
      <a
        href={imghrf}
        class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src={src}
          class="h-6 mr-3 sm:h-9"
          alt="Learn with Sumit Logo"
        />
        {title}
      </a>
      <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
       {description}
        <a
          href="#"
          target="_blank"
          class="text-purple-600 hover:underline dark:text-purple-500"
        >
          {builtWithLinks[0].name}
        </a>{" "}
        and{" "}
        <a
          href="#"
          class="text-purple-600 hover:underline dark:text-purple-500"
        >
          {builtWithLinks[1].name}
        </a>
        .
      </span>
    </>
  );
}
