# Omar Alghannam | Portfolio Project Documentation

Welcome to the official documentation for the **Omar Alghannam Portfolio**. This project is a professional, high-performance web application designed to showcase data engineering expertise, technical projects, and professional achievements.

---

## 🚀 Overview

This portfolio is built to be more than just a static bio; it's a dynamic, interactive experience that reflects the engineering rigor and analytical mindset of a Data Engineer. It features a modern "dark mode" aesthetic (with light mode toggle), interactive canvas animations, and a responsive project showcase.

### Core Objectives:
1.  **Professional Showcase**: Highlight key projects like the Mowasla backend and SQL-powered dashboards.
2.  **Interactive UX**: Engage visitors with smooth animations, carousels, and real-time interactive elements.
3.  **Performance & Clean Code**: Leverage lean HTML5, vanilla CSS, and custom JavaScript for maximum speed and maintainability.

---

## 🛠 Technical Stack

The project adheres to a "Vanilla-First" philosophy, ensuring zero external dependencies for core functionality (except for Google Fonts).

-   **Frontend**: HTML5, CSS3 (Custom Design Tokens, Flexbox, Grid).
-   **Interactivity**: Vanilla JavaScript (ES6+).
-   **Animations**: HTML5 Canvas (Custom Particles System), Intersection Observer API for scroll reveals.
-   **Typography**: Inter (Google Fonts).
-   **Media**: Optimized JPEG/PNG assets and custom SVG iconography.

---

## 📂 Project Structure

A clean, modular structure ensures simplicity and ease of updates.

```
Port/
├── index.html                  # Main structure & content
├── styles.css                  # Design system, layout & animations
├── script.js                   # Interactive logic (Particles, Navigation, Carousels)
├── headshot.jpg                # Professional profile imagery
├── Omar_Resume (10).pdf        # Interactive CV resource
├── dashboard-1.png, -2.png     # Visual assets for BI project
├── mowasla-*.jpg               # Visual assets for Mowasla project
└── .git/                       # Version control
```

---

## ✨ Key Features & Sections

### 1. The Hero Section
-   **Dynamic Backdrop**: A custom-coded particle system running on a `<canvas>` element creates a high-tech "living" background.
-   **Call to Action**: Direct access to email, LinkedIn, GitHub, and the newly added **integrated Resume**.

### 2. About Me
-   **Bio**: Focused on Data Science & AI at Zewail City, emphasizing database design and engineering rigor.
-   **Stats Grid**: Quick-glance metrics (Projects, Languages, Achievements).

### 3. Projects Showcase
-   **Mowasla (Ride-Hailing)**: Featured with a bespoke image carousel and detailed technical breakdown (SQL, C#, ADO.NET).
-   **Data Governance**: Visualized with custom SVG pipeline diagrams.
-   **Premier League Analytics**: Demonstrating BI capabilities with high-resolution dashboard screenshots.

### 4. Technical Arsenal (Skills)
-   Categorized skill pills covering Programming, Tools, and Concepts (Indexing, ACID, Normalization).

### 5. Recognition & Achievements
-   A chronological timeline of awards, educational milestones, and specialized certifications (e.g., Robotics/Arduino).

---

## 🚦 How to Maintain & Update

### Updating Content
-   **New Project**: Add a `project-card` div in `index.html` and reference the image in the `project-visual` section.
-   **Metadata**: Update the `<meta>` tags in `index.html` for SEO improvements.

### Updating Design
-   The design uses **CSS Variables** (Design Tokens) at the top of `styles.css`. Changing the `--accent` or `--bg-primary` variables will instantly update the theme across the entire site.

### Interactive Elements
-   **Particles**: Adjust density or speed in `script.js` within the `initParticles` function.
-   **Carousels**: The logic in `script.js` is generic; simply adding images with the `.carousel-img` class inside a `.project-carousel` container will automatically enable sliding functionality.

---

## 📄 License & Contact
Developed by **Omar Alghannam**. Built with a passion for SQL, databases, and clean engineering.

For inquiries, contact [oa5429946@gmail.com](mailto:oa5429946@gmail.com).
