# Classic Business Centre (CBC) - Website Redesign

A mobile-first, highly responsive website built for Classic Business Centre, Goa's premier print and design hub. This redesign focuses on mobile accessibility, streamlined WhatsApp ordering, and showcasing state-of-the-art printing machinery.

## 🚀 Features

*   **Mobile-First Responsive Design:** Fully optimized for smartphones and tablets, eliminating previous zooming and scaling issues.
*   **Dynamic Branch Selection:** An intuitive modal popup greets users, allowing them to select their preferred branch (Panjim M.G. Road, Panjim Patto Plaza, Mapusa, or Porvorim). 
*   **Robust WhatsApp Integration:** Uses plain-text, highly compatible URL encoding for WhatsApp API links, ensuring order templates work across all devices without formatting errors.
*   **Modular Architecture:** HTML, CSS, and JavaScript are split into dedicated files and folders for easy maintenance and scaling.
*   **Brochure-Accurate Information:** Service descriptions and machinery capabilities are sourced directly from the official CBC brochure.

## 📁 Folder Structure

Ensure your project matches the following structure:

\`\`\`text
cbc-website/
├── index.html
├── README.md
├── CHANGELOG.md
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── branches.js
│   └── order-builder.js
└── images/
    ├── favicon.ico
    ├── logo.png
    ├── xerox-1000.jpg
    ├── xerox-exi-180.jpg
    ├── vinyl-flex-printer.jpg
    ├── cad-plotter.jpg
    ├── offset-machine.jpg
    └── jumbo-laminator.jpg
\`\`\`

## 🖼️ Image Assets Required

To complete the setup, generic, high-quality images must be downloaded and placed in the `images/` directory matching the exact filenames listed above. 

## 💻 Local Setup

No build tools or servers are required to view this project locally.
1. Download or clone the repository.
2. Ensure all images are placed in the `images/` folder.
3. Open `index.html` in any modern web browser (Chrome, Safari, Edge, Firefox).
4. Use your browser's Developer Tools (F12) to toggle Device Simulation and test the mobile layout.
