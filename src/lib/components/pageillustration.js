import React from "react";

const pageillustration = () => {
    return(
        <svg height="100%" width="100%">
  <defs>
    <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
      <stop offset="0%" stop-color="#3182ce"/>
      <stop offset="14.29%" stop-color="#348fc5"/>
      <stop offset="28.57%" stop-color="#389ac2"/>
      <stop offset="42.86%" stop-color="#3ca5c1"/>
      <stop offset="57.14%" stop-color="#41b0c2"/>
      <stop offset="71.43%" stop-color="#45bbc3"/>
      <stop offset="100%" stop-color="#4fd1c5"/>
    </linearGradient>
    <radialGradient id="1" gradientTransform="translate(-0.5 0) scale(2, 2)">
      <stop offset="0%" stop-color="#feb2b2"/>
      <stop offset="25%" stop-color="rgba(252, 184, 219, 0.75)"/>
      <stop offset="50%" stop-color="rgba(239, 194, 250, 0.5)"/>
      <stop offset="100%" stop-color="rgba(190, 227, 248, 0)"/>
    </radialGradient>
    <linearGradient id="2" x1="0" y1="0.5" x2="1" y2="0.5">
      <stop offset="0%" stop-color="rgba(255, 0, 0, 0)"/>
      <stop offset="25%" stop-color="rgba(242, 105, 182, 0.25)"/>
      <stop offset="50%" stop-color="rgba(228, 158, 234, 0.5)"/>
      <stop offset="100%" stop-color="#edf2f7"/>
      <stop offset="87.5%" stop-color="rgba(212, 209, 236, 0.75)"/>
      <stop offset="75%" stop-color="rgba(228, 158, 234, 0.5)"/>
      <stop offset="50%" stop-color="rgba(255, 0, 0, 0)"/>
    </linearGradient>
  </defs>
  <rect fill="url(#0)" height="100%" width="100%"/>
  <rect fill="url(#1)" height="100%" width="100%"/>
  <rect fill="url(#2)" height="100%" width="100%"/>
</svg>

    );
};

export default pageillustration; 