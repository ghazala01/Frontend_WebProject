import React from "react";
import Text from "./Text";

function Studies({class1,src,sub,heading,desc}) {
  
  return (
    <div class="place-self-center grid grid-flow-row w-4/5 gap-2">
        <div class={class1}>
            <img class="rounded-sm mb-5"  src={src} />
            <Text class1="text-gray-600 text-sm">{sub}</Text>
            <Text class1="font-bold text-xl">{heading}</Text>
            <Text class1="text-gray-600 text-md">{desc}</Text>
            <div class="grid grid-flow-col w-28">
                <a class="underline text-cyan-800">Read story</a>
                <svg class="place-self-center"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.16678 4H12.8334" stroke="#0E7490" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 7.33333L12.8333 4" stroke="#0E7490" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 0.666611L12.8333 3.99994" stroke="#0E7490" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
 );
}

export default Studies;
