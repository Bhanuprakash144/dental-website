Today's Dental Website
A React-based website for Today's Dental Services, built with Vite for a Front-End Development Internship assignment.
Features

Pages: Home, About, Services, Contact
Components: Header, Footer, FAQ
Technologies: React, Vite, react-router-dom, Bootstrap
Responsive design
Basic form validation

Setup

Clone the repo:
git clone https://github.com/Bhanuprakash144/dental-website.git
cd dental-website


Install dependencies:
npm install


Run the development server:
npm run dev


Access at http://localhost:5173 (or port shown in terminal).


Build for production:
npm run build


Deploy to Vercel:

Install Vercel CLI: npm i -g vercel
Run: vercel
Follow prompts to deploy.


Deploy to GitHub Pages:

Install: npm install --save-dev gh-pages

Add to package.json:
"homepage": "https://Bhanuprakash144.github.io/dental-website/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Run: npm run deploy




Notes

Form submission logs to console (mock API).
Replace Google Maps URL with actual clinic location.
Repository: https://github.com/Bhanuprakash144/dental-website
Live demo: [Add URL after deployment, e.g., https://dental-website.vercel.app or https://Bhanuprakash144.github.io/dental-website/\]

Contact
Email: [your-email@example.com]


Form submission logs to console (mock API).
Replace Google Maps URL with actual clinic location.
Live demo: [Add link after deployment]

Contact
Email: [your-email@example.com]
