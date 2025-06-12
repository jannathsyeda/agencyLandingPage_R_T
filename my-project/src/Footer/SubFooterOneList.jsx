import React from "react";
import SubFooterOneItem from "./SubFooterOneItem";

export default function SubFooterOneList({ features }) {
  return (
    <>
    {features.length > 0 && features ?(
       features.map((item,index)=>(
        <div key={index}>
        <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          {item.title}
          {console.log(item.links.label)}

        </h3>
        <ul class="text-gray-500 dark:text-gray-400">
     
     {item.links.length > 0 && item.links ?(

       item.links.map(link=>(
        <SubFooterOneItem>
          {link.label}
          {console.log(link.label)}
        </SubFooterOneItem>
      ))
     ):null}
       
    
          
        </ul>
    </div>
    
      ))
    ):null}
   

</>
  )
}