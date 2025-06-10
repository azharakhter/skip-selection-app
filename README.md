# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)







💡 Skip Size Selection App - React Frontend Challenge
Redesign of the skip size selection page for WeWantWaste.co.uk with enhanced UI/UX.

🔗 Links
GitHub Repository: [insert GitHub link]

CodeSandbox Demo: [insert CodeSandbox link]

Live Demo: [insert live site link]

📚 Table of Contents
Project Overview

Folder Structure

Key Features

Technical Approach

Installation

Available Scripts

Dependencies

References

🚀 Project Overview
This project is a redesign of the skip size selection page focusing on:

✅ Modern, responsive UI (Material UI)

🌗 Light/Dark mode support

⚙️ Optimized API handling with Axios

🧱 Feature-based architecture

⚠️ Comprehensive error handling

🔁 Reusable logic via custom hooks


📁 Folder Structure
css
Copy
Edit
src/
├── assets/
│   ├── images/
│   └── styles/
│       ├── globalStyles.js
│       └── theme.js
├── features/
│   └── SkipSelection/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── utils/
│       ├── SkipSelection.jsx
│       └── selectionContext.js
├── App.js
└── index.js


🧩 Benefits of Feature-Based Architecture
🛠️ Maintainability: All feature code colocated for easy updates

🧱 Scalability: Add new features without restructuring

👥 Team Efficiency: Parallel development across features

🚪 Clear Boundaries: Minimize coupling

🧪 Simplified Testing: Features testable in isolation

📖 Reference: Feature-Sliced Design


🔑 Key Features
1. API Services
Centralized API handling:

✅ Configured Axios instance

🔁 Request/response interceptors

🧰 Type-safe responses with JSDoc

❗ Error handling middleware


2. Custom Hooks
useSkips: Data fetch and state management

useWindowSize: Responsive behavior

useFormValidation: Input validation


3. UI Components with Material UI
🎨 Themed and consistent design

🖥️ Responsive grid layout

🌗 Dark/Light mode

🎞️ Animated using Framer Motion

♿ Accessible with ARIA

4. Utility Functions
errorHandler.js: Standard error formatting

formatters.js: Data transformation helpers

validators.js: Validation logic

responsive.js: Media query utilities

⚙️ Technical Approach
State Management: React Context API

Styling: Material UI + styled-components

API: Axios with interceptors

Performance: useMemo, useCallback, React.memo

Responsiveness: Mobile-first with breakpoints

Accessibility: Semantic HTML + ARIA attributes

🧪 Installation
bash
Copy
Edit
git clone https://github.com/yourusername/skip-selection-app.git
cd skip-selection-app
npm install
npm start
📜 Available Scripts
npm start: Run development server

npm test: Launch test runner

npm run build: Create production build

npm run lint: Lint code using ESLint

npm run format: Format code with Prettier

📦 Dependencies
React 18

Material UI 5

Axios

Framer Motion

Styled Components

React Icons

📚 References
Material UI Documentation

React Best Practices

Feature-Sliced Design

Axios Documentation

Framer Motion Documentation