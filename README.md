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

   - [x] Place the main section in the `sections` folder.

2. **Collections Folder**

   - [ ] Create and place all collections of components in the `collections` folder.
   - [ ] **Examples of Collections:**
     - Forms (contains inputs, checkboxes, radio buttons, buttons)
     - Menus

3. **Components Folder**
   - [ ] Place all base components that make up collections in the `components` folder.
   - [ ] **Examples of Base Components:**
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
