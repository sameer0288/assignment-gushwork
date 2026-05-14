# Gushwork Web Development Assignment

## 🚀 Live Demo
[**View Live Project Here**]()

---

## 📝 Project Overview
This project is a responsive, high-performance web page built entirely with **Vanilla HTML, CSS, and JavaScript**—strictly without external frameworks or libraries, as per the assignment specifications. 

The design is a pixel-perfect implementation of the provided "Mangalam HDPE Pipes" Figma mockups, featuring intricate interactive elements like a custom image zoom, a dynamically appearing sticky header, and a responsive accordion FAQ.

## ✨ Key Features Implemented

### 1. Sticky Header
- Monitors scroll position via an event listener.
- Calculates the bottom of the "first fold" dynamically.
- Drops down smoothly above the navigation bar upon scrolling down.
- Disappears seamlessly when scrolling back to the top.

### 2. Interactive Image Carousel with Zoom
- Built from scratch without third-party plugins.
- **Carousel**: Clicking on the thumbnail images correctly updates the main display image.
- **Magnifying Logic**: On mouse hover over the main image, a customized scale lens appears. As the mouse moves, the X and Y coordinates calculate precise backgrounds to a secondary display window—producing a high-quality "Zoom to Fit" magnifying effect.

### 3. Responsive Design
- Built "Mobile First" incorporating CSS Flexbox and CSS Grid.
- Employs a hamburger menu on tablet/mobile screens.
- Completely seamless layout transitions from `375px` (mobile) to `1440px` (desktop).

### 4. Code Quality & Best Practices
- **Semantic HTML5**: Code uses strict structural tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
- **Modern CSS**: Variables (`:root`) used for theme consistency (colors, shadows, spacing, typography).
- **Vanilla Setup**: `script.js` handles DOM manipulation modularly with well-commented blocks. Custom SVGs are embedded cleanly. 
- **Accessibility**: Includes focus states, proper `aria-expanded` attributes for the accordion, and clear `alt` text for images.

---

## 📁 File Structure

```text
/assignment
│
├── index.html        # Semantic HTML5 markup and structure
├── styles.css        # Custom Properties, Flexbox/Grid layouts, Media Queries
├── script.js         # Logic for Sticky Header, Carousel Zoom, and FAQ Accordion
└── README.md         # Documentation and assignment overview
```

## 🛠️ Setup & Installation

Since the project uses zero dependencies, running it locally is incredibly fast and simple:
1. Clone the repository or download the folder.
2. Open `index.html` directly in your favorite modern browser (Chrome, Firefox, Safari, Edge).
3. Alternatively, use a local server like VS Code's "Live Server" extension for the best developer experience.

---

## ✅ Evaluation Criteria Checklist

- [x] **Accuracy**: Pixel-perfect match with the provided Figma layout, colors, and typography.
- [x] **Code Quality**: Highly organized, well-commented, semantic, and modern code execution.
- [x] **Sticky Functionality**: Header behavior matches instructions precisely.
- [x] **Carousel & Zoom Execution**: Hovering magnifies the image smoothly.
- [x] **Responsive**: Elements resize and stack correctly across all modern devices. 

---
*Developed for the Gushwork UI/Frontend Assignment.*
