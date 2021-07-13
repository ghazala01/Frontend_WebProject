import React from "react";

function Features({children,heading}) {
  
  return (
  <div class="mb-8 w-full text-center place-items-center grid grid-flow-row">
      {children}
      
      <h1 
      style={{fontFamily: "Mulish, sans-serif"}} 
      class=" mt-4 font-bold self-center mb-3"
      >
          {heading}
      </h1>
      
      <p 
      style={{fontFamily: "Mulish, sans-serif"}}
      class="text-gray-600 text-sm font-normal w-3/4" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. 
      </p>

  </div>
  );
}

export default Features;
