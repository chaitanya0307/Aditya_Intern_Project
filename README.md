# Aditya_Intern_Project
# Grasim Dashboard 

A clean, responsive, and interactive UI for the Aditya Birla Grasim Industries dashboard. This project uses modern CSS for styling and JavaScript for core interactivity—perfect for showcasing products, company info, and sustainability efforts.



 Overview

This dashboard is a **static (no backend)** web project designed to present Grasim’s corporate content: industries, products, sustainability, blog, and contact sections. It’s styled with CSS variables, layout utilities, and interactive components built using vanilla JavaScript.


 Key Features

- **CSS Variables & Theme**  
  Manageable color palette (`--primary-color`, `--secondary-color`, grays, fonts) for consistent theming across the site.

- **Responsive Layouts**  
  Flexible grid/flex containers (`info-grid`, `product-grid`, etc.) with media queries ensure mobile-first responsiveness.

- **Styled Components**  
  Buttons, cards, forms, hero overlay, and footer styled with hover effects and smooth transitions.

- **JavaScript Interactivity**  
  - Hamburger menu toggle for mobile navigation  
  - Cookie consent banner with localStorage persistence  
  - Smooth in-page scrolling  
  - Basic alert-based search placeholder  



 CSS Architecture

```text
:root
 ├── Variables (colors, fonts, spacing)
 ├── Global reset (`*`)
 ├── Utilities (.container, .cta-button, etc.)
 ├── Layout & Components (navbar, hero, cards, grids, forms, footer)
 └── Responsive rules via media queries (breakpoints at 992px, 768px, 480px)
 JavaScript Functionality
Auto-Close Menu on Link Click

Improves UX: menu closes when a navigation link is clicked in mobile view.

Cookie Consent Banner

 Setup & Installation
Clone the repo:
git clone https://github.com/chaitanya0307/Aditya_Intern_Project -dashboard.git
cd grasim-dashboard
Optionally tweak variables at the top of style.css for brand customization.

Open index.html in your browser — no build tools or server required.


Crafted with care by Chaitanya
A modern, responsive dashboard built with foundational web tech—no frameworks, just semantic HTML, maintainable CSS, and vanilla JavaScript.
