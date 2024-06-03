# Project NextJS - Test

## Overview

This project involves creating a section as specified in the provided designs and organizing the components according to the given structure and conventions.

## Requirements

### Main Section

1. **Section to Create:** Agency Selection

2. **Design References:**

   - Desktop: [`agencyselection.png`](https://github.com/Darkbound/NextjsTest/blob/main/resources/agencyselection.png)
   - Mobile: [`mobileagencyselection.png`](https://github.com/Darkbound/NextjsTest/blob/main/resources/mobileagencyselection.png)

3. **Folder:** `sections`

### Folder Structure

1. **Sections Folder**

   - Place the main section in the `sections` folder.

2. **Collections Folder**

   - Create and place all collections of components in the `collections` folder.
   - **Examples of Collections:**
     - Forms (contains inputs, checkboxes, radio buttons, buttons)
     - Menus

3. **Components Folder**

   - Place all base components that make up collections in the `components` folder.
   - **Examples of Base Components:**
     - Typography
     - Buttons
     - Checkboxes

### Design Resources

1. **Resources Folder:**
   Contains assets and designs for desktop and mobile views.

   - **Assets:** `agencyselection.png`, `mobileagencyselection.png`, `background.png`, `video.png`

### Component Conventions

1. **Folder Structure:**
   Each component must have its own folder.

   - **Files within Component Folder:**

     - `index.js`: Exports the component.
     - `elements.jsx`: Imports and styles all the components used to create the component.
     - The final component should only import the components it needs from `./elements`.

### Image Handling

1. Use the `Image` component imported from `next/image` for all images.

### Responsive Design

1. Ensure the section collapses into a mobile layout under 1024px width.

### Usage

To run this application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/radromanov/nextjs-test
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nextjs-test
   ```

3. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/en/download/package-manager) installed on your machine. Then run:
   ```bash
   npm install
   ```
   I've used [pnpm](https://pnpm.io/) for this project but feel free to your package manager of choice.
4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   The project should now be running on http://localhost:3000.

5. **Build and Start the Project:**

   ```bash
   npm run build
   npm start
   ```

6. **Lint the Code:**
   ```bash
   npm run lint
   ```

### Dependencies

- class-variance-authority: ^0.7.0
- clsx: ^2.1.1
- lucide-react: ^0.381.0
- next: 14.2.3
- react: ^18
- react-dom: ^18
- tailwind-merge: ^2.3.0
- tailwindcss-animate: ^1.0.7

### Dev Dependencies

- @types/node: ^20
- @types/react: ^18
- @types/react-dom: ^18
- eslint: ^8
- eslint-config-next: 14.2.3
- postcss: ^8
- tailwindcss: ^3.4.1
- typescript: ^5
