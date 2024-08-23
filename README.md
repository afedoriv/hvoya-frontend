<a name="readme-top"></a>

<div align="center">
<a href="https://alinafedoriv-hvoya.netlify.app/" target="_blank">
  <img src="https://github.com/user-attachments/assets/6fd77814-587c-43be-8184-bccb30a2dce6" alt="Logo" width="70">
</a>

<br />
<br />

<h3 align="center">Hvoya Pottery Co. Frontend</h3>

<br />
<p align="center">
    
This repository contains the **frontend** code for the <strong>Hvoya Pottery Co.</strong> website. It manages the user interface, user interactions, and communicates with the backend services.

<br />

<a href="https://alinafedoriv-hvoya.netlify.app/" target="_blank">View Live Demo</a>

</p>
</div>

<br />
<br />

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=532223&lines=Hvoya+Pottery+Co.)](https://git.io/typing-svg)

<details>

  <summary>Table of Contents</summary>

  <br />
  
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#technical-implementation">Technical Implementation</a></li>
      </ul>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
         <li><a href="#dependencies">Dependencies</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
    </li>
     <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#project-links">Project Links</a></li>
  </ol>

  <br />
  
</details>

<details>
  
<summary>Website Screenshots</summary>

<br />

<div align="center">
  <img src="https://github.com/user-attachments/assets/dd7874ba-4a7d-4016-b0be-6d496688261b" width="100%"/>
</div>
</details>

<br />

## About The Project

### Overview

The **Hvoya Pottery Co. frontend** is a single-page application (SPA) developed using React, React Query and Redux Toolkit. It provides a high-performance, responsive, and accessible user experience. The application interacts with a custom RESTful API built with Node.js and Express.js, which handles order creation, payment processing via Stripe, and order fulfillment. Supabase is utilized both on the frontend for real-time data management and user authentication, and on the backend for database management. The integration of Stripe ensures secure payment processing, offering users a seamless and reliable shopping experience across all devices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

-   **Dynamic Content Management:** Utilizes Supabase for real-time updates to products, categories, and other content, eliminating the need for frontend redeployments.
-   **Product Browsing:** Allows users to explore a collection of handmade pottery, with options to filter by categories or collection name and view detailed product information.
-   **Shopping Experience:** Enhances user engagement with features such as image sliders, shopping categories, and comprehensive product descriptions.
-   **Cart Management:** Provides a robust system for managing the cart, including merging carts upon login, updating quantities based on availability, and calculating estimated totals and savings.
-   **Checkout and Payment:** Integrates with Stripe to offer a secure and user-friendly checkout process, ensuring reliable payment transactions.
-   **User Authentication:** Secures user access and management through Supabase, including functionalities for sign-up, login, personal information and password management.
-   **Account Management:** Enables users to view and manage their account details, including order history with specifics such as order dates, items purchased, total amounts, etc.
-   **Real-Time Updates:** Continuously updates product availability and pricing through real-time listening, ensuring users have the latest information.
-   **Scroll Management:** Centralizes scroll behavior to provide a smooth and consistent scrolling experience throughout the application.
-   **Dynamic Routing:** Employs React Router for dynamic navigation, allowing users to seamlessly access various pages and sections.
-   **Pagination:** Implements pagination using URL parameters and context-based scroll management, with loading states to improve user experience.
-   **Dynamic Filtering and Sorting:** Incorporates responsive design practices to offer UI-based filters and sorting options, enhancing user interaction.
-   **Mobile-Friendly Design:** The application, with a responsive layout and touch-friendly interactions, is optimized for all screen sizes, ensuring a consistent user experience across devices.
-   **SEO and Accessibility Enhancements:** The site is designed with a focus on both SEO and accessibility. It uses semantic HTML for better content structure, employs ARIA attributes and meaningful _alt_ descriptions for improved accessibility, and follows best practices in SEO to enhance visibility and user experience on search engines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Tech Stack

<div align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit">
<img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query">
<img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form">
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
<img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier">
</div>
  
<br />
<br />

-   **React** - A JavaScript library utilized for building the user interface with component-based architecture, enabling efficient and dynamic rendering of the app's elements.
-   **Redux Toolkit** - Employed for managing global cart state across the application, ensuring predictable state transitions and efficient state updates.
-   **React Query** - For handling server-state management, caching, and synchronization, optimizing data fetching strategies, including prefetching and background updates.
-   **React Hook Form** - For managing form state and validation seamlessly across the application.
-   **Tailwind CSS** - A utility-first CSS framework used for styling the application and ensuring responsive design. Custom configurations include a variety of breakpoints and theme extensions such as colors and aspect ratios.
-   **Stripe** - A payment processing platform integrated for handling secure payment processing within the app.
-   **Supabase** - A Firebase alternative utilized for backend services, including authentication, database management, and real-time updates.
-   **React Router** - Deployed for managing client-side routing, ensuring smooth and efficient navigation between different views and pages.
-   **ESLint & Prettier** - Tools for code quality, consistency and formatting.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technical Implementation

-   **Responsive Design:** Tailwind CSS is used to create a fully responsive design optimized for all screen sizes and ensure a consistent user experience across all devices.
-   **Semantic HTML & Accessibility:** Used semantic tags to enhance the site’s structure, which improves both SEO and accessibility. These tags help search engines understand content hierarchy and assistive technologies in navigating the site. Integrated hidden headings, _aria-label_, and _aria-labelledby_ attributes to ensure the site is usable by people with disabilities. All images include descriptive _alt_ text to provide context for users with visual impairments. Ensured mobile-friendliness for better accessibility across devices.
-   **SEO Optimization:**
    -   **On-Page SEO:** Optimized title tags, meta descriptions, heading tags, and image alt text for better search engine rankings. Structured content with semantic HTML and used clean, descriptive URLs.
    -   **On-Page SEO:** Enhanced site speed, mobile responsiveness, and secured the site with HTTPS. Optimized internal linking, and used a robots.txt file to manage search engine crawling. All these measures contribute to improved search engine visibility and ranking.
-   **Client-Side Routing:** Using React Router to manage navigation and page transitions.
-   **Protected Routes:** Implemented with React Router to secure certain pages like the checkout and account pages.
-   **Smooth Scrolling and Scroll Restoration:** Using context and hooks to manage scroll behavior and improve navigation.
-   **Modal Management:** Utilizes React Portals for displaying modals and Context API for managing modal state. Handles clicks outside of modals to ensure proper functionality.
-   **Custom Hooks:** Encapsulate reusable logic for Stripe integration, data fetching, and other operations.
-   **Client-Side Caching and State Management:** Leveraging React Query and Redux Toolkit to manage application state and cache server responses for improved performance.
-   **Data Fetching with React Query:** Manages data fetching and caching, with prefetching to improve user experience.
-   **API-Side Filtering and Sorting:** Implemented using Supabase to handle large datasets and improve performance.
-   **Client-Side Filtering and Sorting:** Provides real-time interactivity on the frontend for filtering and sorting products.
-   **Advanced React Patterns:** Applies render props pattern and compound component pattern for reusability and organization.
-   **Database Management:** Utilizes PostgreSQL functions and triggers within Supabase to automate database operations and ensuring data integrity.
-   **Image Optimization:** Implementing strategies for efficient image loading.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

Before you begin, ensure to have the following installed:

-   **Node.js** (v16 or later)
-   **npm** (Node Package Manager)
-   **Supabase Account:** To manage your database and authentication.
-   **Stripe Account:** For processing payments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Dependencies

All dependencies are automatically installed when running the **`npm install`** command during the installation process.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

Follow these steps to set up the <strong>Hvoya Pottery Co. frontend</strong> locally:

<br />

1. Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/afedoriv/hvoya-frontend.git
cd hvoya-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Environment Setup:

Create a `config.js` file in the `src/utils/constants` directory and define your variables as follows:

```bash
export const BASE_CLIENT_URL = 'your_client_url';
export const BASE_SERVER_URL = 'your_server_url';
export const STRIPE_PUBLIC_KEY = 'your_stripe_public_key';
export const SUPABASE_PUBLIC_KEY = 'your_supabase_public_key';
export const SUPABASE_PROJECT_URL = 'your_supabase_project_url';
export const SUPABASE_STORAGE_URL = 'your_supabase_storage_url';
```

4. Start the server:

```bash
npm start
```

The server will start on the default port `http://localhost:3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

I acknowledge and thank the following resources and services for their invaluable contributions to the quality of this project:

-   **Unsplash and Pexels** - Offers the captivating collections of high-quality images, enriching the visual aesthetics of the project.
-   **Netlify** - For its reliable hosting and deployment services, ensuring seamless accessibility and optimal performance for this frontend.
-   **Google Fonts** - Contributes to the cohesive design of this project by providing the fonts. The use of Google Fonts enhances the readability and visual appeal of the user interface.
-   **Figma** - Facilitates the design process by providing a collaborative platform for designing.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Links

-   **Live Demo:** [Hvoya Pottery Co. Website](https://alinafedoriv-hvoya.netlify.app)
-   **Frontend Repository:** - [Hvoya Pottery Co. Frontend GitHub](https://github.com/afedoriv/hvoya-frontend)
-   **Backend Repository:** - [Hvoya Pottery Co. Backend GitHub](https://github.com/afedoriv/hvoya-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
