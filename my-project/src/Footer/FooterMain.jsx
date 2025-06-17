import React from "react";
import SubFooterOneList from "./SubFooterOneList";
import SocialLinks from "./SocialLinks";
import Facebook from "../Svg/Facebook";
import Instagram from "../Svg/Instagram";
import Github from "../Svg/Github";
import Dribbble from "../Svg/Dribbble";
import Twitter from "../Svg/Twitter";
import FooterBrand from "./FooterBrand";
import logo from '../assets/logo.svg'
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

  const socialIcons = [
          {
            name: 'Facebook',
            href: '#',
            icon: Facebook
          },
          {
            name: 'Instagram',
            href: '#',
            icon: Instagram
          },
          {
            name: 'Twitter',
            href: '#',
            icon: Twitter
          },
          {
            name: 'GitHub',
            href: '#',
            icon: Github
          },
          {
            name: 'Dribbble',
            href: '#',
            icon: Dribbble
          }
        ];
     const    builtWithLinks = [
          { name: "Flowbite", url: "#" },
          { name: "Tailwind CSS", url: "#" }
        ]
const title="Learn with Sumit"
const imghrf="#"
const description="© 2024-2025 Learn with Sumit. All Rights Reserved. Built with"
  // const footerLinks = [
  //   { text: 'Flowbite', href: '#' },
  //   { text: 'Tailwind CSS', href: '#' }
  // ]


  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <SubFooterOneList features={footerSections} />
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="text-center">

          <FooterBrand description={description} src={logo} imghrf={imghrf} builtWithLinks={builtWithLinks} title={title}/>
          <SocialLinks icons={socialIcons}/> 
        </div>
      </div>
    </footer>
  );
}
