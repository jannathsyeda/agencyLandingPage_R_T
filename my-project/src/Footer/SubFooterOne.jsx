import React from "react";
import SubFooterOneList from "./SubFooterOneList";

export default function SubFooterOne({features}) {
 

  return (
    <>
        <SubFooterOneList features={features}/>
        <SubFooterOneList features={features}/>
        <SubFooterOneList features={features}/>
        <SubFooterOneList features={features}/>



     
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    </>
  );
}
