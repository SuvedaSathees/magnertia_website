const fs = require('fs');

const logoB64 = fs.readFileSync('d:/intern/public/logo.png').toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <clipPath id="circle-crop">
      <circle cx="256" cy="256" r="250" />
    </clipPath>
  </defs>
  <circle cx="256" cy="256" r="256" fill="#ffffff" />
  <image href="data:image/png;base64,${logoB64}" width="512" height="512" clip-path="url(#circle-crop)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync('d:/intern/public/favicon.svg', svgContent);
fs.writeFileSync('c:/Users/Admin/OneDrive/Desktop/intern/public/favicon.svg', svgContent);

console.log('Successfully created circular SVG favicons!');
