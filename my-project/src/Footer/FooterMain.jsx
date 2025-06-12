import React from "react";
import SubFooterOneList from "./SubFooterOneList";

export default function FooterMain() {

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Help center",
      links: [
        { label: "Discord Server", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Licensing", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Download",
      links: [
        { label: "iOS", href: "#" },
        { label: "Android", href: "#" },
        { label: "Windows", href: "#" },
        { label: "MacOS", href: "#" },
      ],
    },
  ];

  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
              <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        
        <SubFooterOneList features={footerSections}/>
        </div>
      </div>
    </footer>
  );
}
