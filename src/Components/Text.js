import React from "react";

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap');
</style>

function Text({ children,class1}) {
  return(
    <h1 style={{fontFamily: "Mulish, sans-serif"}} class={class1}>{children}</h1>
  );
}

export default Text;
