
# Aurelia International Academy

A modern, responsive school website designed to present the school's vision, academic programmes, campus facilities and student experiences through a clean and elegant interface.

## Live Website

https://aurelia-international-academy.vercel.app/

## GitHub Repository

https://github.com/codeWithNarayan07/aurelia-international-academy

## Project Overview

Aurelia International Academy is a frontend website built to provide visitors with an informative and engaging overview of a fictional educational institution.

The website focuses on clean visual design, intuitive navigation, responsive layouts and interactive user experiences.

## Features

- **Home:** Introduction to the academy with a prominent hero section.
- **About Us:** School overview, vision and educational approach.
- **Academics:** Academic stages and learning programmes.
- **Facilities:** Overview of campus facilities and learning spaces.
- **Photo Gallery:** Visual gallery with interactive category filters.
- **Contact Us:** Contact form with client-side input validation.
- **Responsive Design:** Layout adapted for desktop, tablet and mobile screens.
- **Navigation:** Section-based navigation for easy browsing.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

## Project Structure

```text
aurelia-academy/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Facilities.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codeWithNarayan07/aurelia-international-academy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd aurelia-international-academy
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production version |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

## Form Functionality

The contact form includes client-side validation for required fields and input formats. It currently demonstrates frontend validation and a success state; it is not connected to an email service or backend database.

## Deployment

The project is deployed using Vercel.

Live URL: https://aurelia-international-academy.vercel.app/

---

Developed as a frontend development assignment.
